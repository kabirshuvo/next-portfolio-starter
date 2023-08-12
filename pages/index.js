import { motion } from "framer-motion";

import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* {title} */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas
            <br />
            Into
            <span className="text-accent"> Digital Reality</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            This the reality why we would be pretend. this is just not an
            illution now it is the needs of life. you cant ignore it
          </motion.p>

          <div className="flex justfy-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
