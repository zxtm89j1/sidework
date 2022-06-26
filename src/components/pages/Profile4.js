import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import star from '../images/TechLogo/Star.svg';
import profile from '../images/profilePic/Profile4.svg';
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
           Would you like to hire, Nayan Jaysukhbhai B.?
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
           Thank you for hiring, Nayan Jaysukhbhai B. 
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
          <div>  <h2 id="parent-modal-title">Nayan Jaysukhbhai B.</h2>
         
              <p>Mid-level Engineer</p> 
             <p>Manil, Philippines</p>  <p> <img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/><img src={star} alt="" style={{width:'20px', height:'20px', }}/> 4.0</p>
              
              <p>$20 USD / hour</p>
              <p>javascript / CSS / HTML / Bootstrap / Java </p></div>
          </div>
          
        <div className='description'> 
           <p>Hey.....I'm Nayan Jaysukhbhai B.. We can make anything you want, if you can describe exactly what you want, will get the exact service until full satisfaction.</p>
              <p>We provide web design and development, E-commerce solutions. We are completely committed not only to provide basic services, but also doing everything possible to get your business growing explosively. We will provide you great solution as per your expectation.</p>
        </div>
                  <Button onClick={handleClose}>Close</Button>
                  
          <Confirmation />
        </Box>
      </Modal>
    </div>
  );
}
