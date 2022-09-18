import React, { useState } from "react";
import { CourseCard } from "../../../componentsUi";
import img1 from "../../../../public/assets/gst.jpeg";
import img2 from "../../../../public/assets/gst2.png";
import img3 from "../../../../public/assets/tex.jpeg";
import { Modal } from "@mantine/core";
const coursesData = [
  {
    image: img1.src,
    title: "Prepare for appearing in GST Practitioner exam conducted by NACIN",
    description: "Covering relevant GST Law till Finance Act 2022",
    country: "90+ Hours",
    syllabus: {
      title: "Covering relevant GST Law till Finance Act 2022",
      content: [
        "1. Central Goods and Services Tax Act, 2017",
        "2. Integrated Goods and Services Tax Act, 2017",
        "3. State Goods and Services Tax Acts, 2017",
        "4. Union Territory Goods and Services Tax Act",
        "5. Goods and Services Tax (Compensation to States) Act, 2017",
        "6. Central Goods and Services Tax Rules, 2017",
        "7. Integrated Goods and Services Tax Rules, 2017",
        "8. All State Goods and Services Tax Rules, 2017",
        "9. Notifications, Circulars and orders issued from time to time.",
      ],
    },
  },
  {
    image: img2.src,
    title: "GST (Goods and Services Tax) Return Filing Course",
    description: "Covering relevant GST Law till Finance Act 2022",
    country: "60+ Hours",
    syllabus: {
      title: "Covering relevant GST Law till Finance Act 2022",
    },
  },
  {
    image: img3.src,
    title:
      "Tax Audit u/s 44AB of Income Tax and TDS & TCS Return Filing Course",
    description: "Covering relevant Income Tax Law till Finance Act 2022",
    country: "90+ Hours",
    syllabus: {
      title: "Covering relevant Income Tax Law till Finance Act 2022",
    },
  },
];
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

function Courses({ title }: any) {
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <div id="2" className={`section-container`}>
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="card-holder">
        {coursesData.map((course) => {
          return (
            <>
              <CourseCard
                key={course.title}
                image={course.image}
                title={course.title}
                description={course.description}
                country={course.country}
                badges={[]}
                // setOpened={setOpened}
                syllabus={course.syllabus}
              />

              
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
