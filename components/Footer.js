import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Logo from '../images/tpsf-logo.png'
import Link from 'next/link'
import { motion } from "framer-motion";

function Footer() {
  const currentTime = new Date()
    const year = currentTime.getFullYear()

  return (
    <div className={styles.Footer}>
    <div className={styles.Container}>
    <div className={styles.Inner}>
      <div className={styles.Left}>
        <div className={styles.Logo__image}>
          <Image src={Logo} layout='fill' objectFit='cover' alt=''></Image>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum culpa voluptatem nam dolor recusandae, nobis unde itaque minima autem impedit!</p>
        <div className={styles.Socials}>
            <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="24px"
            width="24px"
            >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
             <svg 
             fill="none" 
             viewBox="0 0 15 15" 
             height="24px" 
             width="24px">
            <path
                fill="currentColor"
                d="M14.977 1.467a.5.5 0 00-.87-.301 2.559 2.559 0 01-1.226.763A3.441 3.441 0 0010.526 1a3.539 3.539 0 00-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 00-.916-.048C.004 3.373-.157 5.407.604 7.139 1.27 8.656 2.61 9.864 4.51 10.665 3.647 11.276 2.194 12 .5 12a.5.5 0 00-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236.193-.546.232-1.178.177-2.006z"
            />
            </svg>
             <svg
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24px"
            width="24px"
            >
            <path d="M12 9.52A2.48 2.48 0 1014.48 12 2.48 2.48 0 0012 9.52zm9.93-2.45a6.53 6.53 0 00-.42-2.26 4 4 0 00-2.32-2.32 6.53 6.53 0 00-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 00-2.26.42 4 4 0 00-2.32 2.32 6.53 6.53 0 00-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 00.42 2.27 3.94 3.94 0 00.91 1.4 3.89 3.89 0 001.41.91 6.53 6.53 0 002.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 002.26-.42 3.89 3.89 0 001.41-.91 3.94 3.94 0 00.91-1.4 6.6 6.6 0 00.42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93zm-2.54 8a5.73 5.73 0 01-.39 1.8A3.86 3.86 0 0116.87 19a5.73 5.73 0 01-1.81.35H8.94A5.73 5.73 0 017.13 19a3.51 3.51 0 01-1.31-.86A3.51 3.51 0 015 16.87a5.49 5.49 0 01-.34-1.81V12 8.94A5.49 5.49 0 015 7.13a3.51 3.51 0 01.86-1.31A3.59 3.59 0 017.13 5a5.73 5.73 0 011.81-.35h6.12a5.73 5.73 0 011.81.35 3.51 3.51 0 011.31.86A3.51 3.51 0 0119 7.13a5.73 5.73 0 01.35 1.81V12c0 2.06.07 2.27.04 3.06zm-1.6-7.44a2.38 2.38 0 00-1.41-1.41A4 4 0 0015 6H9a4 4 0 00-1.38.26 2.38 2.38 0 00-1.41 1.36A4.27 4.27 0 006 9v6a4.27 4.27 0 00.26 1.38 2.38 2.38 0 001.41 1.41 4.27 4.27 0 001.33.26h6a4 4 0 001.38-.26 2.38 2.38 0 001.41-1.41 4 4 0 00.26-1.38v-3-3a3.78 3.78 0 00-.26-1.38zM12 15.82A3.81 3.81 0 018.19 12 3.82 3.82 0 1112 15.82zm4-6.89a.9.9 0 010-1.79.9.9 0 010 1.79z" />
            </svg>
            </div>
      </div>
      <div className={styles.Right}>
        <div className={styles.Pages}>
          <h3>Pages</h3>
          <ul>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>Home</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>About</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/events'>Events</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>Pricing</Link>
            </motion.li>
          </ul>
        </div>
        <div className={styles.Company}>
          <h3>Company</h3>
          <ul>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>Contact</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>FAQs</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>Blog</Link>
            </motion.li>
          </ul>
        </div>
        <div className={styles.Account}>
          <h3>Account</h3>
          <ul>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>Login</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>SignUp</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.1,
              color: '#a9db51',
              transition: { duration: .1 },
                    }}>
            <Link href='/'>Report</Link>
            </motion.li>
          </ul>
        </div>
      </div>
      </div>
      </div>
      <div className={styles.Copyright}>
        <p id="footer-copyright">All rights reserved &copy; {year}  Tanzania Private Sector Foundation</p>
      </div>
    </div>
  )
}

export default Footer