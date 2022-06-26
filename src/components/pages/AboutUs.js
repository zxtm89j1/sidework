import React from 'react';
import Tooltip from '@mui/material/Tooltip'
import profile_logo from '../images/Aboutus/ProfileLogo.svg';
import github_logo from '../images/Aboutus/GithubLogo.svg';
import gmail_logo from '../images/Aboutus/GmailLogo.svg';
import linkedin_logo from '../images/Aboutus/LinkedinLogo.svg';
import '../styles/Aboutus.css'

const AboutUs = () => {
  return (
    <div className='Aboutus' >
        <h1 className='sidewordtext' >sideWork</h1>
        <p className='aboutustext' >About us.</p>

    {/* Profile */}
    <div className='profilecard'>
    {/* Profile 1 */}
    <div className='profileCards'>
      <div className='profile'> <img className='profileimg' src="https://image.kpopmap.com/2019/01/VERIVERY-Faceus-member-profile-YongSeung.jpg"  alt="" /> </div>
      <div className='name'>Kim Teahyung</div>
      <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet fugit similique</div>
      <div className='links'>
        <div className='Profilelogo'> <a href="https://github.com/Anchetanino">  
          <Tooltip title="Portfolio">
             <button> <img src={profile_logo} alt="Profile logo"/> </button>
          </Tooltip> </a>  </div>
        <div className='Githublogo'><a href="https://github.com/Anchetanino">
          <Tooltip title="Github">
            <button> <img src={github_logo} alt="Github logo"/> </button>
          </Tooltip> </a> </div>
        <div className='Gmaillogo'><a href="https://github.com/Anchetanino"> 
          <Tooltip title="Email">
            <button> <img src={gmail_logo} alt="Gmail logo"/> </button>
          </Tooltip> </a> </div>
        <div className='LinkedInlogo'><a href="https://github.com/Anchetanino">
          <Tooltip title="LinkedIn"> 
            <button> <img src={linkedin_logo} alt="Linkedin logo"/> </button>
          </Tooltip>  </a></div>
     </div> 
    </div>

    {/* Profile 2 */}
    <div className='profileCards'>
      <div className='profile'> <img className='profileimg' src="https://image.kpopmap.com/2019/01/VERIVERY-Faceus-member-profile-YongSeung.jpg"  alt="" /> </div>
      <div className='name'>Kim Teahyung</div>
      <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet fugit similique</div>

      <div className='links'>
        <div className='Profilelogo'> <a href="https://github.com/Anchetanino">  
          <Tooltip title="Portfolio">
             <button> <img src={profile_logo} alt="Profile logo"/> </button>
          </Tooltip> </a>  </div>
        <div className='Githublogo'><a href="https://github.com/Anchetanino">
          <Tooltip title="Github">
            <button> <img src={github_logo} alt="Github logo"/> </button>
          </Tooltip> </a> </div>
        <div className='Gmaillogo'><a href="https://github.com/Anchetanino"> 
          <Tooltip title="Email">
            <button> <img src={gmail_logo} alt="Gmail logo"/> </button>
          </Tooltip> </a> </div>
        <div className='LinkedInlogo'><a href="https://github.com/Anchetanino">
          <Tooltip title="LinkedIn"> 
            <button> <img src={linkedin_logo} alt="Linkedin logo"/> </button>
          </Tooltip>  </a></div>
     </div> 
    </div>

    {/* Profile 3 */}
    <div className='profileCards'>
      <div className='profile'> <img className='profileimg' src="https://image.kpopmap.com/2019/01/VERIVERY-Faceus-member-profile-YongSeung.jpg"  alt="" /> </div>
      <div className='name'>Kim Teahyung</div>
      <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet fugit similique</div>

      <div className='links'>
        <div className='Profilelogo'> <a href="https://github.com/Anchetanino">  
          <Tooltip title="Portfolio">
             <button> <img src={profile_logo} alt="Profile logo"/> </button>
          </Tooltip> </a>  </div>
        <div className='Githublogo'><a href="https://github.com/Anchetanino">
          <Tooltip title="Github">
            <button> <img src={github_logo} alt="Github logo"/> </button>
          </Tooltip> </a> </div>
        <div className='Gmaillogo'><a href="https://github.com/Anchetanino"> 
          <Tooltip title="Email">
            <button> <img src={gmail_logo} alt="Gmail logo"/> </button>
          </Tooltip> </a> </div>
        <div className='LinkedInlogo'><a href="https://github.com/Anchetanino">
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