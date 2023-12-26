import React from 'react'
import {motion} from 'framer-motion'
import Comment from './Comment'

const Comments = () => {
  return (
    <>
        <motion.div 
      className='flex sm:flex-row flex-col gap-y-12'
      initial ={{opacity:0 ,transform: 'translateX(-100%)',filter: 'blur(3px)' }}
      whileInView={{opacity:1 , transform: 'translateX(0)',filter: 'blur(0)' }}
      transition={{duration:.8, delay:.5 ,staggerChildren: 0.5}}
      >
        <Comment/>
        <Comment/>
        <Comment/>
      </motion.div>
    </>
    )
}

export default Comments