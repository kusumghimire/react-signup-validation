import React ,{useEffect,useState} from "react";
import validation from './validation';

const useForm = (submitForm) =>{
const [values, setValues]= useState({
    fullname:" ",
    email:" ",
    password:" ",
  });
  
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,  //  Assign value to the respective field  
    })
  }
  
   const handleFormSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
   }
  
   useEffect(() =>{
     if(Object.keys(errors).length === 0 && dataIsCorrect){
       submitForm(true);
     }
   }
   );
   return {handleChange, handleFormSubmit, errors, values};
}

export default useForm;