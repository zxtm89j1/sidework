import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import star from '../images/TechLogo/Star.svg';
import profile from '../images/profilePic/Profile1.svg';
import '../styles/Profile.css'


function Confirmation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Hire.</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className='box2'>
          <p id="child-modal-description">
           Would you like to hire, Maksim B.?
          </p>
          <Button onClick={handleClose}>Close</Button>
          <Hire/>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Hire(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Hire.</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className='box3'>
          <p id="child-modal-description">
           Thank you for hiring, Maksim B. 
          </p>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{backgroundColor:'#2B7A78', color:'white', border:'none', borderRadius:'25px', }}>See more... </Button> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='box'>
          <div className='head' >
            <div>
            <img src={profile} alt=""/>
          </div>
          <div>  <h2 id="parent-modal-title">Maksim B.</h2>
         
              <p>Senior II Engineer</p> 
             <p>Kyiv, Ukraine</p>  <p> <img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/> 4.0</p>
              
              <p>$25 USD / hour</p>
              <p>JAVA / C++ / VISUAL BASIC / PYTHON / Javascript / Reactjs</p></div>
          </div>
          
        <div className='description'> 
           <p>I am Maksim, a Designer and Full Stack Developer with 10+ years of industry experience, a great Portfolio with a lot of High Quality work, and the fastest Support.</p>
              <p>I use cutting-edge technology & best practices to create custom sites involving: Graphic Design, Logo Design, Website Design, Responsiveness, Optimization, Customization, and Integration of demand. We are Experts in HTML/CSS, PHP, MySql, WordPress, CodeIgniter, Laravel, Angular JS, Node JS, Magento, Joomla, Shopify, E-commerce, and WooCommerce.</p>
     
        </div>
                  <Button onClick={handleClose}>Close</Button>
                  
          <Confirmation />
        </Box>
      </Modal>
    </div>
  );
}
