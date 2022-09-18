import { Container, Title, Accordion, createStyles, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 550,
    // backgroundColor:'white'
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const data = [
  {
    question: "Who is a GST practitioner?",
    answer:
      "A goods and services tax practitioner can undertake any or all of the following activities on behalf of a registered person, if so authorised by him to- ",
    points: [
      "(a) furnish the details of outward and inward supplies;",
      "(b) furnish monthly, quarterly, annual or final return; ",
      "(c) make deposit for credit into the electronic cash ledger;",
      ,
      "(d) file a claim for refund; ",
      "(e) file an application for amendment or cancellation of registration; ",
      "(f) furnish information for generation of e-way bill;",
      "(g) furnish details of challan in FORM GST ITC-04;",
      "(h) file an application for amendment or cancellation of enrolment under rule 58;",
      "(i) file an intimation to pay tax under the composition scheme or withdraw from the said scheme",
    ],
  },
  {
    question: "What are the Qualifications for Becoming a GST Practitioner?",
    answer: "The following people can become GST practitioners:",
    points: [
      "(a) that he is a retired officer of the Commercial Tax Department of any State Government or of the [Central Board of Indirect Taxes]and Customs, Department of Revenue, Government of India, who, during his service under the Government, had worked in a post not lower than the rank of a Group-B gazetted officer for a period of not less than two years; or ",
      "(b) that he has enrolled as a sales tax practitioner or tax return preparer under the existing law for a period of not less than five years;",
      " (c)he has passed, ",
    ],
    subPoints: [
      " (i) a graduate or postgraduate degree or its equivalent examination having a degree in Commerce, Law, Banking including Higher Auditing, or Business Administration or Business Management from any Indian University established by any law for the time being in force; or ",
      "(ii) a degree examination of any Foreign University recognised by any Indian University as equivalent to the degree examination mentioned in sub-clause (i); or ",
      "(iii) any other examination notified by the Government, on the recommendation of the Council, for this purpose; or ",
      "(iv) has passed any of the following examinations, namely:- (a) final examination of the Institute of Chartered Accountants of India; or (b) final examination of the Institute of Cost Accountants of India; or (c) final examination of the Institute of Company Secretaries of India.",
    ],
  },
  {
    question: "Importance of certification by GSTP Exam",
    answer:
      "Once enrolled as a GST Practitioner, the person must pass the GSTP examination within two years of enrolment. ",
    points: [
      "    You can enrol at (Please contact us before enrolling) https://nacin.gov.in",
    ],
  },
  {
    question: "Other relevant link for GST Practitioner",
    points: [
      "https://nacin.onlineregistrationform.org/NACIN/",
      "  https://www.gst.gov.in/",
    ],
  },
  {
    question: "GST Practitioner’s exams are being conduted by NACIN",
    answer: "(The National Academy of Customs and Indirect Taxes and Customs)",
    points: ["The recent Notification issued by NACIN for GSTP Exam is given below."],
    link: "https://drive.google.com/file/d/1MB12jL2INdrliZ9BApfs5TUyVraCZfES/view?usp=sharing",
  },
];
function FAQs() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        {data.map((item) => {
          return (
            <>
              <Accordion.Item className={classes.item} value={item.question}>
                <Accordion.Control>{item.question}</Accordion.Control>
                {item.answer && <Accordion.Panel>{item.answer}</Accordion.Panel>}
                {item.points?.map((point) => {
                  return (
                    <>
                      <Accordion.Panel>{point}</Accordion.Panel>
                    </>
                  );
                })}
                {item.subPoints?.map((point) => {
                  return (
                    <>
                      <Accordion.Panel style={{marginLeft:'8px'}} >{point}</Accordion.Panel>
                    </>
                  );
                })}
                {
                  item.link && <Accordion.Panel style={{marginLeft:'8px', marginTop:0, color:'blue'}} > <a href={item.link}>Click here to view</a></Accordion.Panel>
                }
                
              </Accordion.Item>
            </>
          );
        })}

        {/* <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            Can I create more that one account?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            How can I subscribe to monthly newsletter?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Do you store credit card information securely?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item> */}
      </Accordion>
    </Container>
  );
}

export default FAQs;
