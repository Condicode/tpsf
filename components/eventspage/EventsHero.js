import React from 'react'
import styles from './EventsHero.module.css'
import Link from 'next/link'
import Image from 'next/image'
import EventImage from '../../images/events1.jpg'
import { motion } from "framer-motion";

function EventsHero() {
  return (
    <div className={styles.EventsHero}>
      <div className={styles.Container}>
        <div className={styles.Top}>
        <motion.div className={styles.Title}>
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          >Attend our events to experience the value</motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellendus minima voluptas, deleniti veritatis impedit. Aliquam natus omnis unde architecto eaque sapiente quae nam excepturi?</motion.p>
        </motion.div>
        <div className={styles.CTA}>
          <Link href="/event">
            <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeInOut" }}>
            <div className={styles.Button__inner}>
            <div>Register Now</div>
            <div>Register Now</div>
            </div>
          </motion.button>
            </Link>
        </div>
        </div>
        <div className={styles.Bottom}>
        <div className={styles.Left}>
          <motion.div className={styles.EventsHero__Image}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}>
            <Image className={styles.Image} src={EventImage} layout='fill' objectFit='cover' alt=''></Image>
          </motion.div>
          <motion.div className={styles.EventsHero__Image}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.7, ease: "easeInOut" }}>
            <Image className={styles.Image} src={EventImage} layout='fill' objectFit='cover' alt=''></Image>
          </motion.div>
          </div>
          <div className={styles.Right}>
          <motion.div className={styles.EventsHero__Image}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.9, ease: "easeInOut" }}>
            <Image className={styles.Image} src={EventImage} layout='fill' objectFit='cover' alt=''></Image>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsHero