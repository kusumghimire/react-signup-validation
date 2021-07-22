import React,{useState} from 'react';
import SignupFormSuccess from './SignupFormSuccess';
import SignupForm from './SignupForm'
const Form = ()=>{
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

const submitForm = ()  =>  {
    setFormIsSubmitted(true);
};
    return(
        <>
        {!formIsSubmitted ? <SignupFormSuccess submitForm={submitForm} /> : <SignupForm/> }   
        </>
    )
}

export default Form;