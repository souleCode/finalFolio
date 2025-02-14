import { motion } from "framer-motion"

const stairAnimation={
    initial:{
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit:{
        top: ["100%", "0%"],
    },
};

// calculate the reverse index
const reverseIndex =(index)=>{
    const totalSteps=6;
    return totalSteps-index-1;
}

const Stairs = () => {

  return (
    <>
     {/* render 06 motions div, each representing a step of stairs.
       Each div will have the same animation defined by the stairAnimation object. 
       The delay between steps is calculated dynamically based on it's reversed index
     */}
     {[...Array(6)].map((_,index)=>{
        return(
            <motion.div 
            key={index} 
            variants={stairAnimation} 
            initial='initial' 
            animate="animate" 
            exit="exit"
            transition={{ duration: 0.4,
                 delay:reverseIndex(index)*0.1,
                 ease:'easeInOut'
                }}
            className="h-full w-full bg-color relative"    
            />
        )
     })};
    </>
  )
}

export default Stairs