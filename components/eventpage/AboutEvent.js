import React from 'react'
import styles from './AboutEvent.module.css'
import Image from 'next/image'
import img1 from '../../images/events2.jpg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function AboutEvent() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-aboutevent"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-aboutevent',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-aboutevent"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-aboutevent',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card1-aboutevent"), {
        opacity: 0,
        y: 60
      },
      {
      scrollTrigger: {
        trigger: '#card1-aboutevent',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card2-aboutevent"), {
        opacity: 0,
        y: 90,
      },
      {
      scrollTrigger: {
        trigger: '#card2-aboutevent',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#image-aboutevent"), {
        opacity: 0,
        x: -30,
      },
      {
      scrollTrigger: {
        trigger: '#image-aboutevent',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        opacity: 1,
      })
      .fromTo(q("#card3-aboutevent"), {
        opacity: 0,
        x: 30,
      },
      {
      scrollTrigger: {
        trigger: '#card3-aboutevent',
        scrub: 1.5,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        opacity: 1,
      })
      .fromTo(q("#card4"), {
        opacity: 0,
        y: 30,
        rotate: 15
      },
      {
      scrollTrigger: {
        trigger: '#card3',
        scrub: 1.5,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
        rotate: 0
      });
}, []);
  return (
    <div className={styles.AboutEvent}>
    <div className={styles.Container} id='aboutevent' ref={el}>
    <div className={styles.Top}>
    <div className={styles.Left}>
    <h2 id='h2-aboutevent'>About this event</h2>
    <p id='p-aboutevent'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At hic aspernatur quasi minima autem ex est voluptate provident? Ex, ab.</p>
    </div>
    <div className={styles.Right}>
    <div className={styles.Cards}>
    <div className={styles.Card} id='card1-aboutevent'>
    <h3>Virtual Event</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum non optio tempora nihil placeat modi.</p>
    <button>Register</button>
    </div>
    <div className={styles.Card} id='card2-aboutevent'>
    <h3>In-person Event</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem eos, nobis libero vel quis laborum.</p>
    <button>Register</button>
    </div>
    </div>
    </div>
    </div>
    <div className={styles.Bottom}>
    <div className={styles.Card__Image} id='image-aboutevent'>
    <Image className={styles.Image} src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <div className={styles.Card} id='card3-aboutevent'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem nostrum sunt facilis ipsam perspiciatis cum fugit ipsa voluptates! Dignissimos numquam porro, tempore nulla laudantium maxime et! Non, itaque sed sint fugiat sapiente repudiandae, perferendis incidunt nisi voluptates ad odit, veniam deserunt illo id illum necessitatibus obcaecati maiores voluptatibus accusamus voluptatem. Temporibus ex suscipit excepturi illum. Voluptatibus quas mollitia corporis.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default AboutEvent