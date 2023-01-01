import React from 'react'
import styles from './Reserve.module.css'
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';
import PreviewSharpIcon from '@mui/icons-material/PreviewSharp';
import EventSeatSharpIcon from '@mui/icons-material/EventSeatSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Reserve() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
    .fromTo(q("#card1-reserve"), {
        opacity: 0,
        y: 30,
      },
      {
      scrollTrigger: {
        trigger: '#card1-reserve',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card2-reserve"), {
        opacity: 0,
        y: 60
      },
      {
      scrollTrigger: {
        trigger: '#card2-reserve',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        opacity: 1,
        y: 0
      })
      .fromTo(q("#card3-reserve"), {
        opacity: 0,
        y: 40
      },
      {
      scrollTrigger: {
        trigger: '#card3-reserve',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        opacity: 1,
        y: 0
      })
      .fromTo(q("#card4-reserve"), {
        opacity: 0,
        y: 50
      },
      {
      scrollTrigger: {
        trigger: '#card4-reserve',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        opacity: 1,
        y: 0
      });
}, []);
  return (
    <div className={styles.Reserve}>
    <div className={styles.Container} id='reserve' ref={el}>
    <div className={styles.Cards}>
    <div className={styles.Left}>
    <div className={styles.Card} id='card1-reserve'>
    <div className={styles.Svg}>
      <KeyboardVoiceSharpIcon className={styles.Icon} />
    </div>
    <h3>5 Speakers</h3>
    </div>
    <div className={styles.Card} id='card2-reserve'>
    <div className={styles.Svg}>
      <PreviewSharpIcon className={styles.Icon} />
    </div>
    <h3>250 Exhibitors</h3>
    </div>
    </div>
    <div className={styles.Right}>
    <div className={styles.Card} id='card3-reserve'>
    <div className={styles.Svg}>
      <EventSeatSharpIcon className={styles.Icon} />
    </div>
    <h3>500+ Seats</h3>
    </div>
    <div className={styles.Card} id='card4-reserve'>
    <div className={styles.Svg}>
      <CalendarMonthSharpIcon className={styles.Icon} />
    </div>
    <h3>2 Days Event</h3>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Reserve