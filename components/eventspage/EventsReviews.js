import React from 'react'
import styles from './EventsReviews.module.css'
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect
import { motion } from "framer-motion";

function EventsReviews() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
    .fromTo(q("#h2-reviews"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-reviews',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card1-reviews"), {
        opacity: 0,
        y: 100
      },
      {
      scrollTrigger: {
        trigger: '#card1-reviews',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        opacity: 1,
        y: 0
      })
      .fromTo(q("#card2-reviews"), {
        opacity: 0,
        y: 120
      },
      {
      scrollTrigger: {
        trigger: '#card1-reviews',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        opacity: 1,
        y: 0
      })
      .fromTo(q("#card3-reviews"), {
        opacity: 0,
        y: 140
      },
      {
      scrollTrigger: {
        trigger: '#card1-reviews',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card4-reviews"), {
        opacity: 0,
        y: 160
      },
      {
      scrollTrigger: {
        trigger: '#card1-reviews',
        scrub: 1,
        start: 'top 70%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card5-reviews"), {
        opacity: 0,
        y: 180
      },
      {
      scrollTrigger: {
        trigger: '#card1-reviews',
        scrub: 1,
        start: 'top 70%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card6-reviews"), {
        opacity: 0,
        y: 200
      },
      {
      scrollTrigger: {
        trigger: '#card1-reviews',
        scrub: 1,
        start: 'top 70%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      });
}, []);
  return (
    <div className={styles.EventsReviews}>
      <div className={styles.Container} id='events-reviews' ref={el}>
      <div className={styles.Title}>
        <h2 id='h2-reviews'>What our members say</h2>
      </div>
        <div className={styles.Testimonies}>
          <motion.div className={styles.Card1} id='card1-reviews'
          whileHover={{
                  border: '1px solid #000',
                  borderBottom: '10px solid #000',
                  transition: { duration: .2, ease: "easeInOut" },
              }}>
            <div className={styles.Top}>
              <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            </div>
            <div className={styles.Center}>
              <h3>Lorem, ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quidem ut at dolore?</p>
            </div>
            <div className={styles.Bottom}>
              <h4>Janet Makwabe</h4>
              <p>Business Owner</p>
            </div>
          </motion.div>
          <motion.div className={styles.Card2} id='card2-reviews'
          whileHover={{
                  border: '1px solid #000',
                  borderBottom: '10px solid #000',
                  transition: { duration: .2, ease: "easeInOut" },
              }}>
            <div className={styles.Top}>
              <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            </div>
            <div className={styles.Center}>
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odio quos repellendus aliquam cumque eum vitae ullam tempore veritatis. Non earum ducimus expedita incidunt, itaque laboriosam vitae dignissimos corrupti eveniet?</p>
            </div>
            <div className={styles.Bottom}>
              <h4>Emmanuel Lucas</h4>
              <p>Production Manager</p>
            </div>
          </motion.div>
          <motion.div className={styles.Card3} id='card3-reviews'
          whileHover={{
                  border: '1px solid #000',
                  borderBottom: '10px solid #000',
                  transition: { duration: .2, ease: "easeInOut" },
              }}>
            <div className={styles.Top}>
              <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            </div>
            <div className={styles.Center}>
              <h3>Lorem, ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quidem ut at dolore?</p>
            </div>
            <div className={styles.Bottom}>
              <h4>David Mwacha</h4>
              <p>Business Consultant</p>
            </div>
          </motion.div>
          <motion.div className={styles.Card4} id='card4-reviews'
          whileHover={{
                  border: '1px solid #000',
                  borderBottom: '10px solid #000',
                  transition: { duration: .2, ease: "easeInOut" },
              }}>
            <div className={styles.Top}>
              <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            </div>
            <div className={styles.Center}>
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odio quos repellendus aliquam cumque eum vitae ullam tempore veritatis. Non earum ducimus expedita incidunt, itaque laboriosam vitae dignissimos corrupti eveniet?</p>
            </div>
            <div className={styles.Bottom}>
              <h4>Paul Mkina</h4>
              <p>Head of Marketing</p>
            </div>
          </motion.div>
          <motion.div className={styles.Card5} id='card5-reviews'
          whileHover={{
                  border: '1px solid #000',
                  borderBottom: '10px solid #000',
                  transition: { duration: .2, ease: "easeInOut" },
              }}>
            <div className={styles.Top}>
              <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            </div>
            <div className={styles.Center}>
              <h3>Lorem, ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quidem ut at dolore?</p>
            </div>
            <div className={styles.Bottom}>
              <h4>Angela Benson</h4>
              <p>Business Owner</p>
            </div>
          </motion.div>
          <motion.div className={styles.Card6} id='card6-reviews'
          whileHover={{
                  border: '1px solid #000',
                  borderBottom: '10px solid #000',
                  transition: { duration: .2, ease: "easeInOut" },
              }}>
            <div className={styles.Top}>
              <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            <StarPurple500SharpIcon className={styles.Icon} />
            </div>
            <div className={styles.Center}>
              <h3>Sunt qui esse pariatur duis deserunt mollit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.</p>
            </div>
            <div className={styles.Bottom}>
              <h4>Benson Ndosi</h4>
              <p>Manager</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default EventsReviews