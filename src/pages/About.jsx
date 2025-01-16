import React from 'react'
import viv7 from "../assets/images/viv7.jpg"
import viv1 from "../assets/images/viv1.jpg"
import viv3 from "../assets/images/viv3.jpg"
import viv5 from "../assets/images/viv5.jpg"
import certificate from "../assets/documents/certificate.pdf"
import certificateImg from "../assets/images/certificate.jpg"
import crowther from "../assets/documents/crowther.pdf"
import crowtherImg from "../assets/images/crowther.jpg"
import aboutStyle from '../css/about.module.css'
import { Link } from 'react-router-dom'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <header className={aboutStyle.header}>
        <h1>ABOUT US</h1>
        <p>
          The Vivien Oti Poverty Relief Initiative is a newly
          established non-governmental organization (NGO)
          registered with the Corporate Affairs Commission (CAC)of Nigeria. Our registration number : 8115188
        </p>
      </header>
      <div className={aboutStyle.vision}>
        <img src={viv7} alt="" />
        <div>
          <h2>Vision Statement</h2>
          <div className={aboutStyle.line}></div>
          <p>
            Empowering communities to break the cycle of
            Poverty. The Vivien Oti Poverty Relief Initiative
            envisions a world where every individual has access to
            resources, opportunities, and support to thrive with
            dignity and hope.
          </p>
        </div>
      </div>
      <div className={aboutStyle.mission}>
        <div>
          <h2>Mission Statement</h2>
          <div className={aboutStyle.line}></div>
          <p>
            The Vivien Oti Poverty Relief Initiative, our mission is
            to provide sustainable solutions, support, and
            opportunities for growth to individuals and
            communities affected by poverty. We strive to
            empower lives, foster resilience, and promote
            economic independence, ultimately creating a brighter
            future for all."
          </p>
        </div>
        <img src={viv1} alt="" />
      </div>
      <ul className={aboutStyle.aims}>
        <h2>Aims And Objectives</h2>
        <div className={aboutStyle.line}></div>
        <li>To alleviate poverty and its effects on
          individuals, families, and communities
        </li>
        <li>To promote sustainable livelihoods, food
          Security, and access to healthcare.
        </li>
        <li>To provide education, training, and economic
          empowerment programs for disadvantaged
          Groups.
        </li>
        <li>To support vulnerable populations, including
          Women, children, and the elderly.
        </li>
        <li>To foster community development, social
          cohesion, and civic engagement.
        </li>
        <li>To collaborate with stakeholders,
          organizations, and governments to address
          Poverty.
        </li>
        <li>To provide disaster relief, humanitarian aid,
          and emergency assistance.
        </li>
        <li>To prevent and combat human trafficking
          through advocacy, education, and community
          engagement
        </li>
        <li>Increase literacy rates among rural children
          within 2 years.
        </li>
        <li>
          To facilitate reintegration into society
          through family reunification or independent.
        </li>
      </ul>
      <div className={aboutStyle.focusAreasContainer}>
        <div className={aboutStyle.focusAreasTop}>
          <h2>Our Focus Areas</h2>
          <div className={aboutStyle.line}></div>
          <p>
            We are currently focusing on the following areas
          </p>
        </div>
        <div className={aboutStyle.focusAreas}>
          <div className={aboutStyle.food}>
            <img src={viv1} alt="" />
            <h3>Food Security</h3>
            <p>
              We aim to provide food assistance to
              vulnerable communities, promoting nutrition and
              well-being.
            </p>
          </div>
          <div className={aboutStyle.education}>
            <img src={viv3} alt="" />
            <h3>Education and Skills Development</h3>
            <p>
              We plan to offer
              educational programs and skills training to empower
              individuals and communities to break the cycle of
              poverty.
            </p>
          </div>
          <div className={aboutStyle.health}>
            <img src={viv7} alt="" />
            <h3>Health and Wellness</h3>
            <p>
              We intend to provide access to
              healthcare services, promoting health and wellness
              among marginalized communities
            </p>
          </div>
          <div className={aboutStyle.economic}>
            <img src={viv5} alt="" />
            <h3>Economic Empowerment</h3>
            <p>
              We aim to support
              entrepreneurship and economic development
              initiatives, helping individuals and communities to
              achieve financial stability
            </p>
          </div>
        </div>
      </div>
      <div className={aboutStyle.goals}>
        <h2>Our Goals</h2>
        <Link to='/Goals'>View All</Link>
      </div>
      <div className={aboutStyle.documentContainer}>
        <div className={aboutStyle.documentContainerTop}>
          <h2>NGO Documents</h2>
          <div className={aboutStyle.line}></div>
        </div>
        <div className={aboutStyle.documents}>
          <a href={certificate} download={certificate.pdf}>
            <img src={certificateImg} alt="" />
          </a>
          <a href={crowther} download={crowther.pdf}>
            <img src={crowtherImg} alt="" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
