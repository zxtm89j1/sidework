import React from 'react';
import Tooltip from '@mui/material/Tooltip'
import profile_logo from '../images/Aboutus/ProfileLogo.svg';
import github_logo from '../images/Aboutus/GithubLogo.svg';
import gmail_logo from '../images/Aboutus/GmailLogo.svg';
import linkedin_logo from '../images/Aboutus/LinkedinLogo.svg';
import TJ from '../images/Aboutus/TJGimenez.png';
import '../styles/Aboutus.css';
import spencer from '../images/Aboutus/spencer.jpg';

const AboutUs = () => {
  return (
    <div className='Aboutus' >
        <h1 className='sidewordtext' >sideWork</h1>
        <p className='aboutustext' >More About Us!</p>

    {/* Profile */}
    <div className='profilecard'>
    {/* Profile 1 */}
    <div className='profileCards'>
      <div className='profile'> <img className='profileimg' src="https://image.kpopmap.com/2019/01/VERIVERY-Faceus-member-profile-YongSeung.jpg"  alt="" /> </div>
      <div className='name'>Niño Ancheta</div>
      <div className='description'>A full stack developer always eager to learn!</div>
      <div className='links'>
        <div className='Profilelogo'> <a href="https://github.com/Anchetanino" target="_blank" rel="noopener noreferrer">  
          <Tooltip title="Portfolio">
             <button> <img src={profile_logo} alt="Profile logo"/> </button>
          </Tooltip> </a>  </div>
        <div className='Githublogo'><a href="https://github.com/Anchetanino" target="_blank" rel="noopener noreferrer">
          <Tooltip title="Github">
            <button> <img src={github_logo} alt="Github logo"/> </button>
          </Tooltip> </a> </div>
        <div className='Gmaillogo'><a href="mailto:" target="_blank" rel="noopener noreferrer"> 
          <Tooltip title="Email">
            <button> <img src={gmail_logo} alt="Gmail logo"/> </button>
          </Tooltip> </a> </div>
        <div className='LinkedInlogo'><a href="https://github.com/Anchetanino" target="_blank" rel="noopener noreferrer">
          <Tooltip title="LinkedIn"> 
            <button> <img src={linkedin_logo} alt="Linkedin logo"/> </button>
          </Tooltip>  </a></div>
     </div> 
    </div>

    {/* Profile 2 */}
    <div className='profileCards'>
      <div className='profile'> <img className='profileimg' src={spencer}  alt="" /> </div>
      <div className='name'>Spencer Bohol</div>
      <div className='description'>I’m saying "YES" to new adventures!</div>

      <div className='links'>
        <div className='Profilelogo'> <a href="https://zxtm89j1.github.io/portfolio/" target="_blank" rel="noopener noreferrer">  
          <Tooltip title="Portfolio">
             <button> <img src={profile_logo} alt="Profile logo"/> </button>
          </Tooltip> </a>  </div>
        <div className='Githublogo'><a href="https://github.com/zxtm89j1" target="_blank" rel="noopener noreferrer">
          <Tooltip title="Github">
            <button> <img src={github_logo} alt="Github logo"/> </button>
          </Tooltip> </a> </div>
        <div className='Gmaillogo'><a href="mailto:spencerbohol3@gmail.com" target="_blank" rel="noopener noreferrer"> 
          <Tooltip title="Email">
            <button> <img src={gmail_logo} alt="Gmail logo"/> </button>
          </Tooltip> </a> </div>
        <div className='LinkedInlogo'><a href="https://www.linkedin.com/in/spencerbohol/" target="_blank" rel="noopener noreferrer">
          <Tooltip title="LinkedIn"> 
            <button> <img src={linkedin_logo} alt="Linkedin logo"/> </button>
          </Tooltip>  </a></div>
     </div> 
    </div>
    {/* Profile 3 */}
    <div className='profileCards'>
      <div className='profile'> <img className='profileimg' src={TJ}  alt="" /> </div>
      <div className='name'>TJ Gimenez</div>
      <div className='description'>Constraint is the mother of creativity!</div>


      <div className='links'>
        <div className='Profilelogo'> <a href="https://tj0023.github.io/My-Portfolio/" target="_blank" rel="noopener noreferrer">  
          <Tooltip title="Portfolio">
             <button> <img src={profile_logo} alt="Profile logo"/> </button>
          </Tooltip> </a>  </div>
        <div className='Githublogo'><a href="https://github.com/TJ0023" target="_blank" rel="noopener noreferrer">
          <Tooltip title="Github">
            <button> <img src={github_logo} alt="Github logo"/> </button>
          </Tooltip> </a> </div>
        <div className='Gmaillogo'><a href="mailto:GimenezTJV@gmail.com" target="_blank" rel="noopener noreferrer"> 
          <Tooltip title="Email">
            <button> <img src={gmail_logo} alt="Gmail logo"/> </button>
          </Tooltip> </a> </div>
        <div className='LinkedInlogo'><a href="https://www.linkedin.com/in/tristan-jay-gimenez-501509243/" target="_blank" rel="noopener noreferrer">
          <Tooltip title="LinkedIn"> 
            <button> <img src={linkedin_logo} alt="Linkedin logo"/> </button>
          </Tooltip>  </a></div>
     </div> 
    </div>

  </div>
    <br /><br /><br />
</div>
  )
}

export default AboutUs