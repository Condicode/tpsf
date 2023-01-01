import React from 'react'
import styles from './AboutEvents.module.css'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function AboutEvents() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-events"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-events',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card1-events"), {
        opacity: 0,
        x: -30
      },
      {
      scrollTrigger: {
        trigger: '#h2-events',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        opacity: 1,
        x: 0
      })
      .fromTo(q("#card2-events"), {
        opacity: 0,
        x: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-events',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        opacity: 1,
      })
      .fromTo(q("#card3-events"), {
        opacity: 0,
        y: 90,
      },
      {
      scrollTrigger: {
        trigger: '#card3-events',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card4-events"), {
        opacity: 0,
        y: 30,
      },
      {
      scrollTrigger: {
        trigger: '#card4-events',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card5-events"), {
        opacity: 0,
        y: 90,
      },
      {
      scrollTrigger: {
        trigger: '#card5-events',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      });
}, []);
  return (
    <div className={styles.AboutEvents}>
    <div className={styles.Container} id='about-events' ref={el}>
    <div className={styles.Title}>
      <h2 id='h2-events'>What our events offer</h2>
    </div>
    <div className={styles.Cards}>
    <div className={styles.Top}>
    <div className={styles.Card} id='card1-events'>
    <svg
        id='svg1'
        className={styles.Svg}
        viewBox="0 0 24 24"
        fill="#a9db51"
        height="40px"
        width="40px"
    >
    <path d="M12.75 3.94c1-.72 2.16-1.08 3.47-1.08.72 0 1.51.19 2.37.59.86.39 1.54.85 2.04 1.38 1.03 1.28 1.46 2.77 1.31 4.47-.16 1.7-.72 3.03-1.69 3.97l-7.59 7.59c-.19.19-.43.28-.71.28-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.25-.22.25-.45 0-.7-.25-.25-.48-.25-.7 0l-4.59 4.59a.95.95 0 01-.71.28c-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.27-.25.27-.5 0-.75-.23-.25-.45-.25-.7 0l-4.59 4.64a.98.98 0 01-.71.28c-.28 0-.52-.09-.73-.28-.2-.19-.3-.42-.3-.7 0-.28.11-.53.33-.75l4.6-4.6c.25-.25.25-.48 0-.7-.25-.22-.49-.22-.71 0L6.28 14.5c-.22.2-.45.31-.7.31-.28 0-.52-.1-.7-.31-.19-.2-.29-.44-.29-.72 0-.28.1-.51.29-.7C7.94 10 9.83 8.14 10.55 7.45l3.56 3.52c.39.37.84.56 1.39.56.7 0 1.25-.28 1.66-.84.28-.41.38-.86.3-1.36-.08-.5-.29-.92-.63-1.27l-4.08-4.12m2.06 6.33L10.55 6l-7.08 7.08c-.84-.85-1.32-2.15-1.43-3.92-.11-1.76.37-3.29 1.43-4.57 1.19-1.18 2.61-1.78 4.26-1.78 1.66 0 3.07.6 4.22 1.78l4.27 4.27c.19.19.28.42.28.7 0 .28-.09.52-.28.71-.19.18-.42.28-.72.28-.27 0-.5-.1-.69-.28z" />
    </svg>
    <h3 id='card1-h3'>Amet Consectetur</h3>
    <p id='card1-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et dolore eos blanditiis placeat!</p>
    </div>
    <div className={styles.Card} id='card2-events'>
    <svg
        id='svg2'
        className={styles.Svg}
        viewBox="0 0 24 24"
        fill="#a9db51"
        height="40px"
        width="40px"
    >
    <path d="M12.75 3.94c1-.72 2.16-1.08 3.47-1.08.72 0 1.51.19 2.37.59.86.39 1.54.85 2.04 1.38 1.03 1.28 1.46 2.77 1.31 4.47-.16 1.7-.72 3.03-1.69 3.97l-7.59 7.59c-.19.19-.43.28-.71.28-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.25-.22.25-.45 0-.7-.25-.25-.48-.25-.7 0l-4.59 4.59a.95.95 0 01-.71.28c-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.27-.25.27-.5 0-.75-.23-.25-.45-.25-.7 0l-4.59 4.64a.98.98 0 01-.71.28c-.28 0-.52-.09-.73-.28-.2-.19-.3-.42-.3-.7 0-.28.11-.53.33-.75l4.6-4.6c.25-.25.25-.48 0-.7-.25-.22-.49-.22-.71 0L6.28 14.5c-.22.2-.45.31-.7.31-.28 0-.52-.1-.7-.31-.19-.2-.29-.44-.29-.72 0-.28.1-.51.29-.7C7.94 10 9.83 8.14 10.55 7.45l3.56 3.52c.39.37.84.56 1.39.56.7 0 1.25-.28 1.66-.84.28-.41.38-.86.3-1.36-.08-.5-.29-.92-.63-1.27l-4.08-4.12m2.06 6.33L10.55 6l-7.08 7.08c-.84-.85-1.32-2.15-1.43-3.92-.11-1.76.37-3.29 1.43-4.57 1.19-1.18 2.61-1.78 4.26-1.78 1.66 0 3.07.6 4.22 1.78l4.27 4.27c.19.19.28.42.28.7 0 .28-.09.52-.28.71-.19.18-.42.28-.72.28-.27 0-.5-.1-.69-.28z" />
    </svg>
    <h3 id='card2-h3'>Lorem Ipsum</h3>
    <p id='card2-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et dolore eos blanditiis placeat!</p>
    </div>
    </div>
    <div className={styles.Bottom}>
    <div className={styles.Card} id='card3-events'>
    <svg
        id='svg3'
        className={styles.Svg}
        viewBox="0 0 24 24"
        fill="#a9db51"
        height="40px"
        width="40px"
    >
    <path d="M12.75 3.94c1-.72 2.16-1.08 3.47-1.08.72 0 1.51.19 2.37.59.86.39 1.54.85 2.04 1.38 1.03 1.28 1.46 2.77 1.31 4.47-.16 1.7-.72 3.03-1.69 3.97l-7.59 7.59c-.19.19-.43.28-.71.28-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.25-.22.25-.45 0-.7-.25-.25-.48-.25-.7 0l-4.59 4.59a.95.95 0 01-.71.28c-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.27-.25.27-.5 0-.75-.23-.25-.45-.25-.7 0l-4.59 4.64a.98.98 0 01-.71.28c-.28 0-.52-.09-.73-.28-.2-.19-.3-.42-.3-.7 0-.28.11-.53.33-.75l4.6-4.6c.25-.25.25-.48 0-.7-.25-.22-.49-.22-.71 0L6.28 14.5c-.22.2-.45.31-.7.31-.28 0-.52-.1-.7-.31-.19-.2-.29-.44-.29-.72 0-.28.1-.51.29-.7C7.94 10 9.83 8.14 10.55 7.45l3.56 3.52c.39.37.84.56 1.39.56.7 0 1.25-.28 1.66-.84.28-.41.38-.86.3-1.36-.08-.5-.29-.92-.63-1.27l-4.08-4.12m2.06 6.33L10.55 6l-7.08 7.08c-.84-.85-1.32-2.15-1.43-3.92-.11-1.76.37-3.29 1.43-4.57 1.19-1.18 2.61-1.78 4.26-1.78 1.66 0 3.07.6 4.22 1.78l4.27 4.27c.19.19.28.42.28.7 0 .28-.09.52-.28.71-.19.18-.42.28-.72.28-.27 0-.5-.1-.69-.28z" />
    </svg>
    <h3 id='card3-h3'>Et Dolore</h3>
    <p id='card3-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et dolore eos blanditiis placeat!</p>
    </div>
    <div className={styles.Card} id='card4-events'>
    <svg
        id='svg4'
        className={styles.Svg}
        viewBox="0 0 24 24"
        fill="#a9db51"
        height="40px"
        width="40px"
    >
    <path d="M12.75 3.94c1-.72 2.16-1.08 3.47-1.08.72 0 1.51.19 2.37.59.86.39 1.54.85 2.04 1.38 1.03 1.28 1.46 2.77 1.31 4.47-.16 1.7-.72 3.03-1.69 3.97l-7.59 7.59c-.19.19-.43.28-.71.28-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.25-.22.25-.45 0-.7-.25-.25-.48-.25-.7 0l-4.59 4.59a.95.95 0 01-.71.28c-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.27-.25.27-.5 0-.75-.23-.25-.45-.25-.7 0l-4.59 4.64a.98.98 0 01-.71.28c-.28 0-.52-.09-.73-.28-.2-.19-.3-.42-.3-.7 0-.28.11-.53.33-.75l4.6-4.6c.25-.25.25-.48 0-.7-.25-.22-.49-.22-.71 0L6.28 14.5c-.22.2-.45.31-.7.31-.28 0-.52-.1-.7-.31-.19-.2-.29-.44-.29-.72 0-.28.1-.51.29-.7C7.94 10 9.83 8.14 10.55 7.45l3.56 3.52c.39.37.84.56 1.39.56.7 0 1.25-.28 1.66-.84.28-.41.38-.86.3-1.36-.08-.5-.29-.92-.63-1.27l-4.08-4.12m2.06 6.33L10.55 6l-7.08 7.08c-.84-.85-1.32-2.15-1.43-3.92-.11-1.76.37-3.29 1.43-4.57 1.19-1.18 2.61-1.78 4.26-1.78 1.66 0 3.07.6 4.22 1.78l4.27 4.27c.19.19.28.42.28.7 0 .28-.09.52-.28.71-.19.18-.42.28-.72.28-.27 0-.5-.1-.69-.28z" />
    </svg>
    <h3 id='card4-h3'>Sit Amet</h3>
    <p id='card4-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et dolore eos blanditiis placeat!</p>
    </div>
    <div className={styles.Card} id='card5-events'>
    <svg
        id='svg5'
        className={styles.Svg}
        viewBox="0 0 24 24"
        fill="#a9db51"
        height="40px"
        width="40px"
    >
    <path d="M12.75 3.94c1-.72 2.16-1.08 3.47-1.08.72 0 1.51.19 2.37.59.86.39 1.54.85 2.04 1.38 1.03 1.28 1.46 2.77 1.31 4.47-.16 1.7-.72 3.03-1.69 3.97l-7.59 7.59c-.19.19-.43.28-.71.28-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.25-.22.25-.45 0-.7-.25-.25-.48-.25-.7 0l-4.59 4.59a.95.95 0 01-.71.28c-.28 0-.51-.09-.7-.28a.942.942 0 01-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.27-.25.27-.5 0-.75-.23-.25-.45-.25-.7 0l-4.59 4.64a.98.98 0 01-.71.28c-.28 0-.52-.09-.73-.28-.2-.19-.3-.42-.3-.7 0-.28.11-.53.33-.75l4.6-4.6c.25-.25.25-.48 0-.7-.25-.22-.49-.22-.71 0L6.28 14.5c-.22.2-.45.31-.7.31-.28 0-.52-.1-.7-.31-.19-.2-.29-.44-.29-.72 0-.28.1-.51.29-.7C7.94 10 9.83 8.14 10.55 7.45l3.56 3.52c.39.37.84.56 1.39.56.7 0 1.25-.28 1.66-.84.28-.41.38-.86.3-1.36-.08-.5-.29-.92-.63-1.27l-4.08-4.12m2.06 6.33L10.55 6l-7.08 7.08c-.84-.85-1.32-2.15-1.43-3.92-.11-1.76.37-3.29 1.43-4.57 1.19-1.18 2.61-1.78 4.26-1.78 1.66 0 3.07.6 4.22 1.78l4.27 4.27c.19.19.28.42.28.7 0 .28-.09.52-.28.71-.19.18-.42.28-.72.28-.27 0-.5-.1-.69-.28z" />
    </svg>
    <h3 id='card5-h3'>Ipsum Dolor</h3>
    <p id='card5-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et dolore eos blanditiis placeat!</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default AboutEvents