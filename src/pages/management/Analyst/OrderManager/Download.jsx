import React from "react";
import { Page, Text, View, Document, StyleSheet, Font, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 600
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subHeader: {
    justifyContent: "center",
  },
  table: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
  },
  tableHeader: {
    backgroundColor: "#bfbfbf",
    color: "#000",
    padding: 8,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    padding: 8,
  },
});

const MyDocument = () => {
  const data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Chicago' },
    { name: 'Bob Johnson', age: 45, city: 'San Francisco' },
  ];
    
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>KFC Fast Food</Text>
          <View style={styles.subHeader}>
            <Text>Cong hoa xa hoi chu nghia Viet Nam</Text>
            <Text style={{marginLeft: '36px', marginTop: '8px'}}>Doc lap - Tu do - Hanh phuc</Text>
            <Text style={{marginLeft: '48px'}}>---------------------------------</Text>
            <Text style={{marginLeft: '72px', marginTop: '12px'}}>Ha Noi, ngay ... thang ... nam ...</Text>
          </View>
          <br/>
        </View>
        <View style={{marginTop: '36px'}}>
          <Text style={styles.title}>BÁO CÁO DOANH THU</Text>
          <Text style={{marginTop: '6px', marginLeft: '140px', fontWeight: 600}}>Kinh gui: .................................</Text>
        </View>
        <View style={{marginTop: '24px'}}>
          <Text>Toi la: .......................................................</Text>
          <Text style={{marginTop: '8px'}}>Chuc vu: .......................................................</Text>
          <Text style={{marginTop: '8px'}}>Hom nay toi lap ban bao cao doanh thu thang 4 nhu sau :</Text>
        </View>

        

      </Page>
    </Document>
  );
};

const App = () => {
  const downloadPdf = () => {
    const blob = (<MyDocument />).toBlob();
    saveAs(blob, "document.pdf");
  };

  return (
    <div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
      <button onClick={downloadPdf}>Download PDF</button>
    </div>
  );
};

export default App;
