import React from 'react'
import ArtReservation from '../component/artcomponent/ArtReservation'
import Footer from '../component/Footer'
import Headerpage from '../component/photograph-detail/Headerpage'
import Newsletter from '../component/photograph-detail/Newsletter'
import Review from '../component/photograph-detail/Review'



function ArtPage() {
  return (
       <main className='mt-10 bg-gray-50'>
       <Headerpage/> 
            <Review/> 
      <Newsletter/>
 
        <Footer/>
      </main>
  )
}

export default ArtPage