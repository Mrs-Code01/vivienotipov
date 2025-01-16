import React, { useState } from 'react'
import BlogData from '../data/BlogData.json'
import blogStyle from '../css/blog.module.css'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'



const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const getFormattedDate = () => {
    const currentDate = new Date()
    return currentDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  }

  const updatedData = BlogData.map((item) => ({
    ...item, date: getFormattedDate()
  }))

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentData = updatedData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(updatedData.length / itemsPerPage);




  return (
    <>
      <div className={blogStyle.itemsContainer}>
        {currentData.map((item, index) => (
          <div key={index} style={{
            backgroundColor: "white",
            borderRadius: "6px",
            padding: "10px"
          }}>
            <div className={blogStyle.blogInnerContainer}>
              <img src={item.image} alt="" />
              <div className={blogStyle.info}>
                <p>{item.date}</p>
                <div className={blogStyle.dateLine}></div>
                <p>{item.narrator}</p>
              </div>
            </div>
            <Link to={item.link}>{item.title}</Link>
          </div>
        ))}
      </div >

      <div className={blogStyle.btnContainer}>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          &lt;
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>&gt;</button>
      </div>
      <Footer />
    </>
  )
}

export default Blog
