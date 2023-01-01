import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import HeroImage1 from '../../images/Hero.jpg'
import HeroImage2 from '../../images/events1.jpg'
import HeroImage3 from '../../images/events2.jpg'
import HeroImage4 from '../../images/events3.jpg'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import { motion } from "framer-motion";
import { gsap } from "gsap";


function Hero() {
  const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "100%", scale: .9, ease: "power2.out", delay: .1 });
    };
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "50% 50% 0 0", scale: 1, ease: "power2.out", delay: .1 });
    };
    const onLeave2 = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "50% 50% 50% 0", scale: 1, ease: "power2.out", delay: .1 });
    };
    const onLeave3 = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "0 0 50% 50%", scale: 1, ease: "power2.out", delay: .1 });
    };
    const onLeave4 = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "0 50% 50% 50%", scale: 1, ease: "power2.out", delay: .1 });
    };
  return (
    <div className={styles.Hero}>
      <div className={styles.Container}>
        <motion.div className={styles.Left}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          >Tpsf events platform.</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nisi vero provident, repudiandae.</motion.p>
          <div className={styles.List}>
            <div className={styles.List__Left}>
              <div className={styles.Top}>
                <motion.ul>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4, ease: "easeInOut" }}>
                    <CheckCircleTwoToneIcon className={styles.Icon} />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}>
                    Corporate Events
                  </motion.li>
                </motion.ul>
              </div>
              <div className={styles.Bottom}>
                <motion.ul>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.7, ease: "easeInOut" }}>
                    <CheckCircleTwoToneIcon className={styles.Icon} />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8, ease: "easeInOut" }}>
                    Team Building Days
                  </motion.li>
                </motion.ul>
              </div>
            </div>
            <div className={styles.List__Right}>
              <div className={styles.Top}>
                <motion.ul>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4, ease: "easeInOut" }}>
                    <CheckCircleTwoToneIcon className={styles.Icon} />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}>
                    Product Launches
                  </motion.li>
                </motion.ul>
              </div>
              <div className={styles.Bottom}>
                <motion.ul>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.7, ease: "easeInOut" }}>
                    <CheckCircleTwoToneIcon className={styles.Icon} />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8, ease: "easeInOut" }}>
                    Bespoke Events
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
          <div className={styles.Buttons}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0,
              transition:{ duration: 1, delay: 2, ease: "easeInOut" } }}
            >
            <div className={styles.Button__inner}>
            <div>Join Us</div>
            <div>Join Us</div>
            </div>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2, ease: "easeInOut" }}
            >
            <div className={styles.Button__inner}>
            <div>Learn More</div>
            <div>Learn More</div>
            </div>
            </motion.button>
          </div>
        </motion.div>
        <div className={styles.Right}>
          <div className={styles.Top}>
            <motion.div className={styles.Hero__Image1}
              initial={{ opacity: 0, scale: 0,}}
              animate={{ opacity: 1, scale: 1,}}
              transition={{ duration: .2, delay: 1.4, ease: "easeInOut" }}>
              <Image className={styles.Image1} src={HeroImage1} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
            </motion.div>
            <motion.div className={styles.Hero__Image2}
              initial={{ opacity: 0, scale: 0, }}
              animate={{ opacity: 1, scale: 1, }}
              transition={{ duration: .4, delay: 2, ease: "easeInOut" }}>
              <Image className={styles.Image2} src={HeroImage2} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave2}></Image>
            </motion.div>
          </div>
          <div className={styles.Bottom}>
            <motion.div className={styles.Hero__Image3}
              initial={{ opacity: 0, scale: 0, }}
              animate={{ opacity: 1, scale: 1, }}
              transition={{ duration: .2, delay: 1.7, ease: "easeInOut" }}>
              <Image className={styles.Image3} src={HeroImage3} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave3}></Image>
            </motion.div>
            <motion.div className={styles.Hero__Image4}
              initial={{ opacity: 0, scale: 0, }}
              animate={{ opacity: 1, scale: 1, }}
              transition={{ duration: .4, delay: 2.3, ease: "easeInOut" }}>
              <Image className={styles.Image4} src={HeroImage4} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave4}></Image>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero