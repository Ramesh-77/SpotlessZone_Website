import React from 'react'
import First from '../../Images/first.png'
import Second from '../../Images/first.png'


const Testimonial = () => {
  return (
      <>
     
        <div className="container-fluid py-5">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Why They are saying</h6>
          <h1 className="display-4 text-center mb-5">Some Feebback From Our Costumers Side</h1>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item">
            
              <img src={First} className="position-relative rounded-circle bg-white shadow mx-auto" style={{width: '100px', height: '100px', padding: '12px', marginBottom: '-50px', zIndex: 1}} alt="" />
              <div className="bg-light text-center p-4 pt-0">
                <h5 className="font-weight-medium mt-5">Client Name</h5>
                <p className="text-muted font-italic">Profession</p>
                <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor ipsum clita</p>
              </div>
            </div>
            <div className="testimonial-item">
            <img src={Second} className="position-relative rounded-circle bg-white shadow mx-auto" style={{width: '100px', height: '100px', padding: '12px', marginBottom: '-50px', zIndex: 1}} alt="" />
              <div className="bg-light text-center p-4 pt-0">
                <h5 className="font-weight-medium mt-5">Client Name</h5>
                <p className="text-muted font-italic">Profession</p>
                <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor ipsum clita</p>
              </div>
           
            </div>
          </div>
        </div>
      </div>
     
      </>
    
  )
}

export default Testimonial