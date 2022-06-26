import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/Home.css';
import workingIcon from '../images/workingIcon.svg';
import meeting from '../images/meeting.svg';
import money from '../images/money.svg';
import chill from '../images/chill.svg';
import profile1 from '../images/profilePic/Profile1.svg';
import profile2 from '../images/profilePic/Profile2.svg';
import profile3 from '../images/profilePic/Profile3.svg';
import profile4 from '../images/profilePic/Profile4.svg';
import profile5 from '../images/profilePic/Profile5.svg';
import profile6 from '../images/profilePic/Profile6.svg';
import profile7 from '../images/profilePic/Profile7.svg';
import profile8 from '../images/profilePic/Profile8.svg';
import profile9 from '../images/profilePic/Profile9.svg';




function Home() {

  return (
    <>
        <div className="home">
            <div className='homeScreen'>
                <div className='homeScreen1'>

                    <div className='subScreen1'>
                        <div className='Circle2'>
                        <h2>sideWork</h2>
                        </div>
                        <div className='Circle'>
                        <h3>The team for your dreams!</h3>
                        <img src={workingIcon} className='working' alt='Logo'/>
                        </div>
                    </div>
                </div>

                <div className='homeScreen2'>
                    <div className='personaDisplay'>
                        <span><img src={profile1} className='working1' alt='Profile Pictures'/></span>
                        <span><img src={profile2} className='working1' alt='Profile Pictures'/></span>
                        <span><img src={profile3} className='working1' alt='Profile Pictures'/></span>
                        <span><img src={profile4} className='working1' alt='Profile Pictures'/></span>
                        <span><img src={profile5} className='working1' alt='Profile Pictures'/></span>
                        <span><img src={profile6} className='working1' alt='Profile Pictures'/></span>
                        <span><img src={profile7} className='working1' alt='Profile Pictures'/></span>
                        <span><img src={profile8} className='working1' alt='Profile Pictures'/></span>
                        <span><img src={profile9} className='working1' alt='Profile Pictures'/></span>
                    </div>
                    <div className='subScreen2'>
                        <h2>Find the right contributors!</h2>
                        <button className='button btnColor'><Link  className="hover" to="/Categories">MEMBERS</Link></button>
                        <h2>We're also looking to hire more!</h2>
                        <button className='button btnColor2'><Link  className="hover" to="/SignUp">JOIN US</Link></button>
                    <img src={meeting} className='working1-a'/>
                    </div>
                </div>

                <div className='homeScreen3'>

                    <div className='subScreen3'>

                        <h1>Why sideWork?</h1>
                        <div className="subScreen3-a">

                        <div className='money whyText'>
                            <img src={money} className='working2'/>
                        </div>

                        <div className='whyText textBG'>
                            <h2>Reliability</h2> 
                            <p>More than 93% of firms worldwide outsource crucial tasks to outsourcing
                            firms such as ours in an industry worth more than $100 billion dollars
                            and growing.</p>
                        </div>

                        </div>

                        <div className="subScreen3-b"> 

                        <div className='money2 whyText'>
                            <img src={chill} className='working2'/>
                        </div>

                        <div className='whyText textBG2'>
                        <h2>Ease of Mind</h2>   
                        <p>Majority of companies praise outsourcing companies for relieving stress 
                            and opening more time by delegating tasks to them so they can focus on key internal processes.</p>
                        </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
