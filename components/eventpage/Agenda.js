import React from 'react'
import styles from './Agenda.module.css'
import Image from 'next/image'
import AgendaImage from '../../images/agenda.webp'
import Speaker1 from '../../images/Mbena-modified.png'
import Speaker2 from '../../images/gugu.jpeg'
import Speaker3 from '../../images/china.jpg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect


function Agenda() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-agenda"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-agenda',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-agenda"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-agenda',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card1-agenda"), {
        opacity: 0,
        y: 90
      },
      {
      scrollTrigger: {
        trigger: '#card1-agenda',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card2-agenda"), {
        opacity: 0,
        y: 60
      },
      {
      scrollTrigger: {
        trigger: '#card2-agenda',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card3-agenda"), {
        opacity: 0,
        y: 120
      },
      {
      scrollTrigger: {
        trigger: '#card3-agenda',
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
    <div className={styles.Agenda}>
    <div className={styles.Container} id='agenda' ref={el}>
    <div className={styles.Title}>
    <h2 id='h2-agenda'>Agenda</h2>
    <p id='p-agenda'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi iste blanditiis labore itaque, mollitia quidem nisi nihil maiores laborum quia harum reprehenderit veniam ipsa amet doloribus ab voluptas. Possimus, soluta est!</p>
    </div>
    <div className={styles.Cards}>
        <div className={styles.Card} id='card1-agenda'>
          <h4>10:00 am -10:10 am</h4>
            <p>Remarks from the Deputy Permanent Secretary at the Ministry of Investment,  Industry and Trade</p>
          <div className={styles.Speaker}>
            <Image className={styles.Speaker__image} src={Speaker2} layout='fill' objectFit='cover' alt=''></Image>
            </div>
            <h3>Hon. Ally S. Gugu</h3>
        </div>
        <div className={styles.Card} id='card2-agenda'>
          <h4>10:20 am -10:30 am</h4>
            <p>Remarks from the Representative of the Embassy of China to Tanzania</p>
          <div className={styles.Speaker}>
            <Image className={styles.Speaker__image} src={Speaker3} layout='fill' objectFit='cover' alt=''></Image>
            </div>
            <h3>Lu Youqing</h3>
        </div>
        <div className={styles.Card} id='card3-agenda'>
          <h4>10:40 am – 11:45 am</h4>
            <p>Remarks from the Deputy Permanent Secretary at the Ministry of Investment,  Industry and Trade</p>
          <div className={styles.Speaker}>
            <Image className={styles.Speaker__image} src={Speaker2} layout='fill' objectFit='cover' alt=''></Image>
            </div>
            <h3>Hon. Ally S. Gugu</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Agenda