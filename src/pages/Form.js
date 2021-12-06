import React from "react";
import {useState} from "react"
import {useNavigate} from "react-router-dom";

const Form = ({initialTodo, handleSubmit, buttonLabel}) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialTodo)

  // Handle Change to Update State when input changes
  const handleChange = (event) =>{
    setFormData({...formData, [event.target.name]:event.target.value})
  }

  const handleSubmission = (event) =>{
    // Prevent the page from refreshing 
    event.preventDefault()
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    // push user back to main page
    navigate("/")
  }

  return <form onSubmit={handleSubmission}>
    <input
      type="text"
      onChange={handleChange}
      value={formData.subject}
      name="subject"
    />
    <input 
    type="text"
    onChange={handleChange}
    value={formData.details}
    name="details"
    />
    <input
    type="submit"
    value={buttonLabel}
    />
  </form>

};

export default Form;