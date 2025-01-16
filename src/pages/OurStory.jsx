import React from 'react'
import ourStoryStyle from '../css/ourstory.module.css'
import ceo from "../assets/images/ceo.jpg"
import Footer from '../components/Footer'

const OurStory = () => {
  return (
    <>
      <header className={ourStoryStyle.header}>
        <h1>HOW IT ALL STARTED...</h1>
      </header>
      <div className={ourStoryStyle.ceo}>
        <img src={ceo} alt="" />
        <div className={ourStoryStyle.ceoContent}>
          <h4>CEO/FOUNDER</h4>
          <h2>Miss Vivien Oti Obodoruku</h2>
          <p>
            As the CEO/Founder of The Vivien Oti Poverty Relief
            Initiative, I bring a unique blend of experience in early
            childhood education, criminology, and security studies.With a strong passion for creating safe and supportive environments, I am committed to empowering
            communities to break the cycle of poverty.
          </p>
        </div>
      </div>
      <div className={ourStoryStyle.education}>
        <h2>Education & Certifications</h2>
        <div className={ourStoryStyle.line}></div>
        <ul>
          <li>
            Our Lady`s Nursing School Sapele Delta State, Nigeria
          </li>
          <li>
            Palmer Primary School Sapele Delta State, Nigeria
          </li>
          <li>
            ST. Theresa`s Girls Grammar School Ughelli Delta State, Nigeria
          </li>
          <li>
            Nigeria Certificate in Education, Nigeria
          </li>
          <li>
            Post Graduate Diploma in Early Childhood and Care Education, Canada
          </li>
          <li>
            Post Graduate Diploma in TEFL/TESOL, Canada
          </li>
          <li>
            Certificate in Educational Administration and
            Management, Canada
          </li>
          <li>
            Criminology and Security Studies, National Open
            University of Nigeria
          </li>
          <li>
            Basic Certificate of Discipleship and Training Course
            (DLTC) Nigeria
          </li>
          <li>
            License: Teachers Registration Council of Nigeria
            (TRCN), Registration number: CT/R/21658<br></br>
            Date: September 29,2022 -September29, 2025
          </li>
        </ul>
      </div>
      <div className={ourStoryStyle.intRecog}>
        <h3>International Qualification Recognition</h3>
        <h2>
          UK ENIC Comparable Qualifications: Reference Number 4001710577
        </h2>
        <p>
          Early Childhood Teacher, Crowther Primary School Sapele Delta State Nigeria (2021 – Present)
        </p>
      </div>
      <div className={ourStoryStyle.recog}>
        <h2>
          Awards & Recognition
        </h2>
        <p>
          Committed Staff and Selfless Contribution to Teaching Award.
          <br></br><i>Presented by Sapele Local Education Authority Delta
            State Nigeria. (February 15, 2022)</i>
        </p>
      </div>
      <div className={ourStoryStyle.skills}>
        <h2>Skills & Expertise</h2>
        <div className={ourStoryStyle.line}></div>
        <ul>
          <li>
            <strong>Program Management:</strong> Proven experience in
            managing programs and projects, with a focus on early childhood education and poverty relief.
          </li>
          <li>
            <strong>Community Development:</strong> Skilled in community
            development, with experience in working with local
            communities to identify needs and develop solutions.
          </li>
          <li>
            <strong>Child Safety and Wellbeing:</strong> Expertise in creating safe and supportive learning environments, with a focus on child safety and wellbeing.
          </li>
          <li>
            <strong>Criminology and Security Studies:</strong> Knowledge of
            criminology and security studies, with experience in risk assessment and mitigation.
          </li>
          <li>
            <strong>Leadership and Teamwork:</strong> Proven leadership and teamwork skills, with experience in working with
            diverse stakeholders to achieve common goals.
          </li>
          <li>
            <strong>Fundraising and Resource Mobilization:</strong> Skilled in
            fundraising and resource mobilization, with experience in securing funding and resources for programs and
            projects.
          </li>
          <li>
            <strong>Monitoring and Evaluation:</strong> Expertise in monitoring and evaluation, with experience in designing and
            implementing M&E frameworks to track program
            impact.
          </li>
        </ul>
      </div>

      <div className={ourStoryStyle.experience}>
        <h2>Expertise</h2>
        <div className={ourStoryStyle.line}></div>
        <ul>
          <li>
            CEO/Founder, Vivien Oti Poverty Relief Initiative (2 day of December, 2024)
          </li>
          <ul>
            <li>Provide strategic leadership and direction to the organization.
            </li>
            <li>Develop and implement programs and projects to address poverty and promote early childhood education.
            </li>
            <li> Build partnerships with local communities,
              organizations, and stakeholders to support program goals.
            </li>
          </ul>
          <li>
            Early Childhood Teacher, Crowther Primary School (June 21, 2021 - Present)
          </li>
          <ul>
            <li>Teach early childhood education classes to students.
            </li>
            <li>
              Develop and implement lesson plans to promote student learning and development.
            </li>
            <li> Collaborate with colleagues to promote child safety
              and wellbeing
            </li>
          </ul>
          <li>
            Nigeria Red Cross Volunteer
          </li>
          <ul>
            <li>Participated in disaster response efforts.
            </li>
            <li>
              Assisted in organizing blood donation drives
            </li>
            <li> Supported health education and promotion
              activities
            </li>
          </ul>
        </ul>
      </div>

      <div className={ourStoryStyle.publication}>
        <h2>
          Publications
        </h2>
        <p>
          "Creating Safe Learning Environments in Early
          Childhood Education"
        </p>
      </div>
      <Footer />
    </>
  )
}

export default OurStory
