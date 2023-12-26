import React, { useState } from "react";

// Icons
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

// Data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
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

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar Img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2>Captivating <span>stories</span> birth magnificent designs.</h2>
          <p>
            10 years ago, I began freelancing as a developer. Since then, I've done remote work for agencies, counsulted for startups, and collaborated on digital products for business and consumer use.
          </p>
        </div>
        {/* Info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {
              aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                )
              })
            }
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {
              aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* Title */}
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* Icons */}
                      {
                        item.icons?.map((icon, itemIndex) => {
                          return (
                            <div className="text-2xl text-white" key={itemIndex}>{icon}</div>
                          )
                        })
                      }
                    </div>
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
