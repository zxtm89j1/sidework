import React, {useState} from 'react';
import '../components/styles/SignUp.css';
import signIn from './images/sign-in.svg'


const retrieveUser = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

const SignUp = () => {


    //assigning states
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorfName, seterrorfName] = useState(false);
    const [errorlName, seterrorlName] = useState(false);
    const [errorEmail, seterrorEmail] = useState(false);
    const [errorPassword, seterrorPassword] = useState(false);
    const [agree, setAgree] = useState(false);
    const [errorAgree, setErrorAgree] = useState('');
    const [openModal, setOpenModal] = useState(false);

    

    //function for changing the state of the checkbox (terms and conditions)
    const checkboxHandler = () => {
        setAgree(!agree);
        console.log(agree)
    }

    //function for clearing the local storage
    const clearLocal = () => {
        localStorage.clear();
    }


    const submitSignUp = (e) => {

        e.preventDefault();


        //function for validation of first name
        const handleSubmitFname = () => {
            

            if(fName.trim() === '') {
                seterrorfName('First name must not be empty!')
            } 
        }

        //function for validation of last name
        const handleSubmitLname = () => {
            e.preventDefault();
            if(lName.trim() === '') {
                seterrorlName('Last name must not be empty!')
            } 
        }


        //function for validation of email
        const handleSubmitEmail = () => {
            e.preventDefault();
            if(email.trim() === '') {
                seterrorEmail('Email must not be empty!')
            } 
        }

        //function for validation of password
        const handleSubmitPassword = () => {
            e.preventDefault();
            if (password.trim() === '') {
                seterrorPassword('Password must not be empty!')
            } else if (password !== password2) {
                seterrorPassword('Passwords don\'t match!')
            } else if (password.length < 5) {
                seterrorPassword('Password must be minimum of 5 characters!')
            } else if (password.search(/[0-9]/) < 0) {
                seterrorPassword('Password must contain at least one number!')
            }
        }

        
        //function for validation if the user agrees to the terms and conditions
        const handleSubmitAgreement = () => {
            if (agree === false) {
                setErrorAgree('You must agree to the terms and conditions!')
            } 
        }


    const setModal = () => {
        if (fName !== '' && lName !== '' && email !== '' && password === password2 && agree !== false) {
            setOpenModal(true)
        } else {
            alert('There are errors! Please properly fill in the fields!')
        }
    }
            
        //calling functions
        handleSubmitFname();
        handleSubmitLname();
        handleSubmitEmail();
        handleSubmitPassword();
        handleSubmitAgreement();
        setModal();

    }


     // function to save local
     const saveLocal = () => {
        if (fName !== '' && lName !== '' && email !== '' && password === password2 && agree === true) {
            alert('Information recorded!')

            let users = {
                fName: fName,
                lName: lName,
                email: email,
                password: password,
                password2: password2
            }

            retrieveUser.push(users);
            localStorage.setItem('users', JSON.stringify(retrieveUser));

            console.log(retrieveUser);

            setOpenModal(false);

        } 
    
    }
   
   
  return (

        <div className='signUpMain'>
        <div className='signup-body'>
        <div className='main1'>
            <div className='main-content'>
            <h1>IT'S AS <br/> EASY <br/> AS <br/> ONE, TWO, <br /> THREE!</h1>

                <div className='form-maindiv'>
                    <form onSubmit={submitSignUp}>
                        <div className='form-row'><label>Enter First Name:</label>{errorfName ? (<span className='errorSpan'>{errorfName}</span>) : (null)}<br />
                        <input type='text' className='input1' onChange={(e) => setFName(e.target.value)} style={{borderColor : (errorfName? 'red':'black')}}/></div>

                        <div className='form-row'><label>Enter Last Name:</label>{errorlName ? (<span className='errorSpan'>{errorlName}</span>) : (null)}<br />
                        <input type='text' className='input1'  onChange={(e) => setLName(e.target.value)} style={{borderColor : (errorlName? 'red':'black')}}/></div>

                        <div className='form-row'><label>Email:</label>{errorEmail ? (<span className='errorSpan'>{errorEmail}</span>) : (null)}<br />
                        <input type='email' className='input1'  onChange={(e) => setEmail(e.target.value)} style={{borderColor : (errorEmail? 'red':'black')}}/></div>

                        <div className='form-row'><label>Password:</label>{errorPassword ? (<span className='errorSpan'>{errorPassword}</span>) : (null)}<br />
                        <input type='password' className='input1' onChange={(e) => setPassword(e.target.value)} style={{borderColor : (errorPassword? 'red':'black')}}/></div>

                        <div className='form-row'><label>Retype Password:</label><br />
                        <input type='password' className='input1'  onChange={(e) => setPassword2(e.target.value)} style={{borderColor : (errorPassword? 'red':'black')}}/></div>

                    
                        <div className='mainDivCheckbox'><input type='checkbox' onChange={checkboxHandler}/><label for='checkbox'>Agree to the <a href='https://www.termsandconditionsgenerator.com/live.php?token=qtnXID04FLwHJCnJzVQgUWek2D6hWwWQ'>terms and conditions</a></label></div>
                        {agree ? (null) : (<div className='errorSpan'>{errorAgree}</div>)}
                        
                        
                        <button type='submit'>Create my account</button>
                        <div><span>Already have an account? <a>Try logging in.</a></span></div>

                        
                    </form>
                </div>

            </div>
            <img src={signIn} className="imageSignIn"/>


            {/* modal */}

    <div className={openModal ? ('modalOpen') : ('modalBackgroundClose')}>
      <div className='modalContainer'>
        <div className='modalTitleContainer'><div className='modalTitle'>Please review the details</div></div>
        <div className='modalInfoRow'><div className='modalInfoLabel'>First Name:</div> <div className='modalInfoInput'>{fName}</div></div>
        <div className='modalInfoRow'><div className='modalInfoLabel'>Last Name:</div> <div className='modalInfoInput'>{lName}</div></div>
        <div className='modalInfoRow'><div className='modalInfoLabel'>Email:</div> <div className='modalInfoInput'>{email}</div></div>
        <div className='modalInfoRow'><div className='modalInfoLabel'>Registered Password:</div> <div className='modalInfoInput'>{password}</div></div>

        <div className='buttonRow'><button onClick={saveLocal}>Confirm</button> <button onClick={() => {setOpenModal(false)}}>Close and Edit Information</button> <button onClick={clearLocal}>Clear Storage</button></div>
      </div>
    </div>       

        </div>

        </div>
        </div>
  )
}

export default SignUp