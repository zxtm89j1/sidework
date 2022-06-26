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
           Would you like to hire, Smartinfosys?
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
           Thank you for hiring, Smartinfosys 
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
          <div>  <h2 id="parent-modal-title">Smartinfosys</h2>
         
              <p>Senior II Engineer</p> 
             <p>Indore, India</p>  <p> <img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/> 4.0</p>
              
              <p>$15 USD / hour</p>
              <p>JAVA / C++ / VISUAL BASIC / PYTHON / Reactjs </p></div>
          </div>
          
        <div className='description'> 
           <p>Smartinfosys is a leading website development, corporate branding and SEO company that has been on the scene since 2001. Starting with a small set-up, we have gradually consolidated our resources and today have 150+ full-time team members working for you in Five Development Centers in India.</p>
              <p>We fit in with your aspirations and works with the sole objective of empowering you and your business by providing state-of-the-art website design & development services, android & iOS apps design & development, corporate branding services, graphic design, and SEO services.</p>
     
        </div>
                  <Button onClick={handleClose}>Close</Button>
                  
          <Confirmation />
        </Box>
      </Modal>
    </div>
  );
}
