import React from 'react'
import ceoMessageStyle from '../css/ceoMessage.module.css'
import ceo from "../assets/images/DSC_6897.jpg"


const CeoMessage = () => {
  return (
    <>
      <div className={ceoMessageStyle.ceoMessageContainer}>
        <img src={ceo} alt="" className={ceoMessageStyle.ceoMessageImg} style={{
          width: '100px',
          height: '100px'
        }} />
        <p>
          As the Founder of the Vivien Oti Poverty Relief Initiative, I, Miss Vivien Oti Obodoruku, am honored to share our organization's commitment to eradicating poverty. Our mission is to empower vulnerable individuals and families, providing them with the tools and support they need to break the cycle of poverty.
        </p>
      </div>
    </>
  )
}

export default CeoMessage
