import React from 'react'
import { Link } from 'react-router-dom'
import government from "../assets/images/government.jpg"
import corporate from "../assets/images/corporate.jpg"
import nonprofit from "../assets/images/partners.jpg"
import give from "../assets/images/give.png"
import ceo from "../assets/images/ceo.jpg"
import volunteer from "../assets/images/volunteer.jpg"
import getInvolved from '../css/getInvolved.module.css'
import Footer from '../components/Footer'





const GetInvolved = () => {
  return (
    <>
      <header className={getInvolved.header}>
        <h1>GET INVOLVED</h1>
        <p>
          Make a difference in the world by joining our mission. Your involvement can change lives and create lasting impact
        </p>
      </header>

      <div className={getInvolved.partners}>
        <div className={getInvolved.partnersTopContent}>
          <h2>Our Partners</h2>
          <div className={getInvolved.line}></div>
        </div>

        <div className={getInvolved.partnersFlex}>
          <div className={getInvolved.corporate}>
            <div className={getInvolved.partnersTop}>
              <img src={corporate} alt="" />
              <h3>Corporate</h3>
              <p>
                At Vivien Oti Poverty Relief Initiative, we are proud to collaborate with corporate partners who share our commitment to creating a better world. By aligning your corporate social responsibility goals with our mission, we can drive meaningful change in communities that need it most.
              </p>
            </div>
            <div className={getInvolved.partnersBottom}>
              <button>Our Partners &#8594;</button>
              <div className={getInvolved.corporateLinks}>
                <Link>Collaborate with us</Link>
                <Link>See our current projects</Link>
              </div>
            </div>
          </div>

          <div className={getInvolved.nonprofit}>
            <div className={getInvolved.partnersTop}>
              <img src={nonprofit} alt="" />
              <h3>Non Profit</h3>
              <p>
                Collaboration is the key to tackling today’s complex challenges. At Vivien Oti Poverty Relief Initiative,  we work alongside fellow nonprofits to share resources, expertise, and passion.
              </p>
            </div>
            <div className={getInvolved.partnersBottom}>
              <button>Our Partners &#8594;</button>
              <div className={getInvolved.nonprofitLinks}>
                <Link>Collaborate with us</Link>
                <Link>See our current projects</Link>
              </div>
            </div>
          </div>

          <div className={getInvolved.government}>
            <div className={getInvolved.partnersTop}>
              <img src={government} alt="" />
              <h3>Government</h3>
              <p>
                Public-private collaboration is essential for sustainable development. Vivien Oti Poverty Relief Initiative is dedicated to working with government agencies to design and implement programs that address critical community needs.
              </p>
            </div>
            <div className={getInvolved.partnersBottom}>
              <button>Our Partners &#8594;</button>
              <div className={getInvolved.governmentLinks}>
                <Link>Collaborate with us</Link>
                <Link>See our current projects</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={getInvolved.supporters}>
        <div className={getInvolved.supportersTopContent}>
          <h2>Our Supporters</h2>
          <div className={getInvolved.line}></div>
        </div>

        <div className={getInvolved.supportersFlex}>
          <div>
            <div className={getInvolved.supportersTop}>
              <img src={give} alt="" />
              <h3>Individual Donors</h3>
              <p>
                When you donate, you're not just giving money — you're investing in lives and futures. Your support helps provide essential services, education, and opportunities to those who need them most. Every contribution, whether large or small, is a step towards a better tomorrow. We are deeply grateful for your commitment to making a lasting difference.
              </p>
            </div>
            <div className={getInvolved.supportersBottom}>
              <Link to='/Donate'>Give A Donation</Link>
            </div>
          </div>

          <div>
            <div className={getInvolved.supportersTop}>
              <img src={volunteer} alt="" />
              <h3> Volunteers</h3>
              <p>
                Every message shared, every event attended, and every piece of support matters. As a supporter, you are an integral part of our mission to uplift communities and create lasting change. Your passion and dedication inspire us every day, and together, we amplify our efforts to build a better future for all.
              </p>
            </div>
            <div className={getInvolved.supportersBottom}>
              <Link to='/Contact'>Join Our Team</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={getInvolved.becomeInvolved}>
        <img src={ceo} alt="" />
        <h2>Become A Partner Or Supporter</h2>
        <p>
          Join us in our mission to alleviate poverty in our
          community. Contact us to explore partnership
          opportunities or make a donation.
        </p>
        <Link to='/Contact'>Contact Us</Link>
      </div>
      <Footer />
    </>
  )
}

export default GetInvolved
