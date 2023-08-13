import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 />, key: "html5" },
          { icon: <FaCss3 />, key: "css3" },
          { icon: <FaJs />, key: "js" },
          { icon: <FaReact />, key: "react" },
          { icon: <SiNextdotjs />, key: "nextjs" },
          { icon: <SiFramer />, key: "framer" },
          { icon: <FaWordpress />, key: "wordpress" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma />, key: "figma" },
          { icon: <SiAdobexd />, key: "adobexd" },
          { icon: <SiAdobephotoshop />, key: "photoshop" },
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-7">
       <div className="flex flex-col w-full xl:max-w[48%] h-[480px]">text</div>
        <div>
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div  
              key={itemIndex} 
              className={`${index === itemIndex && ' text-sky-700 after:w-[100%] after:bg-sky-700 after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
               
                {item.title}
              </div>
            );
          })}
        </div>

        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {
            aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div>{item.title}    </div>
                  <div>{item.stage}</div>
                  <div className="hidden md:flex">-</div>
               </div>
              )
            })
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
