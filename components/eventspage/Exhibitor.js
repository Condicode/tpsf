import React from 'react'
import styles from './Exhibitor.module.css'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect
import { motion } from "framer-motion";

function Exhibitor() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-exhibitor"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-exhibitor',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-exhibitor"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-exhibitor',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#button-exhibitor"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#p-exhibitor',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#exhibitor-card1"), {
        opacity: 0,
        scale: 0
      },
      {
      scrollTrigger: {
        trigger: '#exhibitor-card1',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        opacity: 1,
        duration: 1,
        scale: 1
      })
      .fromTo(q("#exhibitor-card2"), {
        scale: 0
      },
      {
      scrollTrigger: {
        trigger: '#exhibitor-card1',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        scale: 1
      })
      .fromTo(q("#exhibitor-card3"), {
        scale: 0
      },
      {
      scrollTrigger: {
        trigger: '#exhibitor-card3',
        scrub: 1.5,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        scale: 1
      })
      .fromTo(q("#exhibitor-card4"), {
        scale: 0
      },
      {
      scrollTrigger: {
        trigger: '#exhibitor-card3',
        scrub: 1.5,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        scale: 1
      });
}, []);

    const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, { background: "linear-gradient(225deg, #a9db51 0%, #61efff 100%)", ease: "power2.out", duration: .5, delay: .1 });
    };
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, { background: "#e8f2ee", ease: "power2.out", duration: .5, });
    };
  return (
    <div className={styles.Exhibitor}>
    <div className={styles.Container} id='exhibitor' ref={el}>
        <div className={styles.Left}>
          <h2 id='h2-exhibitor'>Become an Exhibitor</h2>
          <p id='p-exhibitor'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt accusantium atque id nisi cumque aspernatur voluptatibus ea, officiis quis impedit?</p>
          <button id='button-exhibitor'>
          <div className={styles.Button__inner}>
            <div>Get started</div>
            <div>Get started</div>
            </div>
          </button>
        </div>
        <div className={styles.Right}>
          <div className={styles.Top}>
            <div className={styles.Top__Left}>
              <motion.div className={styles.Card}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: .4, ease: "easeInOut" }}
              onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <h3>Corporate</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde illum, veniam similique qui impedit?</p>
              </motion.div>
            </div>
            <div className={styles.Top__Right}>
              <motion.div className={styles.Card}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: .8, ease: "easeInOut" }}
              onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <h3>Education</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde illum, veniam similique qui impedit?</p>
              </motion.div>
            </div>
          </div>
          <div className={styles.Bottom}>
            <div className={styles.Bottom__Left}>
              <motion.div className={styles.Card}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: 1.2, ease: "easeInOut" }}
              onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <h3>Nonprofit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde illum, veniam similique qui impedit?</p>
              </motion.div>
            </div>
            <div className={styles.Bottom__Right}>
              <motion.div className={styles.Card}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: 1.6, ease: "easeInOut" }}
              onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <h3>Oil and Gas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde illum, veniam similique qui impedit?</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exhibitor