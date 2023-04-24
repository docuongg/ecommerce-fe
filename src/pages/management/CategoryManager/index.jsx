import styled from "styled-components";
import { EnhancedTable } from "~/components/components/table";
import { useSelector, useDispatch } from "react-redux";
import { destroy, index } from "~/features/api/categoryAPI"
import { useState, useEffect } from "react";
import EditModal from "./EditModal";
import AddModal from "./AddModal"

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

function CategoryManager() {

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
      id: 'description',
      numeric: true,
      disablePadding: false,
      label: 'Description',
    }
  ];

  const dispatch = useDispatch();
   
  const categories = useSelector(state => state.category.categories)
  const [category, setCategory] = useState(categories)
  
  useEffect(() => {
    index()
    .then(response => {
      setCategory(response.data)
      dispatch(setCategories(response.data));
    });
  }, [categories.length])

  const handleDelButton = (ids) => {
    ids.forEach((id) => {
      destroy(id)
        .then((response) => {
          dispatch(delCategories(id))
        })
    })
  }

  return ( 
    <div>
      <RowContainer>
        <ColContainer>
          <EnhancedTable rows={category} headCells={headCells} title={'Category'} clickDel={handleDelButton} EditButton={EditModal } AddButton={AddModal} />
        </ColContainer>
      </RowContainer>
    </div>
  )
}

export default CategoryManager;