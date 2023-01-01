import React from 'react'
import styles from './UpcomingEvents.module.css'
import Image from 'next/image'
import EventImage from '../../images/events1.jpg'
import Link from 'next/link'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function UpcomingEvents() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-upcomingevents"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-upcomingevents',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card1-left"), {
        opacity: 0,
        x: -30
      },
      {
      scrollTrigger: {
        trigger: '#h2-upcomingevents',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        opacity: 1,
        x: 0
      })
      .fromTo(q("#card1-right"), {
        opacity: 0,
        x: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-upcomingevents',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        opacity: 1,
      })
      .fromTo(q("#card2-left"), {
        opacity: 0,
        x: -60,
      },
      {
      scrollTrigger: {
        trigger: '#card2-left',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        opacity: 1,
      })
      .fromTo(q("#card2-right"), {
        opacity: 0,
        x: 60,
      },
      {
      scrollTrigger: {
        trigger: '#card2-right',
        scrub: 1,
        start: 'top 95%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        x: 0,
        opacity: 1,
      });
}, []);
  return (
    <div className={styles.UpcomingEvents}>
        <div className={styles.Container} id='upcomingevents' ref={el}>
        <div className={styles.Title}>
        <h2 id='h2-upcomingevents'>Our upcoming events</h2>
        </div>
        <div className={styles.EventCards}>
        <div className={styles.Card1}>
        <div className={styles.Left} id='card1-left'>
        <h4>10th Dec 2022</h4>
        <h3>China - Tanzania economic, trade, business and Investment promotion forum 2022</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam architecto fugiat tenetur natus quas fuga at accusantium aliquid molestias!</p>
        <div className={styles.Buttons}>
            <Link href="/event">
            <button>
            <div className={styles.Button__inner}>
            <div>Register</div>
            <div>Register</div>
            </div>
            </button>
            </Link>
            <Link href="/event">
            <button>
            <div className={styles.Button__inner}>
            <div>Learn More</div>
            <div>Learn More</div>
            </div>
            </button>
            </Link>
          </div>
        </div>
        <div className={styles.Right} id='card1-right'>
        <div className={styles.EventsHero__Image}>
        <Image className={styles.Image} src={EventImage} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        </div>
        </div>
        <div className={styles.Card2}>
        <div className={styles.Left} id='card2-left'>
        <div className={styles.EventsHero__Image}>
        <Image className={styles.Image} src={EventImage} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        </div>
        <div className={styles.Right} id='card2-right'>
        <h4>10th Dec 2022</h4>
        <h3>China - Tanzania economic, trade, business and Investment promotion forum 2022</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam architecto fugiat tenetur natus quas fuga at accusantium aliquid molestias!</p>
        <div className={styles.Buttons}>
            <Link href="/event">
            <button>
            <div className={styles.Button__inner}>
            <div>Register</div>
            <div>Register</div>
            </div>
            </button>
            </Link>
            <Link href="/event">
            <button>
            <div className={styles.Button__inner}>
            <div>Learn More</div>
            <div>Learn More</div>
            </div>
            </button>
            </Link>
          </div>
        </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default UpcomingEvents