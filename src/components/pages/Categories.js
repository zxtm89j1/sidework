import React from 'react'
import star from '../images/TechLogo/Star.svg'
import js from '../images/TechLogo/Javascriptlogo.svg'
import java from '../images/TechLogo/Javalogo.svg'
import bootstrap from '../images/TechLogo/Bootstraplogo.svg'
import csharp from '../images/TechLogo/C#logo.svg'
import cplusplus from '../images/TechLogo/C++logo.svg'
import css from '../images/TechLogo/Csslogo.svg'
import html from '../images/TechLogo/HTMLlogo.svg'
import python from '../images/TechLogo/Pythonlogo.svg'
import reactjs from '../images/TechLogo/Reactjslogo.svg'
import vb from '../images/TechLogo/VBlogo.svg'
import profile1 from '../images/profilePic/Profile1.svg';
import profile2 from '../images/profilePic/Profile2.svg';
import profile3 from '../images/profilePic/Profile3.svg';
import profile4 from '../images/profilePic/Profile4.svg';
import profile5 from '../images/profilePic/Profile5.svg';
import profile6 from '../images/profilePic/Profile6.svg';
import profile7 from '../images/profilePic/Profile7.svg';
import profile8 from '../images/profilePic/Profile8.svg';
import profile9 from '../images/profilePic/Profile9.svg';
import Profile1 from '../Profile1.js'
import '../styles/Categories.css'


const Categories = () => {
  return (
    <div className='categoriesBody'>
      <div>
        <h1 className='headertext'>Hire The Best For You!</h1>
        <p className='discriptiontext'>Check out developers with the skills you need for your next job!</p>
      <div>
    <div className='profilecard'>

    {/* Profile 1 */}
      <div className='profileCards1'>
      <div className='profile'> <img src={profile1} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>John Doe</div>
      <div style={{fontSize:'12px'}}>Junior Engineer</div>
      <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <div className='skills'> <p>Technologies:</p> <img src="" alt="" /> <img src="" alt="" /> <img src="" alt="" /> <img src="" alt="" /></div>
      <div className='links'>
        <Profile1/>

      </div> 
      </div>
        {/* Profile 6 */}
      <div className='profileCards1'>
      <div className='profile'> <img src={profile6} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Jonathan Doe</div>
      <div style={{fontSize:'12px'}}>Junior Engineer</div>
      <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <div className='skills'> <p>Technologies:</p> <img src="" alt="" /> <img src="" alt="" /> <img src="" alt="" /> <img src="" alt="" /></div>
      <div className='links'>
        <Profile1/>

      </div> 
      </div>
      

      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Categories