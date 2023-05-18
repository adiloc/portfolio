import { PDFDownloadLink, Page, Text, Link, Font, Document, StyleSheet, PDFViewer, View } from '@react-pdf/renderer'

export default function Pdf() {

  const styles = StyleSheet.create({
  
    h1: {
      fontSize: 25,
      paddingBottom: 10
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
      color: "#9b9b9b"
    },
    header: {
      paddingTop: 35,
      paddingLeft: 20
    },
    section: {
      paddingTop: 30,
      paddingLeft: 20,
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
    }
  });
  
  Font.register(
    'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
    { family: 'Oswald' },
  );
  
  const MyDoc = () => (
    <Document>
      <Page style={styles.page} size="A4">
        <View style={styles.row}>
          <View style={styles.left}>
            <View style={styles.section}>
              <Text style={styles.h3}>
                Contact
              </Text>
              <View style={styles.left_sub_sec}>
                <Link style={styles.link} href={"mailto:adrian.mihai.dumitrascu@gmail.com"}>adrian.mihai.dumitrascu@gmail.com
                </Link>
              </View>
              <View style={styles.left_sub_sec}>
                <Text style={styles.p}>
                www.linkedin.com/in/adrian-mihai-dumitrascu
                <Link style={styles.link} href={"https://www.linkedin.com/in/adrian-mihai-dumitrascu"}> (LinkedIn)</Link>
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.h3}>Top Skills</Text>
              <Text style={styles.skills}>JavaScript(ES6+) {"\n"} React.js {"\n"} CSS3 {"\n"} REST APIs {"\n"} HTML5 {"\n"} BootStrap {"\n"} TypeScript {"\n"} Adobe Creative Suite
              </Text>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.header}>
              <View>
                <Text style={styles.h1}>Adrian Dumitrascu</Text>
                <Text style={styles.p}>Software Engineer / Frontend Developer</Text>
                <Text style={styles.p_color}>Frankfurt, Hesse, Germany</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.h2}>
                Summary
              </Text>
              <Text style={styles.p}>
                Self-taught frontend developer, knowledgeable in REACT, CSS and
                HTML5 with solid background in design and passionate about user
                experience.
              </Text>
              <Text>
                ____
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.h2}>
                Experience
              </Text>
              <View style={styles.right_sub_sec}>
                <Text>
                  Freelance {"\n"}
                  Frontend developer {"\n"}
                  May 2020 - Present (3 years) {"\n"}
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
                </Text>
              </View>
              <View style={styles.right_sub_sec}>
                <Text>
                  Adrian Dumitrascu Photography {"\n"}
                  Professional Photographer {"\n"}
                  January 2013 - May 2020 (7 years 5 months) {"\n"}
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
                </Text>
              </View>
              <View style={styles.right_sub_sec}>
                <Text>
                  First Design Bucharest {"\n"}
                  Graphic Designer {"\n"}
                  September 2009 - January 2013 (3 years 5 months) {"\n"}
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
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
                  June 2008 - June 2009 (1 year 1 month) {"\n"}
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
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
                  November 2006 - June 2008 (1 year 8 months) {"\n"}
                <Text style={styles.p_color}>
                  Bucharest, Romania
                </Text>
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
                  Universitatea „Spiru Haret” din București {"\n"}
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
      <PDFViewer>
        <MyDoc/>
      </PDFViewer>
    </div>
  )
}



