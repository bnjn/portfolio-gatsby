import * as React from "react";
import Intro from "../components/intro";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import DownArrow from "../components/atom/downarrow";
import Footer from "../components/atom/footer";

const IndexPage = () => {

    function handleIntro() {
        document.querySelector('.intro-typical').style.display = 'none';
        showPage();
    }

    function showPage() {
        document.querySelectorAll('.start-hidden').forEach((element) => {
            element.style.display = 'flex';
        });
    }

  return (
      <div>
          <Intro className='section'
           handleIntro={handleIntro}/>
          <div className="arrow-container">
            <DownArrow />
          </div>
          <Projects className='section' />
          <About className='section' />
          <Contact className='section'/>
          <Footer />
      </div>
  )
}

export default IndexPage
