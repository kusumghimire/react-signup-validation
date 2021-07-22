import React ,{useState} from 'react';

const SignupForm =() =>{

const [values, setValues]= useState({
  fullName:'',
  email:'',
  password:'',
});

 const handleFormSubmit=(event)=>{
  event.preventDefault();
 }
 const handleChange =(event) =>{
   setValues({
     ...values,
     [event.target.name]: event.target.value,
   })
 }

    return(
        <div className="container">       
          <div className="app-wrapper">
             <div>
               <h2 className='title'>
                 Create Account
               </h2>
             </div>

             <form className='form-wrapper'>
               <div className='name'>
                 <label className='label'>
                   Full Name
                 </label>
                 <input className='input' type='text' value={values.fullName} onClick={handleChange}/>
               </div>
               <div className='email'>
                 <label className='label'>
                  Email
                 </label>
                 <input className='input' type='email' value={values.email} />
               </div>
               <div className='password'>
                 <label className='label'>
                 Password
                 </label>
                 <input className='input' type='password' value={values.password} />
               </div>

               <div>
                 <button className="submit" onClick={handleFormSubmit}>
                   Sign Up 
                 </button>
               </div>

             </form>

          </div>



        </div>
    );
}

export default SignupForm;