import styled from "styled-components";
import { EnhancedTable } from "~/components/components/table";
import { index } from "~/features/api/user/orderAPI"
import { useState, useEffect } from "react";
import ShowModal from "./ShowModal";
import CancelButton from "./CancelButton"

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

function Orders({id}) {

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'ID',
    },
    {
      id: 'total_price',
      numeric: true,
      disablePadding: false,
      label: 'Total Price',
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
    }
  ];

  const [orders, setOrders] = useState([])
  
  useEffect(() => {
    index(id)
    .then(response => {
      console.log(response)
      setOrders(response)
    });
  }, [])

  
  return ( 
    <div>
      <EnhancedTable rows={orders} headCells={headCells} title={'Order'} ShowButton={ShowModal} CancelButton={CancelButton}/>
    </div>
  )
}

export default Orders;