import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import EventsHero from '../components/eventspage/EventsHero'
import UpcomingEvents from '../components/eventspage/UpcomingEvents'
import EventsReviews from '../components/eventspage/EventsReviews'
import Exhibitor from '../components/eventspage/Exhibitor'
import AboutEvents from '../components/eventspage/AboutEvents'
import Newsletter from '../components/Newsletter'
import Sponsors from '../components/Sponsors'


function events() {
  return (
    <div>
      <Nav />
      <EventsHero />
      <AboutEvents />
      <UpcomingEvents />
      <Exhibitor />
      <EventsReviews />
      <Sponsors />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default events