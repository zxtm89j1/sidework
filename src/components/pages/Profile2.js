import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import star from '../images/TechLogo/Star.svg';
import profile from '../images/profilePic/Profile2.svg';
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
           Would you like to hire, Dayaben D.?
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
           Thank you for hiring, Dayaben D. 
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
          <div>  <h2 id="parent-modal-title">Dayaben D.</h2>
         
              <p>Junior Engineer</p> 
             <p>Surat, India</p>  <p> <img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/> 4.0</p>
              <p>$20 USD / hour</p>
              <p>Javascript / CSS / HTML / Bootstrap </p></div>
          </div>
          
        <div className='description'> 
           <p>Hey.....I'm Dayaben. We can make anything you want, if you can describe exactly what you want, will get the exact service until full satisfaction.</p>
              <p>Experience in Branding, Web designing, and Web development on various technologies</p>
              <p>I become an essential part of all my clients by understanding their strategy and focus and aligning themselves. I want long-term Clients.</p>
     
        </div>
                  <Button onClick={handleClose}>Close</Button>
                  
          <Confirmation />
        </Box>
      </Modal>
    </div>
  );
}
