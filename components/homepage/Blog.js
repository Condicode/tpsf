import React from 'react'
import styles from './Blog.module.css'
import Image from 'next/image'
import img1 from '../../images/Hero.jpg'
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect

function Blog() {
  gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-blog"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-blog',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-blog"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card1-blog"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#p-blog',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card2-blog"), {
        opacity: 0,
        y: 60
      },
      {
      scrollTrigger: {
        trigger: '#p-blog',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#card3-blog"), {
        opacity: 0,
        y: 90
      },
      {
      scrollTrigger: {
        trigger: '#p-blog',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h4-one"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#card1-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h3-one"), {
        opacity: 0,
        y: 60
      },
      {
      scrollTrigger: {
        trigger: '#card1-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-one"), {
        opacity: 0,
        y: 90
      },
      {
      scrollTrigger: {
        trigger: '#card1-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#button-one"), {
        opacity: 0,
        y: 120
      },
      {
      scrollTrigger: {
        trigger: '#card1-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h4-two"), {
        opacity: 0,
        y: 60
      },
      {
      scrollTrigger: {
        trigger: '#card1-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h3-two"), {
        opacity: 0,
        y: 90
      },
      {
      scrollTrigger: {
        trigger: '#card2-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-two"), {
        opacity: 0,
        y: 120
      },
      {
      scrollTrigger: {
        trigger: '#card2-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#button-two"), {
        opacity: 0,
        y: 150
      },
      {
      scrollTrigger: {
        trigger: '#card2-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h4-three"), {
        opacity: 0,
        y: 90
      },
      {
      scrollTrigger: {
        trigger: '#card1-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#h3-three"), {
        opacity: 0,
        y: 120
      },
      {
      scrollTrigger: {
        trigger: '#card3-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#p-three"), {
        opacity: 0,
        y: 150
      },
      {
      scrollTrigger: {
        trigger: '#card3-blog',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#button-three"), {
        opacity: 0,
        y: 180
      },
      {
      scrollTrigger: {
        trigger: '#card3-blog',
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

  const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, { scale: 1.1, ease: "power2.out", delay: .1 });
    };
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, { scale: 1, ease: "power2.out", delay: .1 });
    };
  return (
    <div className={styles.Blog}>
      <div className={styles.Container} id='blog' ref={el}>
        <div className={styles.Title}>
          <h2 id='h2-blog'>Some of our articles</h2>
          <p id='p-blog'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem fugit rem est repudiandae eos ullam autem dolorem animi harum quod?</p>
        </div>
        <div className={styles.Cards}>
          <div className={styles.One} id='card1-blog'>
            <div className={styles.Top}>
            <div className={styles.Top__image}>
            <Image className={styles.Image} src={img1} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
            </div>
            </div>
            <div className={styles.Bottom}>
              <h4 id='h4-one'>10th Dec 2022</h4>
              <h3 id='h3-one'>Why virtual events will be big in 2022</h3>
              <p id='p-one'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat vitae impedit placeat, ipsa at!</p>
              <div className={styles.CTA} id='button-one'>
                <button>
                <div className={styles.Button__inner}>
                <div>Read More</div>
                <div>Read More</div>
                </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Two} id='card2-blog'>
            <div className={styles.Top}>
            <div className={styles.Top__image}>
            <Image className={styles.Image} src={img1} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
            </div>
            </div>
            <div className={styles.Bottom}>
              <h4 id='h4-two'>10th Dec 2022</h4>
              <h3 id='h3-two'>Why virtual events will be big in 2022</h3>
              <p id='p-two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat vitae impedit placeat, ipsa at!</p>
              <div className={styles.CTA} id='button-two'>
                <button>
                <div className={styles.Button__inner}>
                <div>Read More</div>
                <div>Read More</div>
                </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Three} id='card3-blog'>
            <div className={styles.Top}>
            <div className={styles.Top__image}>
            <Image className={styles.Image} src={img1} layout='fill' objectFit='cover' alt='' onMouseEnter={onEnter} onMouseLeave={onLeave}></Image>
            </div>
            </div>
            <div className={styles.Bottom}>
              <h4 id='h4-three'>10th Dec 2022</h4>
              <h3 id='h3-three'>Why virtual events will be big in 2022</h3>
              <p id='p-three'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat vitae impedit placeat, ipsa at!</p>
              <div className={styles.CTA} id='button-three'>
                <button>
                <div className={styles.Button__inner}>
                <div>Read More</div>
                <div>Read More</div>
                </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog