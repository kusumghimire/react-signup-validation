import React,{useState} from 'react';
import SignupFormSuccess from './SignupFormSuccess';
import SignUpForm from './SignupForm'
const Form = ()=>{
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    return(
        <>
        {!formIsSubmitted ?  <SignupFormSuccess /> : <SignupForm/> }   
        </>
    )
}

export default Form;