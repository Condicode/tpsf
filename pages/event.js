import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import EventHero from '../components/eventpage/EventHero'
import EventReviews from '../components/eventpage/EventReviews'
import AboutEvent from '../components/eventpage/AboutEvent'
import Agenda from '../components/eventpage/Agenda'
import Speakers from '../components/eventpage/Speakers'
import Reserve from '../components/eventpage/Reserve'
import Sponsors from '../components/Sponsors'
import Newsletter from '../components/Newsletter'

function event() {
  return (
    <div>
        <Nav />
        <EventHero />
        <Reserve />
        <AboutEvent />
        <Agenda />
        <Speakers />
        <EventReviews />
        <Sponsors />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default event