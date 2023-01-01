import React from 'react'
import styles from './Newsletter.module.css'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Newsletter() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-newsletter"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-newsletter',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-newsletter"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-newsletter',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#input-newsletter"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#p-newsletter',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      });
}, []);
  return (
    <div className={styles.Newsletter}>
        <div className={styles.Container} id='newsletter' ref={el}>
            <div className={styles.Title}>
                <h2 id='h2-newsletter'>Subscribe to our newsletter</h2>
                <p id='p-newsletter'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem fugit rem est repudiandae eos ullam autem dolorem animi harum quod?</p>
            </div>
            <div className={styles.Input__Box} id='input-newsletter'>
                <input type="text" placeholder='Email adress' />
            </div>
        </div>
    </div>
  )
}

export default Newsletter