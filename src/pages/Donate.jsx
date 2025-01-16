import React from 'react'
import { Link } from 'react-router-dom'
import donateStyle from '../css/donate.module.css'
import { useState } from 'react'
import Footer from '../components/Footer'

const Donate = () => {
  const [activeButton, setActiveButton] = useState(null)
  const [activeContent, setActiveContent] = useState(null)



  return (
    <>
      <header className={donateStyle.header}>
        <h1>HOW TO DONATE TO THE VIVIEN OTI POVERTY RELIEF INITIATIVE</h1>
      </header>
      <main>
        <h2>Donate to the Vivien Oti Poverty Relief Initiative</h2>
        <div className={donateStyle.line}></div>
        <p>
          Empowering communities to break the cycle of
          Poverty. The Vivien Oti Poverty Relief Initiative
          envisions a world where every individual has access to resources, opportunities, and support to thrive with
          dignity and hope.<br></br><br></br>
          Your financial support enables us to provide
          essential services to those in need. Donate today and help us make a difference!
        </p>
      </main>
      <div className={donateStyle.donateContainer}>
        <div >
          <div className={`${donateStyle.donateMode} ${donateStyle.bank}`}>
            <div className={donateStyle.donateContent}>
              <h3>Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat et modi amet placeat rem possimus tenetur perspiciatis! Laboriosam reiciendis voluptate
              </p>
            </div>
            <div className={donateStyle.float}>
              <h3>Bank Transfer</h3>
            </div>
          </div>
          <button className={donateStyle.learnMore_1} onClick={() => setActiveContent("button6")}>Learn More</button>
        </div>
        <div>
          <div className={`${donateStyle.donateMode} ${donateStyle.cheque}`}>
            <div>
              <h3>Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat et modi amet placeat rem possimus tenetur perspiciatis! Laboriosam reiciendis voluptate
              </p>
            </div>
            <div className={donateStyle.float}>
              <h3>Cheque</h3>
            </div>
          </div>
          <button className={donateStyle.learnMore_2} onClick={() => setActiveContent("button7")}>Learn More</button>
        </div>
        <div>
          <div className={`${donateStyle.donateMode} ${donateStyle.cash}`}>
            <div>
              <h3>Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat et modi amet placeat rem possimus tenetur perspiciatis! Laboriosam reiciendis voluptate
              </p>
            </div>
            <div className={donateStyle.float}>
              <h3>Cash Donation</h3>
            </div>
          </div>
          <button className={donateStyle.learnMore_3} onClick={() => setActiveContent("button8")}>Learn More</button>
        </div>
        <div>
          <div className={`${donateStyle.donateMode} ${donateStyle.online}`}>
            <div>
              <button className={donateStyle.oneTime} onClick={() => setActiveButton("button1")}>One-Time</button>
              <button className={donateStyle.weekly} onClick={() => setActiveButton("button2")}>Weekly</button>
              <button className={donateStyle.monthly} onClick={() => setActiveButton("button3")}>Monthly</button>
              <button className={donateStyle.quarterly} onClick={() => setActiveButton("button4")}>Quarterly</button>
              <button className={donateStyle.annually} onClick={() => setActiveButton("button5")}>Annually</button>
            </div>
            <div className={donateStyle.float}>
              <h3>Online Donation</h3>
            </div>
          </div>
          <button className={donateStyle.learnMore_4} onClick={() => setActiveContent("button9")}>Learn More</button>
        </div>
      </div>
      <div className={donateStyle.options}>
        {activeButton === "button1" &&
          <div className={`${activeButton !== "button1" ? donateStyle.hidden : ""} ${donateStyle.oneTime}`}>
            <h3>One Time Donation</h3>
            <div>
              <Link to=''>$10</Link>
              <Link to=''>$20</Link>
              <Link to=''>$50</Link>
              <Link to=''>$100</Link>
              <Link to=''>$500</Link>
              <Link to=''>Others</Link>
            </div>
          </div>}
        {activeButton === "button2" &&
          <div className={`${activeButton !== "button2" ? donateStyle.hidden : ""} ${donateStyle.weekly}`}>
            <h3>Weekly Donation</h3>
            <div>
              <Link to=''>$10</Link>
              <Link to=''>$20</Link>
              <Link to=''>$50</Link>
              <Link to=''>$100</Link>
              <Link to=''>$500</Link>
              <Link to=''>Others</Link>
            </div>
          </div>}
        {activeButton === "button3" &&
          <div className={`${activeButton !== "button3" ? donateStyle.hidden : ""} ${donateStyle.monthly}`}>
            <h3>Monthly Donation</h3>
            <div>
              <Link to=''>$10</Link>
              <Link to=''>$20</Link>
              <Link to=''>$50</Link>
              <Link to=''>$100</Link>
              <Link to=''>$500</Link>
              <Link to=''>Others</Link>
            </div>
          </div>}
        {activeButton === "button4" &&
          <div className={`${activeButton !== "button4" ? donateStyle.hidden : ""} ${donateStyle.quarterly}`}>
            <h3>Quarterly Donation</h3>
            <div>
              <Link to=''>$10</Link>
              <Link to=''>$20</Link>
              <Link to=''>$50</Link>
              <Link to=''>$100</Link>
              <Link to=''>$500</Link>
              <Link to=''>Others</Link>
            </div>
          </div>}
        {activeButton === "button5" &&
          <div className={`${activeButton !== "button5" ? donateStyle.hidden : ""} ${donateStyle.annually}`}>
            <h3>Annual Donation</h3>
            <div>
              <Link to=''>$10</Link>
              <Link to=''>$20</Link>
              <Link to=''>$50</Link>
              <Link to=''>$100</Link>
              <Link to=''>$500</Link>
              <Link to=''>Others</Link>
            </div>
          </div>}
      </div>
      <div className={donateStyle.learnMoreContentContainer}>
        {activeContent === "button6" &&
          <div className={`${activeContent !== "button6" ? donateStyle.hideContent : ""}`}>
            <div>
              <h2>Bank Transfer</h2>
              <div className={donateStyle.learnMoreContent_line}></div>
            </div>
            <div>
              <h3>Important Notes</h3>
              <ul>
                <li>
                  Please ensure to use the correct account number and bank details
                </li>
                <li>
                  Transfer fees may apply; Please check with your bank for details.
                </li>
                <li>
                  Once the transfer is complete, please notify us via phone or SMS to confirm receipt
                </li>
              </ul>
            </div>
            <div>
              <h3>Why Bank Transfer?</h3>
              <p>
                Bank transfers are a secure and convenient way to support our programs and services, bringing relief and empowerment to those in need.
              </p>
            </div>
            <div>
              <h3 className={donateStyle.faq}>Frequently Asked Questions</h3>
              <h3>Questions and Answers</h3>
              <ul>
                <li><strong>Is bank transfer secure?</strong><br></br>Yes, bank transfers are a secure way to donate
                </li>
                <li><strong>Will i receive a receipt for my donation?</strong><br></br>Yes, our team will provide a receipt upon confirmation of the transfer
                </li>
                <li><strong>Can I make a bank transfer from outside Nigeria?</strong><br></br>Yes, please contact your bank for international transfer details and fees.
                </li>
              </ul>
            </div>
          </div>
        }
        {/*****************ITEM 1 END**************/}
        {activeContent === "button7" &&
          <div className={`${activeContent !== "button7" ? donateStyle.hideContent : ""}`}>
            <div>
              <h2>Cheque Donations</h2>
              <div className={donateStyle.learnMoreContent_line}></div>
            </div>
            <div>
              <h3>Important Notes</h3>
              <ul>
                <li>
                  Please ensure the cheque is properly filled out and signed.
                </li>
                <li>
                  Cheques should be made payable in Nigerian Naira (NGN) only.
                </li>
                <li>
                  Once the cheque is received, our team will process and confirm the donation.
                </li>
              </ul>
            </div>
            <div>
              <h3>Why Cheque Donations?</h3>
              <p>
                Cheque donations provide a secure and traditional way to support our cause. Your donation will be used to support our programs and services, bringing relief and empowerment to those in need.
              </p>
            </div>
            <div>
              <h3 className={donateStyle.faq}>Frequently Asked Questions</h3>
              <h3>Questions and Answers</h3>
              <ul>
                <li><strong>Is cheque donation secure?</strong><br></br>Yes, cheque donations are a secure way to donate.
                </li>
                <li><strong>Will I receive a receipt for my donation?</strong><br></br>Yes, our team will provide a receipt upon confirmation of the donation.
                </li>
                <li><strong>How do I submit my cheque donation?</strong><br></br>Please contact us via phone or email to arrange for cheque donation submission.
                </li>
              </ul>
            </div>
          </div>
        }
        {/*****************ITEM 2 END**************/}
        {activeContent === "button8" &&
          <div className={`${activeContent !== "button8" ? donateStyle.hideContent : ""}`}>
            <div>
              <h2>Cash/In-Kind Donations</h2>
              <div className={donateStyle.learnMoreContent_line}></div>
            </div>
            <div>
              <h3>Important Notes</h3>
              <ul>
                <li>
                  Please ensure the cheque is properly filled out and signed.
                </li>
                <li>
                  Cheques should be made payable in Nigerian Naira (NGN) only.
                </li>
                <li>
                  Once the cheque is received, our team will process and confirm the donation.
                </li>
              </ul>
            </div>
            <div>
              <h3>Why Cheque Donations?</h3>
              <p>
                Cheque donations provide a secure and traditional way to support our cause. Your donation will be used to support our programs and services, bringing relief and empowerment to those in need.
              </p>
            </div>
            <div>
              <h3 className={donateStyle.faq}>Frequently Asked Questions</h3>
              <h3>Questions and Answers</h3>
              <ul>
                <li><strong>Is cheque donation secure?</strong><br></br>Yes, cheque donations are a secure way to donate.
                </li>
                <li><strong>Will I receive a receipt for my donation?</strong><br></br>Yes, our team will provide a receipt upon confirmation of the donation.
                </li>
                <li><strong>How do I submit my cheque donation?</strong><br></br>Please contact us via phone or email to arrange for cheque donation submission.
                </li>
              </ul>
            </div>
          </div>
        }
        {/*****************ITEM 3 END**************/}
        {activeContent === "button9" &&
          <div className={`${activeContent !== "button9" ? donateStyle.hideContent : ""}`}>
            <div>
              <h2>Online Donations</h2>
              <div className={donateStyle.learnMoreContent_line}></div>
            </div>
            <div>
              <h3>How to Donate</h3>
              <ul>
                <li>
                  Click the "Donate" button below.
                </li>
                <li>
                  Enter your donation amount and select your payment method.
                </li>
                <li>
                  Fill in your payment details and confirm the transaction.
                </li>
              </ul>
            </div>
            <div>
              <h3>Why Donate Online?</h3>
              <p>
                Donating online is quick, easy, and convenient. Your donation will be used to support our programs and services, bringing relief and empowerment to those in need.<br></br><br></br>Our online payment system is secure and reliable, ensuring your personal and financial information is protected.
              </p>
            </div>
            <div>
              <h3 className={donateStyle.faq}>Frequently Asked Questions</h3>
              <h3>Questions and Answers</h3>
              <ul>
                <li><strong>Is online donation secure?</strong><br></br>Yes, our online payment system is secure and reliable.
                </li>
                <li><strong>What payment methods do you accept?</strong><br></br>We accept payments through Flutterwave, bank transfer, and mobile payments.
                </li>
                <li><strong>Will I receive a receipt for my donation?</strong><br></br>Yes, our team will provide a receipt upon confirmation of the donation.
                </li>
              </ul>
            </div>
          </div>
        }
        {/*****************ITEM 4 END**************/}
      </div>
      <Footer />
    </>
  )
}

export default Donate
