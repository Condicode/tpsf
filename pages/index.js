import Head from 'next/head'
import AboutHome from '../components/homepage/AboutHome'
import EventsHome from '../components/homepage/EventsHome'
import Faqs from '../components/homepage/Faqs'
import Footer from '../components/Footer'
import Gallerly from '../components/homepage/Gallerly'
import Hero from '../components/homepage/Hero'
import Nav from '../components/Nav'
import Newsletter from '../components/Newsletter'
import Blog from '../components/homepage/Blog'
import Reviews from '../components/homepage/Reviews'

 const Home = () => {

  return (
    <div>
      <Head>
        <title>Tpsf Events Platform</title>
        <meta name="Tpsf" content="Tpsf events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <AboutHome />
      <EventsHome />
      <Blog />
      <Gallerly />
      <Reviews />
      <Faqs />
      <Newsletter />
      <Footer />
    </div>
  )
}
export default Home