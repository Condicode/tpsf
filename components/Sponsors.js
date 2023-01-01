import React from 'react'
import styles from './Sponsors.module.css'
import Image from 'next/image'
import img1 from '../images/CRDB-LOGO.png'
import img2 from '../images/tigo.png'
import img3 from '../images/Airtel-Tanzania-logo.png'
import img4 from '../images/kcblogo.jpg'
import img5 from '../images/Precision.png'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Sponsors() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
    .fromTo(q("#h2-sponsors"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-sponsors',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      });
}, []);
  return (
    <div className={styles.Sponsors}>
    <div className={styles.Container} id='sponsors' ref={el}>
    <div className={styles.Title}>
      <h2 id='h2-sponsors'>Our sponsors</h2>
    </div>
    <div className={styles.Carousel__container}>
    <div className={styles.Slide__container}>
    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>

    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img2} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>

    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img3} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>

    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img4} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>

    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img5} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>


    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img1} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>

    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img2} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>

    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img3} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>

    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img4} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    
    </div>

    <div className={styles.Slide}>
    <div className={styles.Item1}>
    <Image src={img5} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Sponsors