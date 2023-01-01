import React from 'react'
import styles from './Gallerly.module.css'
import Image from 'next/image'
import img1 from '../../images/Hero.jpg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Gallerly() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#image1"), {
        opacity: 0,
        width: "20%",
        x: -100
      },
      {
      scrollTrigger: {
        trigger: '#image1',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        width: "100%",
        opacity: 1,
        x: 0
      })
      .fromTo(q("#image2"), {
        opacity: 0,
        width: "20%",
      },
      {
      scrollTrigger: {
        trigger: '#image1',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        width: "100%",
        opacity: 1,
      })
      .fromTo(q("#image3"), {
        opacity: 0,
        width: "20%",
        x: 100
      },
      {
      scrollTrigger: {
        trigger: '#image1',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        width: "100%",
        opacity: 1,
      })
      .fromTo(q("#image4"), {
        opacity: 0,
        width: "20%",
        x: -100
      },
      {
      scrollTrigger: {
        trigger: '#image1',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        width: "100%",
        opacity: 1,
      })
      .fromTo(q("#image5"), {
        opacity: 0,
        y: 100
      },
      {
      scrollTrigger: {
        trigger: '#image1',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#image6"), {
        opacity: 0,
        x: 100
      },
      {
      scrollTrigger: {
        trigger: '#image1',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        opacity: 1,
      });
}, []);
  return (
    <div className={styles.Gallerly}>
    <div className={styles.Container} id='gallerly' ref={el}>
    <div className={styles.Images} id='images'>
    <div className={styles.Image1} id='image1'>
    <Image className={styles.Image1__border} src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <div className={styles.Image2} id='image2'>
    <Image className={styles.Image2__border} src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <div className={styles.Image3} id='image3'>
    <Image className={styles.Image3__border} src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <div className={styles.Image4} id='image4'>
    <Image className={styles.Image4__border} src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <div className={styles.Image5} id='image5'>
    <Image className={styles.Image5__border} src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <div className={styles.Image6} id='image6'>
    <Image className={styles.Image6__border} src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Gallerly