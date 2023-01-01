import React from 'react'
import styles from './EventHero.module.css'
import Image from 'next/image'
import EventImage from '../../images/events1.jpg'
import { motion } from "framer-motion";

function EventsHero() {
  return (
    <div className={styles.EventHero}>
      <div className={styles.Container}>
        <div className={styles.Top}>
        <div className={styles.Title}>
        <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: .8, ease: "easeInOut" }}
        >10th Dec 2022</motion.h4>
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        >China - Tanzania</motion.h2>
        <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
        >Economic, trade, business and Investment promotion forum 2022</motion.h3>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellendus minima voluptas, deleniti veritatis impedit. Aliquam natus omnis unde architecto eaque sapiente quae nam excepturi?</motion.p>
        </div>
        <div className={styles.CTA}>
        <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}>
        <div className={styles.Button__inner}>
          <div>Register Now</div>
          <div>Register Now</div>
          </div>
        </motion.button>
        </div>
        </div>
        <div className={styles.Bottom}>
          <motion.div className={styles.EventHero__Image}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.7, ease: "easeInOut" }}>
            <Image className={styles.Image} src={EventImage} layout='fill' objectFit='cover' alt=''></Image>
          </motion.div>
          <motion.div className={styles.EventHero__Image}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.9, ease: "easeInOut" }}>
            <Image className={styles.Image} src={EventImage} layout='fill' objectFit='cover' alt=''></Image>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default EventsHero