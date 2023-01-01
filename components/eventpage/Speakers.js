import React from 'react'
import styles from './Speakers.module.css'
import Image from 'next/image'
import img1 from '../../images/Balozi_Mbelwa_Kairuki.jpg'
import img2 from '../../images/Mbena-modified.png'
import img3 from '../../images/gugu.jpeg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Speakers() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-speakers"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-speakers',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h3-speakers"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-speakers',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p1-speakers"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-speakers',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p2-speakers"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-speakers',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#image-speakers"), {
        opacity: 0,
        y: 30,
        scale: .7,
        borderRadius: '100%'
      },
      {
      scrollTrigger: {
        trigger: '#image-speakers',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
        scale: 1,
        borderRadius: '0% 50% 50% 50%'
      })
      .fromTo(q("#h3-otherspeakers"), {
        opacity: 0,
        y: 30,
      },
      {
      scrollTrigger: {
        trigger: '#h3-otherspeakers',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#speaker-one"), {
        opacity: 0,
        y: 60,
      },
      {
      scrollTrigger: {
        trigger: '#speaker-one',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#speaker-two"), {
        opacity: 0,
        y: 90,
      },
      {
      scrollTrigger: {
        trigger: '#speaker-two',
        scrub: 1.5,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#speaker-three"), {
        opacity: 0,
        y: 120,
      },
      {
      scrollTrigger: {
        trigger: '#speaker-three',
        scrub: 1.5,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#speaker-four"), {
        opacity: 0,
        y: 150,
      },
      {
      scrollTrigger: {
        trigger: '#speaker-four',
        scrub: 1.5,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#speaker-four"), {
        opacity: 0,
        y: 150,
      },
      {
      scrollTrigger: {
        trigger: '#speaker-four',
        scrub: 1.5,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#speaker-button"), {
        opacity: 0,
        y: 30,
      },
      {
      scrollTrigger: {
        trigger: '#speaker-button',
        scrub: 1,
        start: 'top 100%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      });
}, []);

  const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "50% 0 50% 50%", scale: .9, ease: "power2.out", delay: .1 });
    };
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, { borderRadius: "0 50% 50% 50%", scale: 1, ease: "power2.out", delay: .1 });
    };
    const onEnter2 = ({ currentTarget }) => {
      gsap.to(currentTarget, { scale: .9, ease: "power2.out", delay: .1 });
    };
    const onLeave2 = ({ currentTarget }) => {
      gsap.to(currentTarget, { scale: 1, ease: "power2.out", delay: .1 });
    };
  return (
    <div className={styles.Speakers}>
    <div className={styles.Container} id='speakers' ref={el}>
    <div className={styles.Keynote}>
    <div className={styles.Left}>
    <h2 id='h2-speakers'>Keynote Speaker</h2>
    <h3 id='h3-speakers'>H.E. Mbelwa Brighton Kairuki</h3>
    <p id='p1-speakers'>Ambassador of the United Republic of Tanzania in Beijing, China.</p>
    <p id='p2-speakers'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni porro dolores quo reiciendis, facere voluptates unde dolore! Exercitationem, magnam laudantium laborum nobis iusto nulla quisquam?</p>
    </div>
    <div className={styles.Right}>
    <div className={styles.Image}>
    <Image id='image-speakers' className={styles.Keynote__image} src={img1} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
    </div>
    </div>
    </div>
    <div className={styles.Other__speakers}>
    <div className={styles.Inner}></div>
    <div className={styles.Title}>
    <h3 id='h3-otherspeakers'>Meet this event Speakers</h3>
    </div>
    <div className={styles.Speaker__Cards}>
    <div className={styles.Left}>
    <div className={styles.One} id='speaker-one' onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
    <div className={styles.SpeakerOne__Image}>
    <Image className={styles.SpeakerImage} src={img2} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <h4>Mr. Zachy Mbenna</h4>
    <p>TPSF Director Of Policy, Advocacy And Membership Management</p>
    </div>
    <div className={styles.Two} id='speaker-two' onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
    <div className={styles.SpeakerOne__Image}>
    <Image className={styles.SpeakerImage} src={img3} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <h4>Hon. Ally Gugu</h4>
    <p>Deputy Permanent Secretary at the Ministry of Investment and Trade.</p>
    </div>
    </div>
    <div className={styles.Right}>
    <div className={styles.Three} id='speaker-three' onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
    <div className={styles.SpeakerOne__Image}>
    <Image className={styles.SpeakerImage} src={img2} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <h4>Mr. Zachy Mbenna</h4>
    <p>TPSF Director Of Policy, Advocacy And Membership Management</p>
    </div>
    <div className={styles.Four} id='speaker-four' onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
    <div className={styles.SpeakerOne__Image}>
    <Image className={styles.SpeakerImage} src={img3} layout='fill' objectFit='cover' alt=''></Image>
    </div>
    <h4>Hon. Ally Gugu</h4>
    <p>Deputy Permanent Secretary at the Ministry of Investment and Trade.</p>
    </div>
    </div>
    </div>
    <button id='speaker-button'>
    <div className={styles.Button__inner}>
      <div>Register Now</div>
      <div>Register Now</div>
      </div>
    </button>
    </div>
    </div>
    </div>
  )
}

export default Speakers