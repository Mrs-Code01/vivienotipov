import React, { useEffect } from 'react'
import contactStyle from '../css/contact.module.css'
import countryData from '../data/countryData.json'
import { useState } from 'react'
import Footer from '../components/Footer'



const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  const handleChange = (event) => {
    setSelectedCountry(event.target.value)

    setShowMessage(false)
    setTimeout(() => {
      setShowMessage(true)
    }, 2000)
  }

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 6000);
      return () => clearTimeout(timer)
    }
  })




  return (
    <>
      <header className={contactStyle.header}>
        <h1>CONTACT US</h1>
      </header>
      <div className={contactStyle.formContainer}>
        <div>
          <h2>Let's Get To Know You!</h2>
          <div className={contactStyle.line}></div>
        </div>
        <form action="#">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' placeholder='First Name' />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' placeholder='Last Name' />
          </div>
          <div>
            <label htmlFor="email">Enter Email</label>
            <input type="email" id='email' placeholder='Enter Email' />
          </div>
          <div>
            <label htmlFor="country-select">Country</label>
            <select id="country-select" value={selectedCountry} onChange={handleChange}>
              <option value="">--Select Country--</option>
              {
                countryData.map((country) => (
                  <option key={country.code} value={country.name}>{country.name}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label htmlFor="phone">Phone No</label>
            <input type="tel" id='phone' placeholder='Phone No.' />
          </div>
          <div>
            <label htmlFor="jobrole">Job Role</label>
            <input type="text" id='jobrole' placeholder='Job Role' />
          </div>
          <textarea placeholder='Say Something...'></textarea>
          <button type='submit'>Submit</button>
          {showMessage && <p>You selected {selectedCountry}</p>}
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contact
