import React from 'react'
import ArtReservation from '../component/artcomponent/ArtReservation'
import Footer from '../component/Footer'
import Newsletter from '../component/photograph-detail/Newsletter'
import Review from '../component/photograph-detail/Review'



function ArtReservationPage() {
  return (
       <main className='mt-10 bg-gray-50'>
        <ArtReservation/> 
            <Review/> 
      <Newsletter/>
 
        <Footer/>
      </main>
  )
}

export default ArtReservationPage