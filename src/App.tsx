import './App.css'
import Photo from "./assets/profile_photo.jpeg"
import { Linkedin, Github } from 'lucide-react'


function App() {
  return(
    <>
      <div className='home-page'>

        <div className='picture-name'>
          <img src={Photo} alt="Lucio Canepa" />
          <h1>Lucio Canepa</h1>
        </div>

      <div className='boxes-container'>

        <div className='Box' id="Education">
        <h3>Education</h3>
          <span>
            <p id="bold"> Universität Zürich - Bsc Informatics </p>
            <p>3rd Semester (2023-present)</p>
          </span>
        </div>

        <div className='Box' id="Experience">
        <h3>Experience</h3>
          <span>
            <p id="bold"> Full Stack Developer - IT Flow </p>
            <p>
              I’ve worked on open tickets for a management platform of building sites and developed a pdf-generation API for invoices. (2023-present)
            </p>
          </span>
          <span>
            <p id="bold"> Math I Tutor - Universität Zürich </p>
            <p>
              I’ve supported students of the Math I course in the faculty of Business administration and informatics teaching lecture concepts and reviewing exercises together with them. Groups of 30-50 students, in German. (FS24)
            </p>
          </span>
          <span>
            <p id="bold"> Summer camp tutor - Little Scientists, Zürich </p>
            <p>
            I am part of the tutors team of Little Scientists Switzerland, supporting the educational activities for girls and boys in the field of programming and science. I've worked in 2 summer camps offered by the association in the center of Zurich. (Summer 2024)
            </p>
          </span>
        </div>

        <div className='Box' id="Skills">
          <h3>Skills</h3>
          <p className="Skills-first-p">Proficient in Python, web technologies (especially React, nodeJS). Basics in C, C++ and Java</p>

          <p>Italian (mother tongue) - French (C2) - English (B2) - German (B2)</p>
        </div>

        <div className='Box' id="Links">
          <h3>Links</h3>
          <div>
            <Linkedin color="white" />
            <a href="https://www.linkedin.com/in/lucio-canepa-7352b8234/" target="_blank">LinkedIn</a>
          </div>

          <div>
            <Github color="white"/>
            <a href="https://github.com/lucio_canepa06" target="_blank">GitHub</a>
          </div>
        </div>

        <div className="Box copy">
          <p>&copy; 2025</p>  
        </div>
      </div>

      </div>
    </>
  )
}

export default App
