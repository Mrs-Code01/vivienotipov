import React from 'react'
import ourTeamStyle from '../css/ourteam.module.css'
import { Link } from 'react-router-dom'
import team1 from "../assets/images/DSC_6897.jpg"
import team2 from "../assets/images/DSC_8900.jpg"
import team3 from "../assets/images/DSC_8969.jpg"
import Footer from '../components/Footer'

const OurTeam = () => {
  return (
    <>
      <header className={ourTeamStyle.header}>
      </header>
      <div className={ourTeamStyle.topContent}>
        <div>
          <h2> Our Humble Beginnings</h2>
          <div className={ourTeamStyle.line}></div>
          <p>
            Founded on 2nd day of December 2024, Vivien Oti
            Poverty Relief Initiative was born out of a divine vision
            to care for the poor and vulnerable. Our founder, Miss
            Vivien Oti Obodoruku, was inspired by Almighty God to
            establish this organization and make a meaningful
            difference in the lives of those in need.
          </p>
        </div>
        <div>
          <h2>Meet Our Team</h2>
          <div className={ourTeamStyle.line}></div>
          <p>
            We are a small but dedicated team of three staff
            members, passionate about eradicating poverty and
            promoting sustainable development. Our team is
            supported by a board of four trustees who provide
            guidance and oversight to our organization.
          </p>
        </div>
      </div>

      <div className={ourTeamStyle.team}>
        <div className={ourTeamStyle.team1}>
          <img src={team1} alt="" />
          <div className={ourTeamStyle.teamContent}>
            <h3>Vivien Oti Obodoruku</h3>
            <h4>CEO/Founder</h4>
            <p>
              As the CEO/Founder of The Vivien Oti Poverty Relief
              Initiative, I bring a unique blend of experience in early
              childhood education, criminology, and security studies.
              With a strong passion for creating safe and supportive
              environments, I am committed to empowering
              communities to...<Link to='/About/OurStory'>See More</Link>
            </p>
          </div>
        </div>

        <div className={ourTeamStyle.team2}>
          <img src={team2} alt="" />
          <div className={ourTeamStyle.teamContent}>
            <h3>Mrs Ofogba Elohor</h3>
            <h4>General Purchase officer</h4>
            <p>
              University of Benin, Benin City Edo State Nigeria<br></br>
              <strong>Msc:</strong> Environmental Quality Management
              Delta State University Abraka<br></br>
              <strong>Bsc:</strong> (Laboratory Science (Biotect))
            </p>
            <div>
              <h3>SKILLS ACQUIRED</h3>
              <p>
                Blood collection and handling<br></br>
                Malaria Parasite<br></br>
                Student Christian Movement<br></br>
                Central Sterilization Service
              </p>
            </div>
            <div>
              <h3>WORKING EXPERIENCE</h3>
              <p>
                Delta State University Teaching Hospital, Oghara
                Delta State ( Till Present)<br></br>
                <strong>Nationality:</strong> Nigerian
              </p>
            </div>
          </div>
        </div>

        <div className={ourTeamStyle.team3}>
          <img src={team3} alt="" />
          <div className={ourTeamStyle.teamContent}>
            <h3>Etahwokori Onokurhefe</h3>
            <h4>In-charge of Accounting Dealings</h4>
            <div>
              <h3>SKILLS ACQUIRED</h3>
              <p>
                Christ Apostolic Church Oke-Anu Sapele Delta
                State Nigeria<br></br>
                <strong>(Till Present)</strong><br></br>
                <strong>Nationality: </strong>Nigerian
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OurTeam
