import React from 'react';
import star from '../images/TechLogo/Star.svg';
import js from '../images/TechLogo/Javascriptlogo.svg';
import java from '../images/TechLogo/Javalogo.svg';
import bootstrap from '../images/TechLogo/Bootstraplogo.svg';
import cplusplus from '../images/TechLogo/C++logo.svg';
import css from '../images/TechLogo/Csslogo.svg';
import html from '../images/TechLogo/HTMLlogo.svg';
import python from '../images/TechLogo/Pythonlogo.svg';
import reactjs from '../images/TechLogo/Reactjslogo.svg';
import vb from '../images/TechLogo/VBlogo.svg';
import profile1 from '../images/profilePic/Profile1.svg';
import profile2 from '../images/profilePic/Profile2.svg';
import profile3 from '../images/profilePic/Profile3.svg';
import profile4 from '../images/profilePic/Profile4.svg';
import profile5 from '../images/profilePic/Profile5.svg';
import profile6 from '../images/profilePic/Profile6.svg';
import profile7 from '../images/profilePic/Profile7.svg';
import profile8 from '../images/profilePic/Profile8.svg';
import profile9 from '../images/profilePic/Profile9.svg';
import Profile1 from './Profile1.js';
import Profile2 from './Profile2.js';
import Profile3 from './Profile3.js';
import Profile4 from './Profile4.js';
import Profile5 from './Profile5.js';
import Profile6 from './Profile6.js';
import Profile7 from './Profile7.js';
import Profile8 from './Profile8.js';
import Profile9 from './Profile9.js';

const Categories = () => {
  return (
    <div style={{backgroundColor: '#3AAFA9', marginTop:'7%'}} >
        <h1 className='headertext' style={{color: 'white', fontSize: '75px', textShadow: '3px 3px black' }}>Hire the best developers.</h1>
        <p className='discriptiontext' style={{color: 'white',fontSize: '30px', textShadow: '3px 3px black' }}>Check out developers with the skills you need for your next job. </p>
    <div>
    <div className='profilecard' style={{marginTop:'2%', marginBottom:'2%', display:'flex', flexDirection:'row', flexWrap: 'wrap'}}>
    {/* Profile 1 */}
    <div className='profileCards'>
      <div className='profile'> <img src={profile1} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Ravikant P.</div>
      <div style={{fontSize:'12px'}}>Junior Engineer</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'20px'}}>
      <img style={{width:'30px', height:'30px', }} src={java} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={cplusplus}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={vb} alt="" />
      <img style={{width:'30px', height:'30px', }} src={python} alt="" /></div>
      <div className='links'>
        <Profile1/>

      </div> 
      </div>
     

      {/* Profile 2 */}
      <div className='profileCards'>
      <div className='profile'> <img src={profile2} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Dayaben D.</div>
      <div style={{fontSize:'12px'}}>Junior Engineer</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'20px'}}>
      <img style={{width:'30px', height:'30px', }} src={js} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={css}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={html} alt="" />
      <img style={{width:'30px', height:'30px', }} src={bootstrap} alt="" /></div>
      <div className='links'>
        <Profile2/>
       </div> 
    </div>

      {/* Profile 3 */}
      <div className='profileCards'>
      <div className='profile'> <img src={profile3} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Gurjeet Singh</div>
      <div style={{fontSize:'12px'}}>Junior Engineer</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'20px'}}>
      <img style={{width:'30px', height:'30px', }} src={java} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={cplusplus}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={css} alt="" />
      <img style={{width:'30px', height:'30px', }} src={html} alt="" /></div>
      <div className='links'>
        <Profile3/>
       </div> 
    </div>

      {/* Profile 4 */}
      <div className='profileCards'>
      <div className='profile'> <img src={profile4} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Nayan Jaysukhbhai B.</div>
      <div style={{fontSize:'12px'}}>Mid-Level Engineer</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'10px'}}>
      <img style={{width:'30px', height:'30px', }} src={java} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={js} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={css}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={html} alt="" />
      <img style={{width:'30px', height:'30px', }} src={bootstrap} alt="" /></div>
      <div className='links'>
        <Profile4/>
       </div> 
    </div>

      {/* Profile 5 */}
      <div className='profileCards'>
      <div className='profile'> <img src={profile5} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Guateya</div>
      <div style={{fontSize:'12px'}}>Mid-Level Engineer</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'10px'}}>
      <img style={{width:'30px', height:'30px', }} src={reactjs} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={js} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={css}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={html} alt="" />
      <img style={{width:'30px', height:'30px', }} src={bootstrap} alt="" /></div>
      <div className='links'>
        <Profile5/>
       </div> 
    </div>

      {/* Profile 6 */}
      <div className='profileCards'>
      <div className='profile'> <img src={profile6} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Bluebay Software</div>
      <div style={{fontSize:'12px'}}>Senior Engineer I</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'5PX'}}>
      <img style={{width:'30px', height:'30px', }} src={reactjs} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={js} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={css}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={html} alt="" />
      <img style={{width:'30px', height:'30px', }} src={bootstrap} alt="" />
      <img style={{width:'30px', height:'30px', }} src={python} alt="" /></div>
      <div className='links'>
        <Profile6/>
       </div> 
    </div>

      {/* Profile 7 */}
      <div className='profileCards'>
      <div className='profile'> <img src={profile7} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Salma N.</div>
      <div style={{fontSize:'12px'}}>Senior Engineer I</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'5px'}}>
      <img style={{width:'30px', height:'30px', }} src={java} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={cplusplus}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={js} alt="" />
      <img style={{width:'30px', height:'30px', }} src={css} alt="" />
      <img style={{width:'30px', height:'30px', }} src={html} alt="" />
      <img style={{width:'30px', height:'30px', }} src={reactjs} alt="" /></div>
      <div className='links'>
        <Profile7/>
       </div> 
    </div>

      {/* Profile 8 */}
      <div className='profileCards'>
      <div className='profile'> <img src={profile8} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Smartinfosys</div>
      <div style={{fontSize:'12px'}}>Senior Engineer II</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'10px'}}>
      <img style={{width:'30px', height:'30px', }} src={java} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={cplusplus}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={vb} alt="" />
      <img style={{width:'30px', height:'30px', }} src={python} alt="" />
      <img style={{width:'30px', height:'30px', }} src={reactjs} alt="" /></div>
      <div className='links'>
        <Profile8/>
       </div> 
    </div>

      {/* Profile 9 */}
      <div className='profileCards'>
      <div className='profile'> <img src={profile9} alt="" style={{width:'150px', height:'150px'}}/></div>
      <div className='name' style={{fontSize:'20px'}}>Maksim B.</div>
      <div style={{fontSize:'12px'}}>Senior Engineer II</div>
    <div><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/><img src={star} alt="" style={{width:'30px', height:'30px', }}/></div>
      <p>Technologies:</p>  <div className='skills' style={{display: 'flex', flexDirection:'row', gap:'5px'}}>
      <img style={{width:'30px', height:'30px', }} src={java} alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={cplusplus}alt="" /> 
      <img style={{width:'30px', height:'30px', }} src={vb} alt="" />
      <img style={{width:'30px', height:'30px', }} src={python} alt="" />
      <img style={{width:'30px', height:'30px', }} src={js} alt="" />
      <img style={{width:'30px', height:'30px', }} src={reactjs} alt="" /></div>
      <div className='links'>
        <Profile9/>
       </div> 
    </div>
</div>
    </div>
    </div>
  )
}

export default Categories