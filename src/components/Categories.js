import React from 'react'
import profile1 from '../images/Profile1.svg'
import star from '../images/Star.svg'
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
import Profile1 from './Profile1.js'


const Categories = () => {
  return (
    <div style={{backgroundColor: '#3AAFA9'}} >
        <h1 className='headertext' style={{color: 'white', fontSize: '75px' }}>Hire the best developers.</h1>
        <p className='discriptiontext' style={{color: 'white',fontSize: '30px' }}>Check out developers with the skills you need for your next job. </p>
    <div>
    <div className='profilecard'>
    {/* Profile 1 */}
    <div className='profileCards1'>
      <div className='profile'> <img src={profile1} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Kim Teahyung</div>
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
  )
}

export default Categories