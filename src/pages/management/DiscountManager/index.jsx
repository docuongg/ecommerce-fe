import styled from "styled-components";
import { EnhancedTable } from "~/components/components/table";
import { useSelector, useDispatch } from "react-redux";
import { destroy, index } from "~/features/api/discountAPI"
import { useState, useEffect } from "react";
import EditModal from "./EditModal";
import AddModal from "./AddModal"
import SendModal from "./SendModal"

import { setCategories, delCategories } from "~/features/slice/categorySlice";

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

function DiscountManager() {

    const headCells = [
        {
          id: 'id',
          numeric: false,
          disablePadding: true,
          label: 'ID',
        },
        {
          id: 'name',
          numeric: true,
          disablePadding: false,
          label: 'Name',
        },
        {
          id: 'code',
          numeric: true,
          disablePadding: false,
          label: 'Code',
        },
        {
            id: 'kind',
            numeric: true,
            disablePadding: false,
            label: 'Kind',
        },
        {
            id: 'value',
            numeric: true,
            disablePadding: false,
            label: 'Value',
        }
    ];

    const dispatch = useDispatch();
   
    const discounts = useSelector(state => state.category.categories)
    const [discount, setDiscount] = useState(discounts)
    
    useEffect(() => {
        index()
        .then(response => {
            setDiscount(response.data)
            dispatch(setCategories(response.data));
        });
    }, [discounts.length])

    const handleDelButton = (ids) => {
        ids.forEach((id) => {
        destroy(id)
            .then((response) => {
                dispatch(delCategories(id))
            })
        })
    }

    return (  
        <RowContainer>
            <ColContainer>
                <EnhancedTable rows={discount} headCells={headCells} title={'Discount'} clickDel={handleDelButton} EditButton={EditModal} AddButton={AddModal} SendButton={SendModal} />
            </ColContainer>
        </RowContainer>
    );
}

export default DiscountManager;