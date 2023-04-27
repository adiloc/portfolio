import { PDFDownloadLink, Page, Text, Image, Document, StyleSheet, PDFViewer, View } from '@react-pdf/renderer'

export default function Pdf() {

  const styles = StyleSheet.create({
    body: {
      paddingTop: 50,
      paddingBottom: 65,
      paddingHorizontal: 50,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    name: {
      fontSize: 28,
      fontFamily: "Times-Bold",
    },
    image: {
      width: 50,
      height: 50,
    },
    section: {
      borderBottom: 1
    }
  })
  
  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>
              Adrian Mihai Dumitrascu
            </Text>
            <Text>
              Phone Number
            </Text>
          </View>
          <Image style={styles.image} src="/moon.jpg"/>
        </View>
        <Text style={styles.section}>
          PROFESSIONAL EXPERIECE
        </Text>
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



