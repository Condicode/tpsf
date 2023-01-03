import React from 'react'
import styles from './EventsHome.module.css'
import Image from 'next/image'
import EventImage from '../../images/events1.jpg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function EventsHome() {
   gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-eventshome"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-eventshome',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-eventshome"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-eventshome',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#button-eventshome"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#p-eventshome',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#image-eventshome"), {
        opacity: .5,
        y: 30,
        scale: .7,
        borderRadius: '100%'
      },
      {
      scrollTrigger: {
        trigger: '#image-eventshome',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
        scale: 1,
        borderRadius: '50% 0% 50% 50%'
      });
}, []);

    const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "0 50% 50% 50%", scale: .9, ease: "power2.out", delay: .1 });
    };
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "50% 0 50% 50%" , scale: 1, ease: "power2.out", delay: .1 });
    };
  return (
    <div className={styles.EventsHome}>
      <div className={styles.Container} id='eventshome' ref={el}>
        <div className={styles.Left}>
          <h2 id='h2-eventshome'>Attend our events to experience the value</h2>
          <p id='p-eventshome'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellendus minima voluptas, deleniti veritatis impedit.</p>
          <button id='button-eventshome'>
          <div className={styles.Button__inner}>
            <div>Register Now</div>
            <div>Register Now</div>
            </div>
          </button>
        </div>
        <div className={styles.Right}>
          <div id='image-div' className={styles.EventsHome__Image}>
            <Image id='image-eventshome' className={styles.Image} src={EventImage} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsHome