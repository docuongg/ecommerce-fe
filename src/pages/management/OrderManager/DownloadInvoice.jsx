import React, { useState, useEffect } from 'react';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from '@mui/material/Button';
import diacritic from 'diacritic';

import { index } from "~/features/api/purchasedProductAPI"

function DownloadInvoice({ item }) {

  const [products, setProducts] = useState([])

  async function exportPDF() {
    try {
      const response = await index(item.id);
      const products = response.data;
  console.log(products)
    
      const pdf = new jsPDF();
      const date = new Date()
      
      pdf.setFont('Times');

      pdf.line(10, 10, 200, 10)
      pdf.line(10, 10, 10, 40)
      pdf.line(200, 10, 200, 40)
      pdf.line(100, 10, 100, 40)

      pdf.text('KFC Store', 20, 23);
      pdf.text('KFC Store', 20, 23);
      pdf.text('KFC Store', 20, 23);
      pdf.text('D/c: 10km, Tran Phu, Ha Dong', 20, 33);
      
      pdf.text('HOA DON BAN HANG', 120, 28);
      pdf.text('HOA DON BAN HANG', 120, 28);
      pdf.text('HOA DON BAN HANG', 120, 28);

      pdf.line(10, 40, 200, 40)

      pdf.text(`Ten khach hang: ${item.user.full_name}`, 10, 50);
      pdf.text(`Ngay mua: ${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`, 10, 80);
      pdf.text(`Dia chi: ${item.user.address}`, 10, 60);
      pdf.text(`Ghi chu: ${diacritic.clean(item.description)}`, 10, 70);
      pdf.text('Duoi day la danh sach cac san pham :', 10, 90);

      const body = products.map((product, index) => (
        Array(index + 1, diacritic.clean(product.product.name), product.amount, product.price, product.price*product.amount)
      ))

      pdf.autoTable({
        startY: 100,
        head: [['No.', 'Name', 'Amount', 'Price', 'Total']], 
        body: body.concat([['Total','','','',`${item.total_price}`]])
      });
    
      pdf.text('Ben ban', 50, 200);
      pdf.text('(Ky, ghi ro ho ten)', 40, 210);

      pdf.text('Ben mua', 140, 200);
      pdf.text('(Ky, ghi ro ho ten)', 130, 210);

      pdf.save("pdf-invoice.pdf");
    } catch (error) {
      console.error(error);
    }
  }

  return (  
    <Button variant="contained" color="success" onClick={exportPDF}>
      <DownloadOutlinedIcon/>
    </Button>
  );
}

export default DownloadInvoice;