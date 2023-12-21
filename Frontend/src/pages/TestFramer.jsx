import React,{useEffect , useRef} from 'react'
import {motion , useInView , useAnimate} from 'framer-motion'


function Box(){
    return(
        <motion.div
            style={{
                margin:"200px 0px",
                width:"100px",
                height:"100px",
                background:"blue"
            }}
            initial ={{opacity:0 , filter: 'blur(5px)', transform: 'translateX(-100%)' }}
            whileInView={{opacity:1 , filter: 'blur(0)', transform: 'translateX(0)'}}
            transition={{duration:0.6}}
        >

        </motion.div>
    )
}


const TestFramer = () => {
  return (
    <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }}
    >
        <div className='h-screen'>
            <h2>React Scroll Animation with Framer</h2>
            <Box/>
        </div>
        
        <div className='h-screen'>
            <h2>React Scroll Animation with Framer</h2>
            <Box/>
        </div>
        <div className='h-screen'>
            <h2>React Scroll Animation with Framer</h2>
            <Box/>
        </div>

        <Box/>
        <Box/>
    </div>
  )
}

export default TestFramer