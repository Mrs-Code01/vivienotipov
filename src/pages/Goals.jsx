import React from 'react'
import { Link } from 'react-router-dom'
import goalStyle from '../css/goals.module.css'
import ceo from "../assets/images/ceo.jpg"
import Footer from '../components/Footer'

const Goals = () => {
  return (
    <>
      <header className={goalStyle.header}></header>
      <div className={goalStyle.mainContainer}>
        <div className={goalStyle.topContent}>
          <img src={ceo} alt="" />
          <div>
            <span>STRATEGY</span>
            <h2>29 Goals To Transform The World</h2>
          </div>
        </div>
        <div className={goalStyle.listedGoals}>
          <div>
            <h2>United Nations' Sustainable Development Goals (SDGs). We Support:
            </h2>
            <ul>
              <li>
                <Link to=''>No Poverty (SDG 1):</Link> End poverty in all its forms everywhere.
              </li>
              <li>
                <Link to=''>Quality Education (SDG 4):</Link> Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
              </li>
              <li>
                <Link>Good Health and Well-being (SDG 3):</Link> Ensure healthy lives and promote well-being for all at all ages.
              </li>
              <li>
                <Link>Decent Work and Economic Growth (SDG 8):</Link> Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.
              </li>
              <li>
                <Link>Climate Action (SDG 13):</Link> Take urgent action to combat climate change and its impacts.
              </li>
            </ul>
          </div>
          <div>
            <h2>World Bank Goals. We Support: </h2>
            <ul>
              <li>
                <Link>End Extreme Poverty:</Link> Reduce the percentage of people living in extreme poverty to 3% by 2030.
              </li>
              <li>
                <Link>Promote Shared Prosperity:</Link> Increase the incomes of the poorest 40% of the population in each country.
              </li>
              <li>
                <Link>Reduce Inequality:</Link> Reduce inequality of opportunity and promote social mobility.
              </li>
            </ul>
          </div>
          <div>
            <h2>Infrastructure and Economic Development
            </h2>
            <ul>
              <li>
                <Link>Infrastructure Development:</Link> Develop and improve infrastructure in disadvantaged communities to enhance living standards and promote sustainable development.
              </li>
              <li>
                <Link>Innovative Solutions:</Link> Develop and implement innovative solutions to address poverty and promote sustainable development in disadvantaged communities.
              </li>
              <li>
                <Link>Economic Empowerment:</Link> Provide training, resources, and support to disadvantaged individuals and communities to promote sustainable livelihoods and economic empowerment.
              </li>
            </ul>
          </div>
          <div>
            <h2>Poverty Reduction and Human Development
            </h2>
            <ul>
              <li>
                <Link>Poverty Reduction:</Link> Support initiatives that aim to reduce poverty and improve living standards for disadvantaged communities.
              </li>
              <li>
                <Link>Education and Skills Development:</Link> Provide access to quality education and skills training to enhance employability and economic opportunities.
              </li>
              <li>
                <Link>Health and Nutrition:</Link> Improve access to healthcare services, nutrition programs, and health education to promote healthy lives.
              </li>
            </ul>
          </div>
          <div>
            <h2>Resilience and Good Governance
            </h2>
            <ul>
              <li>
                <Link>Disaster Risk Reduction and Management:</Link> Support communities in disaster risk reduction and management, promoting resilience and adaptive capacity.
              </li>
              <li>
                <Link>Transparency and Accountability:</Link> Foster transparency, accountability, and good governance in all our programs and operations.
              </li>
              <li>
                <Link>Partnerships and Collaborations:</Link> Collaborate with governments, civil society, private sector, and other stakeholders to leverage resources, expertise, and knowledge.
              </li>
            </ul>
          </div>
          <div>
            <h2>Education and Skills Development
            </h2>
            <ul>
              <li>
                <Link>Digital Literacy:</Link> Provide access to digital literacy training and resources to bridge the technology gap.
              </li>
              <li>
                <Link>Vocational Training:</Link> Offer vocational training programs to equip individuals with marketable skills.
              </li>
              <li>
                <Link>Education Scholarships:</Link> Provide scholarships to deserving students to pursue higher education.
              </li>
            </ul>
          </div>
          <div>
            <h2>Healthcare and Wellness
            </h2>
            <ul>
              <li>
                <Link>Healthcare Access:</Link> Improve access to quality healthcare services, especially for marginalized communities.
              </li>
              <li>
                <Link>Mental Health Support:</Link> Offer mental health support and resources to promote emotional well-being.
              </li>
              <li>
                <Link>Nutrition and Wellness:</Link> Promote healthy nutrition and wellness practices through education and community programs.
              </li>
            </ul>
          </div>
          <div>
            <h2>Environmental Sustainability
            </h2>
            <ul>
              <li>
                <Link>Renewable Energy:</Link> Promote the adoption of renewable energy sources to reduce carbon footprint.
              </li>
              <li>
                <Link>Sustainable Practices:</Link> Educate and encourage communities to adopt sustainable practices and reduce waste.
              </li>
              <li>
                <Link>Environmental Conservation:</Link> Support environmental conservation efforts to protect natural habitats and ecosystems.
              </li>
            </ul>
          </div>
          <div>
            <h2>Community Development
            </h2>
            <ul>
              <li>
                <Link>Community Engagement:</Link> Foster community engagement and participation in development initiatives.
              </li>
              <li>
                <Link>Social Entrepreneurship:</Link> Support social entrepreneurship initiatives that address community needs.
              </li>
              <li>
                <Link>Disaster Relief:</Link> Provide disaster relief and support to affected communities.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Goals
