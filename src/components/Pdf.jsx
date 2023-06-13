import { PDFDownloadLink, Page, Image, Text, Link, Document, StyleSheet, PDFViewer, View } from '@react-pdf/renderer'
import me from "/me.png"

export default function Pdf() {

  const styles = StyleSheet.create({
  
    h1: {
      fontSize: 30,
      paddingBottom: 3
    },
    h2: {
      fontSize: 16,
      paddingBottom: 10
    },
    h3: {
      fontSize: 14,
      paddingBottom: 15
    },
    p: {
      fontSize: 12,
    },
    p_color: {
      fontSize: 12,
      color: "#9b9b9b",
      marginTop: 4
    },
    p_location: {
      color: "#9d800c",
      fontSize: 10,
      fontFamily: "Helvetica-Bold",
      marginTop: 10
    },
    header: {
      paddingTop: 35,
      paddingLeft: 20
    },
    section: {
      paddingTop: 30,
      paddingLeft: 20,
      paddingRight: 10,
      fontSize: 12
    },
    description: {
      fontSize: 10,
      lineHeight: 1.5,
      paddingTop: 10
    },
    skills: {
      lineHeight: 2,
      fontSize: 10,
      color: "white"
    },
    right_sub_sec: {
      paddingBottom: 20,
      fontSize: 12
    },
    left_sub_sec: {
      paddingBottom: 15,
      fontSize: 10
    },
    link: {
      color: "white"
    },
    break: {
      paddingTop: 30,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      flexGrow: 1  
    },
    left: {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 200,
      backgroundColor: "#293e49",
      color: "#dbdbdb"
    },
    right: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 300,
      paddingRight: 10,
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey'
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 100,
      marginTop: 30,
      marginLeft: "auto",
      marginRight: "auto"
    }
  })
  
  
  const MyDoc = () => (
    <Document>
      <Page style={styles.page} size="A4">
        <View style={styles.row}>
          <View style={styles.left}>
            <Image style={styles.image} src={me}/>
            <View style={styles.section}>
              <Text style={styles.h3}>Contact</Text>
              <View style={styles.left_sub_sec}>
                <Link style={styles.link} href={"mailto:adrian.mihai.dumitrascu@gmail.com"}>adrian.mihai.dumitrascu@gmail.com
                </Link>
              </View>
              <View style={styles.left_sub_sec}>
                <Text style={styles.p}>
                adriandumitrascu.com
                <Link style={styles.link} href={"https://adriandumitrascu.com"}>(Website)</Link>
                {"\n"}
                {"\n"}
                linkedin.com/in/adrian-mihai-dumitrascu
                <Link style={styles.link} href={"https://linkedin.com/in/adrian-mihai-dumitrascu"}>(LinkedIn)</Link>
                {"\n"}
                {"\n"}
                github.com/adidumitrascu<Link style={styles.link} href={"https://github.com/adidumitrascu"}>(GitHub)</Link>
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.h3}>Top Skills</Text>
              <Text style={styles.skills}>JavaScript(ES6+) {"\n"} React {"\n"} CSS {"\n"} REST APIs {"\n"} HTML {"\n"} BootStrap {"\n"} TypeScript {"\n"} Adobe Creative Suite
              </Text>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.header}>
              <View>
                <Text style={styles.h1}>Adrian Dumitrascu</Text>
                <Text style={styles.h2}>Front-end Developer</Text>
                <Text style={styles.p_location}>It Works! Global</Text>
                <Text style={styles.p_color}>Frankfurt, Hesse, Germany</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.h2}>
                Experience
              </Text>
              <View style={styles.right_sub_sec}>
                <Text>
                  Front-end Developer {"\n"}
                  May 2022 - Present {"\n"}
                </Text>
                <Text style={styles.p_color}>
                  Frankfurt, Germany
                </Text>
                <View style={styles.description}>
                  <Text>
                    • Build applications & UI/UX according to specifications and designs. {"\n"}
                    • Implement responsive web design principles to ensure applications render well on various devices and screen sizes. {"\n"}
                    • Research new technologies and approaches to solve problems and improve existing systems. {"\n"}
                  </Text>
                </View>
              </View>
              <View style={styles.right_sub_sec}>
                <Text>
                  Adrian Dumitrascu Photography {"\n"}
                  Professional Photographer {"\n"}
                  January 2013 - May 2022 {"\n"}
                </Text>
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
              </View>
              <View style={styles.right_sub_sec}>
                <Text>
                  First Design Bucharest {"\n"}
                  Graphic Designer {"\n"}
                  September 2009 - January 2013 {"\n"}
                </Text>
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
               <View style={styles.description}>
                <Text>
                  • Meet with clients or the art director to determine the
                    scope of a project. {"\n"}
                  • Use digital illustration, photo editing software (Adobe Creative Suite), and layout software to create designs. {"\n"}
                  • Create visual elements such as logos, original images, illustrations, flyers to help deliver a message. {"\n"}
                  • Present design concepts to clients or art directors
                    and incorporate the recommended changes in the final design.
                </Text>
               </View>
              </View>
              <View style={styles.right_sub_sec}>
                <Text>
                  National TV Broadcaster (PRO TV) {"\n"}
                  Audio Technician Assistant {"\n"}
                  June 2008 - June 2009 {"\n"}
                </Text>
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
                <View style={styles.description}>
                  <Text>
                    • Assist the Audio Engineer in the technical aspects of
                      handling audio equipment backstage.{"\n"}
                    • Handle microphones, microphone cables, RF frequencies, lavaliere mics, speakers and a host of other audio equipment backstage, making sure that all is working properly and effectively.
                  </Text>
                </View>
              </View>
              <View style={styles.right_sub_sec} break>
                <Text style={styles.break}>
                  National TV Broadcaster (Antena 1) {"\n"}
                  Technical Director {"\n"}
                  November 2006 - June 2008 {"\n"}
                </Text>
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
                <View style={styles.description}>
                  <Text>
                    • Ensure that all equipment in the production control room operates correctly. {"\n"}
                    • Supervise & coordinate the crew members activity in the production control room. {"\n"}
                    • Match the quality and the output of all the cameras on the studio floor through the camera control units (CCU) (vision engineering). {"\n"}
                    • Coordinate the working of the whole crew, and handle any technical problem before, during, or after the shooting of a project.
                  </Text>
                </View>
              </View>
              <Text>
                ____
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.h2}>
                Education
              </Text>
              <View style={styles.right_sub_sec}>
                <Text>
                  USH Bucharest Architecture {"\n"}
                  Bachelor's degree, Architecture · (October 2005)
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
      </Page>
    </Document>
  )
  
  return (
    <div className="pdf">
      <PDFDownloadLink className="resume__btn" document={<MyDoc />} fileName="adrian_dumitrascu_CV.pdf">
      My resume
      </PDFDownloadLink>
      {/* <PDFViewer>
        <MyDoc/>
      </PDFViewer> */}
    </div>
  )
} 
