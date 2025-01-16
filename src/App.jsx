import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import NewsAndBlog from './pages/NewsAndBlog'
import GetInvolved from './pages/GetInvolved'
import RootLayout from './layout/RootLayout'
import Multimedia from './pages/Multimedia'
import AboutUsLayout from './layout/AboutUsLayout'
import OurStory from './pages/OurStory'
import OurTeam from './pages/OurTeam'
import About from './pages/About'
import Donate from './pages/Donate'
import Blog from './pages/Blog'
import News from './pages/News'
import NewsAndBlogLayout from './layout/NewsAndBlogLayout'
import Blog1 from './pages/Blog/Blog1'
import BlogLayout from './layout/BlogLayout'
import Contact from './pages/Contact'
import NewsLayout from './layout/NewsLayout'
import News1 from './pages/News/News1'
import Goals from './pages/Goals'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='About' element={<AboutUsLayout />} >
          <Route path='AboutUs' element={<About />} />
          <Route path='OurStory' element={<OurStory />} />
          <Route path='OurTeam' element={<OurTeam />} />
        </Route>
        <Route path='NewsAndBlog' element={<NewsAndBlogLayout />} >
          <Route path='OurBlog' element={<Blog />} />
          <Route path='NewsArchive' element={<News />} />
          <Route path='OurBlog' element={<BlogLayout />} >
            <Route path='Blog1' element={<Blog1 />} />
          </Route>
          <Route path='NewsArchive' element={<NewsLayout />}>
            <Route path='News1' element={<News1 />} />
          </Route>
        </Route>
        <Route path='Multimedia' element={<Multimedia />} />
        <Route path='GetInvolved' element={<GetInvolved />} />
        <Route path='Donate' element={<Donate />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Goals' element={<Goals />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App
