import React from 'react'
import styles from './AboutHome.module.css'
import CorporateFareSharpIcon from '@mui/icons-material/CorporateFareSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import VolunteerActivismSharpIcon from '@mui/icons-material/VolunteerActivismSharp';
import OpacitySharpIcon from '@mui/icons-material/OpacitySharp';
import { gsap } from "gsap";
import { useRef, useEffect, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect
import { motion } from "framer-motion";

function AboutHome() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#button"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#p',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card1"), {
        opacity: 0,
        y: 30,
        rotate: 15
      },
      {
      scrollTrigger: {
        trigger: '#card1',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
        rotate: 0
      })
      .fromTo(q("#card2"), {
        opacity: 0,
        y: 30,
        rotate: 15
      },
      {
      scrollTrigger: {
        trigger: '#card2',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
        rotate: 0
      })
      .fromTo(q("#card3"), {
        opacity: 0,
        y: 30,
        rotate: 15
      },
      {
      scrollTrigger: {
        trigger: '#card1',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
        rotate: 0
      })
      .fromTo(q("#card4"), {
        opacity: 0,
        y: 30,
        rotate: 15
      },
      {
      scrollTrigger: {
        trigger: '#card1',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
        rotate: 0
      });
}, []);
const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, { background: "linear-gradient(225deg, #a9db51 0%, #61efff 100%)", ease: "power2.out", duration: .5, delay: .1 });
    };
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, { background: "transparent", ease: "power2.out", duration: .5, });
    };
  return (
    <div className={styles.AboutHome}>
      <div className={styles.Container} id='about' ref={el}>
        <div className={styles.Left}>
          <h2 id='h2'>Choose Our Events</h2>
          <p id='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt accusantium atque id nisi cumque aspernatur voluptatibus ea, officiis quis impedit?</p>
          <button id='button'>
          <div className={styles.Button__inner}>
            <div>Learn More</div>
            <div>Learn More</div>
            </div>
          </button>
        </div>
        <div className={styles.Right}>
          <div className={styles.Top}>
            <div className={styles.Top__Left}>
              <div className={styles.Card} id='card1'
              onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div className={styles.Svg}>
                <CorporateFareSharpIcon className={styles.Icon} />
              </div>
                <h3>Corporate</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde illum, veniam similique qui impedit?</p>
              </div>
            </div>
            <div className={styles.Top__Right}>
              <div className={styles.Card} id='card2'
              onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className={styles.Svg}>
                <SchoolSharpIcon className={styles.Icon} />
              </div>
                <h3>Education</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde illum, veniam similique qui impedit?</p>
              </div>
            </div>
          </div>
          <div className={styles.Bottom}>
            <div className={styles.Bottom__Left}>
              <div className={styles.Card} id='card3'
              onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className={styles.Svg}>
                <VolunteerActivismSharpIcon className={styles.Icon} />
              </div>
                <h3>Nonprofit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde illum, veniam similique qui impedit?</p>
              </div>
            </div>
            <div className={styles.Bottom__Right}>
              <div className={styles.Card} id='card4'
              onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className={styles.Svg}>
                <OpacitySharpIcon className={styles.Icon} />
              </div>
                <h3>Oil and Gas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde illum, veniam similique qui impedit?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHome