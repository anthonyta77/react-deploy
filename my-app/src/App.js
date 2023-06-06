import './App.css';
import ComponentCvList from './CV_component_list';
import ComponentArticleList from './ARTICLE_component_list'
import ComponentEducationList from './EDUCATION_component_list'

import React from 'react';
import { useRef } from 'react';

function App() {


  
    const aboutRef=useRef();
    const experienceRef=useRef();
    const projectsRef=useRef();
    const mediaRef=useRef();
    const educationRef=useRef();

   
   

  return (
    <div className='body'>
    <main>
      <div className='left'>
      <nav className='navigation'>
        <section className='navigation-profil'> 
        <a className='home-link' href="/">
          <h1 className='name'> Anthony Ta </h1>
        </a>
          <h2 className='role'> Water Engineer at Eau de Paris<br></br> Retraining as a Developer </h2>
          <h3 className='me'> I build accessible, inclusive and stylish products for the Web during my free time when i'm not under water</h3>
        </section>
        <section className='navigation-list'> 
          <ul className='nav-list'>
            <li> <button onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth", block: "center" })} className='nav-about'><hr className="hr-nav"></hr> ABOUT </button> </li>
            <li> <button onClick={() => experienceRef.current.scrollIntoView({behavior: "smooth", block: "center" })} className='nav-experience' ><hr className="hr-nav"></hr> EXPERIENCE </button>  </li>
            <li> <button onClick={() => projectsRef.current.scrollIntoView({behavior: "smooth", block: "center" })} className='nav-projects' ><hr className="hr-nav"></hr> PROJECTS </button>  </li> 
            <li> <button onClick={() => educationRef.current.scrollIntoView({behavior: "smooth", block: "start" })} className='nav-education'><hr className="hr-nav"></hr> EDUCATION </button> </li>
            <li> <button onClick={() => mediaRef.current.scrollIntoView({behavior: "smooth", block: "center" })} className='nav-media' ><hr className="hr-nav"></hr> MEDIA </button>  </li> 
          </ul>
        </section>
      </nav>

      <footer className='footer'>
        
        
        <ul className='logo-list'>
          <li>
          <a className = 'a-github logo' href="https://github.com/">
            <img className='logo-git'
                src="./img/github.svg"
                alt="Github"
                height="35"
                width="35"/> 
          </a>
          </li>
          <li>
          <a className = 'a-insta logo' href="https://instagram.com/antta77">
            <img className='logo-insta'
                src="./img/insta.svg"
                alt="Instagram"
                height="35"
                width="35"/> 
          </a>
          </li>
          <li>
          <a className = 'a-linkdin logo' href="https://fr.linkedin.com/in/anthony-ta">
            <img className='logo-linkedin'
                src="./img/linkedin.svg"
                alt="Linkedin"
                height="35"
                width="35"
                /> 
          </a>
          </li>
        </ul>
      </footer>
      </div>
      <div className='right'>
      <div className='profil-cv'>
        <div ref={aboutRef}  className='profil-desc'>
          <p className='profil-desc-past'>
            In 2014, i've decided to join a boarding school for 2 years to prepare a national exam which enable, depending on your ranking, to be eligible to renowned engineering schools.
            At that time i've decided not to pursue any kind of code courses because i was last at each coding exam class...
            
          </p>
          <p className='profil-desc-now'>
            Today, i'm a full time water engineer working on coding when i'm not under water
            I'm a passionate self learner and i have no limits in learning
          </p>
          <p className='profil-desc-extra'>
            When I'm not at the computer, I'm usually at the gym,
            chatting with my long distance girlfriend,
            hanging out with my friends and family, 
            or shooting at some ennemies in Valorant. Oh... and i love trading cryptocurrencies.
          </p>
        </div>
        
        <div ref={experienceRef}  className='profil-experience' id='nav-experience-id'>
          <ComponentCvList />
        </div>
        <a className='resume' href="/#">View Full Résumé </a>

        <div ref={projectsRef}   className='profil-project'>
          

        </div>
        <div ref={educationRef}   className='profil-education'>
        <ComponentEducationList />

        </div>
        <div ref={mediaRef}  className='profil-media'>
            <ComponentArticleList />

        </div>
        <footer className='web-desc'>
          Loosely designed  and coded in Visual Studio Code by yours truly. 
          Built with React, deployed with Vercel. All text is set in the Inter typeface.
        </footer>
      </div>  
      </div>


    </main>
    </div>
  );
}

export default App;
