import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import viv1 from "../assets/images/viv1.jpg"
import viv2 from "../assets/images/viv2.jpg"
import viv3 from "../assets/images/viv3.jpg"
import viv9 from "../assets/images/viv9.jpg"
import n28 from "../assets/images/28.jpg"
import homeStyle from '../css/home.module.css'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'



const Home = () => {
  const images = [viv1, viv2, viv3]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [images.length])

  const bgStyle = {
    backgroundImage: `linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    transition: "background-image 3s ease-in-out"
  }

  return (
    <>
      <div className='bg-image' style={bgStyle}>
        <div className={homeStyle.headerContent}>
          <p>VIVIEN OTI POVERTY RELIEF INITIATIVE</p>
          <h1>BREAKING THE CYCLE OF POVERTY</h1>
          <div className={homeStyle.headerContentLinks}>
            <Link to='/About/AboutUs'>Learn More</Link>
            <Link to='/Donate'>Donate</Link>
          </div>
        </div>
      </div>
      <div className={homeStyle.visionStatementContainer}>
        <img src={viv1} alt="" />
        <div className={homeStyle.visionStatementText}>
          <h2>WELCOME TO VIVIEN OTI POVERTY RELIEF INITIATIVE</h2>
          <div className='line'></div>
          <p>
            Empowering communities to break the cycle of
            Poverty. The Vivien Oti Poverty Relief Initiative
            envisions a world where every individual has access to
            resources, opportunities, and support to thrive with
            dignity and hope.
          </p>
        </div>
        <div className={homeStyle.mission}>
          <h3>OUR MISSION</h3>
          <p>
            The Vivien Oti Poverty Relief Initiative, our mission is
            to provide sustainable solutions, support, and
            opportunities for growth to individuals and
            communities affected by poverty. We strive to
            empower lives, foster resilience, and promote
            economic independence, ultimately creating a brighter
            future for all.
          </p>
        </div>
      </div>
      <div className={homeStyle.articlesContainer}>
        <div>
          <img src={n28} alt="" />
          <h3>Lorem ipsum dolor sit </h3>
          <div className={homeStyle.line}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus dicta maiores porro? Veniam corporis libero quis corrupti aspernatur quod, esse facere psum dolor sit amet consectetur adipisicing elit. Quos necessitatibus dicta maiores porro? Veniam corporis libero quis corrupti aspernatur quod, esse fa spernatur quod, esse facere psum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
        <div>
          <img src={viv9} alt="" />
          <h3>Lorem ipsum dolor sit </h3>
          <div className={homeStyle.line}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus dicta iam corporis libero quis corrupti aspernatur quod, esse facere res porro? Veniam corporis libero quis corrupti aspernat  dolor sit amet consectetur adipisicing elit. Quos necessitatibus dicta iam corporis libero quis corrupti aspernatur quod, esse facere res porro? Veniam corporis libero quis cor  amet consectetur adipisicing elit. Quos necessitatibus dicta iam corporis libero quis corrupti aspernatur quod, esse fa...
          </p>
        </div>
      </div>
      <hr className={homeStyle.hr} />
      <div className={homeStyle.goals}>
        <h2>Sustainable Goals</h2>
        <div className={homeStyle.line}></div>
        <p>
          At Vivien Oti Poverty Relief Initiative, we are committed to reducing poverty and improving living standards for disadvantaged communities.
        </p>
        <Link to='/Goals'>View</Link>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home

