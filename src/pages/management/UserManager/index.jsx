import styled from "styled-components";
import { EnhancedTable } from "~/components/components/table";
import { useSelector, useDispatch } from "react-redux";
import { index, destroy } from "~/features/api/userAPI"
import { useState, useEffect } from "react";
import EditModal from "./EditModal";
import AddModal from "./AddModal"

import { setProducts, delProducts } from "~/features/slice/productSlice";
import { setCategories } from "~/features/slice/categorySlice";

const RowContainer = styled.div`
  display: flex;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 24px;
`

const ColContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  flex: 1;
`

function UserManager() {

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'ID',
    },
    {
      id: 'user_name',
      numeric: true,
      disablePadding: false,
      label: 'UserName',
    },
    {
      id: 'full_name',
      numeric: true,
      disablePadding: false,
      label: 'Full Name',
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: 'Email',
    },
    {
      id: 'address',
      numeric: true,
      disablePadding: false,
      label: 'Address',
    }
  ];

  const dispatch = useDispatch();
   
  const products = useSelector(state => state.product.products)
  const [product, setProduct] = useState(products)

  useEffect(() => {
    index()
    .then(response => {
      setProduct(response.data)
      dispatch(setProducts(response.data));
    });
  }, [products.length])

  const handleDelButton = (ids) => {
    ids.forEach((id) => {
      destroy(id)
        .then((response) => {
          dispatch(delProducts(id))
        })
    })
  }
  
  return ( 
    <div>
      <RowContainer>
        <ColContainer>
          <EnhancedTable rows={product} headCells={headCells} title={'User'} clickDel={handleDelButton} EditButton={EditModal } AddButton={AddModal} />
        </ColContainer>
      </RowContainer>
    </div>
  )
}

export default UserManager;