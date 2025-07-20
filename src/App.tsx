import './App.css'
import Photo from "./assets/profile_photo.jpeg"


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
          <div className="Box-content">

            <div className="title">
              <p id="bold"> Universität Zürich - Bsc Informatics </p>
              <p id="date">4th Semester (2023-present)</p>
            </div>
            
            <p>
            I’m currently studying Informatics at the University of Zurich, with a focus on sofware systems and statistics
            </p>
            <p>
            Software engineering • Software construction • STA 120 • Introduction to Data Science • Numerical methods • Focundations of computing I & II
            </p>
          </div>
        </div>

        <div className='Box' id="Experience">
          <h3>Experience</h3>
        <div className="Box-content">
          <div className="title">
            <p id="bold"> Full stack developer intern, In-Finitude </p>
            <p id="date">Summer 2025 - 3 months</p>
          </div>
            <p>
            I’ve worked on open issues, refactoring and planning tasks for Pollenn, a map-based web application focused on biodiversity.
            </p>
            <p>React js • Mongo DB • Nest JS • issue tracking</p>
        </div>
          <div className="Box-content" id="box-border">
            <div className="title">
              <p id="bold"> Full Stack Developer - IT Flow </p>
              <p id="date">2023-present</p>
            </div>
            <p>
              I’ve worked on open tickets for a management platform of building sites and developed a pdf-generation API for invoices.
            </p>
            <p>Next JS • Prisma • API development</p>
          </div>
          <div className="Box-content" id="box-border">

            <div className="title">
              <p id="bold"> Math I & II Tutor - Universität Zürich </p>
              <p id="date">2024 - present</p>
            </div>
            <p>
              I’ve supported students of the Math I course in the faculty of Business administration and informatics teaching lecture concepts and reviewing exercises together with them. Groups of 30-50 students, in German.
            </p>
            <p>tutoring & complex topic explanation</p>
          </div>
          <div className="Box-content" id="box-border">
            <div className="title">
              <p id="bold"> Summer camp tutor - Little Scientists, Zürich </p>
              <p id="date">Summer 2024</p>
            </div>
            <p>
            I am part of the tutors team of Little Scientists Switzerland, supporting the educational activities for girls and boys in the field of programming and science. I've worked in 2 summer camps offered by the association in the center of Zurich.
            </p>
          </div>
        </div>

        <div className='Box' id="Skills">
          <h3>Skills</h3>
          <div className="Box-content">
            <p>Full Stack web development with focus on Front end • Python for scripting and data science
            • basics in R, Java and C.</p>

            <p>Italian (mother tongue) - English (C2) - French (C2) - German (B2)</p>
          </div>
        </div>

        <div className='Box' id="Links">
          <h3>Links</h3>
          <div className="links-container">
            <a href="https://www.linkedin.com/in/lucio-canepa-7352b8234/" target="_blank">🔗 LinkedIn</a>
            <a href="https://github.com/luciocanepa" target="_blank">👨‍💻 GitHub</a>
            <a href="https://drive.google.com/file/d/1MDuE8pUhEMmZtLFnn78euRh-JQFhW6J7/view?usp=sharing" target="_blank">📄 View my CV</a>
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
