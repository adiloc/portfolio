import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';


// const styles = StyleSheet.create({
//   section: {
//     width: 200,
//     '@media max-width: 400': {
//       width: 300,
//     },
//     '@media orientation: landscape': {
//       width: 400,
//     },
//   }
// });



export default function Pdf() {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    }
  });
  
  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.</Text>
        </View>
        <View style={styles.section}>
          <Text>I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.</Text>
        </View>
      </Page>
    </Document>
  );


  return (
    <div className="pdf">
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
    <PDFViewer>
      <MyDoc/>
    </PDFViewer>

  </div>
  )
}



