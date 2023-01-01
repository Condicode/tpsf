import React from 'react'
import styles from './Faqs.module.css'
import { useState, useEffect} from 'react'
import { Collapse } from 'react-collapse';
import { transition } from 'react-collapse';
import { gsap } from "gsap";
import { useRef, useLayoutEffect} from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
React.useLayoutEffect = React.useEffect
import { motion } from "framer-motion";

function Faqs() {
  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);
  const [collapsed5, setCollapsed5] = useState(true);
  const [collapsed6, setCollapsed6] = useState(true);
  const [collapsed7, setCollapsed7] = useState(true);
  const [collapsed8, setCollapsed8] = useState(true);

  const toggleCollapsed1 = () => {
    setCollapsed1(!collapsed1);
    setCollapsed2(true);
    setCollapsed3(true);
    setCollapsed4(true);
    setCollapsed5(true);
    setCollapsed6(true);
    setCollapsed7(true);
    setCollapsed8(true);
  }

  const toggleCollapsed2 = () => {
    setCollapsed2(!collapsed2);
    setCollapsed1(true);
    setCollapsed3(true);
    setCollapsed4(true);
    setCollapsed5(true);
    setCollapsed6(true);
    setCollapsed7(true);
    setCollapsed8(true);
  }
    const toggleCollapsed3 = () => {
    setCollapsed3(!collapsed3);
    setCollapsed1(true);
    setCollapsed2(true);
    setCollapsed4(true);
    setCollapsed5(true);
    setCollapsed6(true);
    setCollapsed7(true);
    setCollapsed8(true);
  }

  const toggleCollapsed4 = () => {
    setCollapsed4(!collapsed4);
    setCollapsed1(true);
    setCollapsed2(true);
    setCollapsed3(true);
    setCollapsed5(true);
    setCollapsed6(true);
    setCollapsed7(true);
    setCollapsed8(true);
  }
  const toggleCollapsed5 = () => {
    setCollapsed5(!collapsed5);
    setCollapsed1(true);
    setCollapsed2(true);
    setCollapsed3(true);
    setCollapsed4(true);
    setCollapsed6(true);
    setCollapsed7(true);
    setCollapsed8(true);
  }

  const toggleCollapsed6 = () => {
    setCollapsed6(!collapsed6);
    setCollapsed1(true);
    setCollapsed2(true);
    setCollapsed3(true);
    setCollapsed4(true);
    setCollapsed5(true);
    setCollapsed7(true);
    setCollapsed8(true);
  }
    const toggleCollapsed7 = () => {
    setCollapsed7(!collapsed7);
    setCollapsed1(true);
    setCollapsed2(true);
    setCollapsed3(true);
    setCollapsed4(true);
    setCollapsed5(true);
    setCollapsed6(true);
    setCollapsed8(true);
  }

  const toggleCollapsed8 = () => {
    setCollapsed8(!collapsed8);
    setCollapsed1(true);
    setCollapsed2(true);
    setCollapsed3(true);
    setCollapsed4(true);
    setCollapsed5(true);
    setCollapsed6(true);
    setCollapsed7(true);
  }

    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const el = useRef();
  const tl = useRef();
      
  useLayoutEffect(() => {   
    const q = gsap.utils.selector(el);
    
    tl.current = gsap.timeline({defaults: {duration: 3, ease: "power2.out", delay: .5} })
      .fromTo(q("#h2-faqs"), {
        opacity: 0,
        y: 20,
      },
      {
      scrollTrigger: {
        trigger: '#h2-faqs',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#one"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#h2-faqs',
        scrub: 1,
        start: 'top 80%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#two"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#one',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#three"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#two',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#four"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#three',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#five"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#four',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#six"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#five',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#seven"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#six',
        scrub: 1,
        start: 'top 90%',
        endTrigger: '',
        end: "+=500",
      },
        
        duration: 1,
        y: 0,
        opacity: 1,
      })
      .fromTo(q("#eight"), {
        opacity: 0,
        y: 30
      },
      {
      scrollTrigger: {
        trigger: '#seven',
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
    <div className={styles.Faqs}>
      <div className={styles.Container} id='faqs' ref={el}>
        <h2 id='h2-faqs'>FAQs</h2>
      <ul>
        <motion.li id='one'
        whileHover={{ 
          border: '1px solid #000',
          borderBottom: '10px solid #000',
          transition: { duration: .2, ease: "easeInOut" }
        }}>
          <h3 onClick={toggleCollapsed1} transition={transition}>What is a virtual event?</h3>
          <Collapse isOpened={!collapsed1}>
            <p className={styles.Answer}>A virtual event is essentially an event that you can attend from the comfort and convenience of your home, office, or wherever else you can think of, through your personal computer or mobile device. Think of it as attending a standard Movazi webinar but with the ability to engage with anyone else that is attending a conference either physically or online. We are bringing two worlds together for a shared unique experience!</p>
          </Collapse>
        </motion.li>
        <motion.li id='two'
        whileHover={{ 
          border: '1px solid #000',
          borderBottom: '10px solid #000',
          transition: { duration: .2, ease: "easeInOut" }
        }}>
          <h3 onClick={toggleCollapsed2}>How do I register for a virtual event?</h3>
          <Collapse isOpened={!collapsed2}>
            <p className={styles.Answer}>Register for the virtual event by selecting the “Attend VIRTUALLY” option from the Movazi Conferences website. Follow the on screen instructions by logging into iMIS and filling out the information required to register. This process is the same as registering for the in-person conference option but with a unique ID that lets us know that you should be receiving additional information regarding how to attend the conference via your computer or mobile device.</p>
          </Collapse>
        </motion.li>
        <motion.li id='three'
        whileHover={{ 
          border: '1px solid #000',
          borderBottom: '10px solid #000',
          transition: { duration: .2, ease: "easeInOut" }
        }}>
          <h3 onClick={toggleCollapsed3} transition={transition}>How much does it cost to attend virtually?</h3>
          <Collapse isOpened={!collapsed3} >
            <p className={styles.Answer}>The cost to register for the virtual conference is the same as the cost to register for the in-person conference. The cost to attend, however, is where you will see the potential savings. Consider that by attending virtually, you won’t need to book travel and lodging accommodations. Remember, you are paying for the education and engagement, which costs the same regardless of how you consume it</p>
          </Collapse>
        </motion.li>
        <motion.li id='four'
        whileHover={{ 
          border: '1px solid #000',
          borderBottom: '10px solid #000',
          transition: { duration: .2, ease: "easeInOut" }
        }}>
          <h3 onClick={toggleCollapsed4}>When will I receive the instructions for attending the virtual event?</h3>
          <Collapse isOpened={!collapsed4}>
            <p className={styles.Answer}>Movazi is working diligently to prepare for this unique experience and will send you the necessary instructions within a couple of weeks of the event. Make sure that the email address associated with your registration is accurate and up to date so that there is no delay in receiving our communications.</p>
          </Collapse>
        </motion.li>
        <motion.li id='five'
        whileHover={{ 
          border: '1px solid #000',
          borderBottom: '10px solid #000',
          transition: { duration: .2, ease: "easeInOut" }
        }}>
          <h3 onClick={toggleCollapsed5} transition={transition}>Can my computer or mobile device handle the virtual event?</h3>
          <Collapse isOpened={!collapsed5} >
            <p className={styles.Answer}>Most up to date computers and mobile devices such as laptops, desktops, and handheld tablets are capable of running the virtual event for you. Once the Policy & Issues Forum event page is available, you will be able to perform what’s called a System Checker that will analyze your internet browser, internet connection, and network settings to be sure they are optimized for your viewing experience. If there is a warning issued by this System Checker, simply click on the Get Help button or call the support number provided so that we can get you fixed up and ready for the virtual event.</p>
          </Collapse>
        </motion.li>
        <motion.li id='six'
        whileHover={{ 
          border: '1px solid #000',
          borderBottom: '10px solid #000',
          transition: { duration: .2, ease: "easeInOut" }
        }}>
          <h3 onClick={toggleCollapsed6}>What do I need to do on the day of the virtual event?</h3>
          <Collapse isOpened={!collapsed6}>
            <p className={styles.Answer}>On the morning of the event, you will receive a reminder that will look a lot like the initial virtual event email that you will have received a couple of weeks prior to the event. This will also contain a link that will automatically login to your account, and access the event page. Here, you will want to proceed to the Sessions tab, and click Attend Session for the session you choose. The system will allow you into the Session Player 15 minutes before the session starts.</p>
          </Collapse>
        </motion.li>
        <motion.li id='seven'
        whileHover={{ 
          border: '1px solid #000',
          borderBottom: '10px solid #000',
          transition: { duration: .2, ease: "easeInOut" }
        }}>
          <h3 onClick={toggleCollapsed7} transition={transition}>Do I have access to all of the educational sessions?</h3>
          <Collapse isOpened={!collapsed7} >
            <p className={styles.Answer}>In a word, yes! Similar to if you were attending the conference on site, you will be given the opportunity to select which sessions you’d like to attend virtually. It is up to you to decide which sessions interest you in a given time block and to attend those sessions as desired. You may attend as many or as few sessions as you want.</p>
          </Collapse>
        </motion.li>
        <motion.li id='eight'
        whileHover={{ 
          border: '1px solid #000',
          borderBottom: '10px solid #000',
          transition: { duration: .2, ease: "easeInOut" }
        }}>
          <h3 onClick={toggleCollapsed8}>Will I be able to see the presenters for each session?</h3>
          <Collapse isOpened={!collapsed8}>
            <p className={styles.Answer}>With the exception of the General Sessions, which will stream full video, the virtual streaming option will provide you with an audiocast – an audio feed along with the PowerPoint presentation and any other visual elements conveyed through the presenter’s computer. The educational sessions will not stream video capture of the presenter, stage, or room itself.</p>
          </Collapse>
        </motion.li>
      </ul>
      </div>
    </div>
  )
}

export default Faqs