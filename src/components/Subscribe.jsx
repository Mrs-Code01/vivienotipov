import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import '../css/subscribe.css'

const Subscribe = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleCheckboxState = (event) => {
    setIsSubscribed(event.target.checked)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isSubscribed) {
      setShowMessage(true)
    } else {
      setShowMessage(false)
    }
  }


  return (
    <>
      <section className='subscribe'>
        <div className='subscribe-flex'>
          <img src={logo} alt="NGO logo" />
          <div className='form-container'>
            <h2>Subscribe To Our Newsletter</h2>
            <p>
              By subscribing to our newsletter, you will stay informed about our initiatives, events and successes!
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id='firstname' />
              </div>
              <div>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id='lastname' />
              </div>
              <div>
                <label htmlFor="email">Phone No:</label>
                <input type='tel' pattern='[0-9]{1,3}[-\s][0-9]{1,4}[-\s][0-9]{1,4}' id='phone' />
              </div>
              <div>
                <label htmlFor="phone">Email:</label>
                <input type='email' id='email' required />
              </div>
              <div className='consent'>
                <input type="checkbox" checked={isSubscribed} onChange={handleCheckboxState} />
                <p>
                  By submitting this form, you consent to receiving regular newsletters and updates from Vivien Oti Poverty Relief Initiative.
                </p>
              </div>
              <p>
                We respect your privacy and will not share your information with third-party organizations.
              </p>
              <button type='submit'>Submit</button>
              {showMessage && <p className='subscribed' style={{ fontSize: "16px" }}>Hurray! You are subscribed!</p>}
            </form>
          </div>
        </div>
      </section >
    </>
  )
}

export default Subscribe
