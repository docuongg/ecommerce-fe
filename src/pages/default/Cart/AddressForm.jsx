import React, { useState, useEffect } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@mui/material/Button';
import styled from "styled-components";
import axios from 'axios';
import { setFee } from '~/features/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const SelectBox = styled.div`
  display: flex;
`

const AddressForm = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState('');

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFee(0))
    // Fetch cities
    axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
      headers: {
        token: "91fd252f-f54d-11ed-a281-3aa62a37e0a5"
      }
    })
      .then(response => {
        setCities(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  }, []);
  
  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);

    // Fetch districts based on selected city
    axios.get("https://online-gateway.ghn.vn/shiip/public-api/master-data/district", {
      headers: {
        token: "91fd252f-f54d-11ed-a281-3aa62a37e0a5"
      }, params: {
        province_id: cityId
      }
    })
      .then(response => {
        setDistricts(response.data.data);
        setSelectedDistrict('');
        setWards([]);
      })
      .catch(error => {
        console.error('Error fetching districts:', error);
      });
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    // Fetch wards based on selected district
    axios.get("https://online-gateway.ghn.vn/shiip/public-api/master-data/ward", {
      headers: {
        token: "91fd252f-f54d-11ed-a281-3aa62a37e0a5"
      }, params: {
        district_id: districtId
      }
    })
      .then(response => {
        setWards(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching wards:', error);
      });
  };

  const handleWardChange = (e) => {
    const wardCode = e.target.value;
    setSelectedWard(wardCode);
    axios.post("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee", {
      service_id: 53321,
      insurance_value: 500000,
      coupon: null,
      to_district_id: selectedDistrict,
      to_ward_code: wardCode,
      height: 15,
      length: 15,
      weight: 1000,
      width: 15
    }, { 
      headers: {
        'Token': "91fd252f-f54d-11ed-a281-3aa62a37e0a5",
        'ShopId': 4147710
      }
    })
      .then(response => {
        console.log(response.data.data.total)
        dispatch(setFee(Math.round(response.data.data.total/1000)))
      })
      .catch(error => {
        console.error('Error fetching wards:', error);
      });
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, width: 240, marginTop: 1, marginLeft: 0 }} >
        <SelectBox>
          <InputLabel id="demo-simple-select-standard-label">Select City</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="select-city"
            style={{ width: 480 }}
            value={selectedCity}
            onChange={handleCityChange}
            label="Select City"
          >
          {
            cities.map((city, index) => {
              return <MenuItem value={city.ProvinceID} key={index}>{city.ProvinceName}</MenuItem>
            })
          }
          </Select>
        </SelectBox>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 240, marginTop: 1, marginLeft: 0 }} style={{marginTop: 16}} >
        <SelectBox>
          <InputLabel id="demo-simple-select-standard-label">Select District</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="select-district"
            style={{ width: 480 }}
            value={selectedDistrict}
            onChange={handleDistrictChange}
            label="Select District"
          >
          {
            districts.map((district, index) => {
              return <MenuItem value={district.DistrictID} key={index}>{district.DistrictName}</MenuItem>
            })
          }
          </Select>
        </SelectBox>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: 240, marginTop: 1, marginLeft: 0 }} style={{marginTop: 16}} >
        <SelectBox>
          <InputLabel id="demo-simple-select-standard-label">Select Ward</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="select-ward"
            style={{ width: 480 }}
            value={selectedWard}
            onChange={handleWardChange}
            label="Select Ward"
          >
          {
            wards.map((ward, index) => {
              return <MenuItem value={ward.WardCode} key={index}>{ward.WardName}</MenuItem>
            })
          }
          </Select>
        </SelectBox>
      </FormControl>
    </>
  );
};

export default AddressForm;
