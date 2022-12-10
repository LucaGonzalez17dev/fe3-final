import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [values, setValues] = useState({
    name: "",
    email: "",
  })
  const [validation, setValidation] = useState(false)
  const validateName = () => {
    let userName = values.name.split("")

    if (userName.length < 2) return alert("Invalid name")
    if (userName[0].length < 3 || userName[1].length <3) return ("Please enter a valid first and last name")

    return true
  }

  const validateEmail = () => {

    let userEmail = values.email.split("@")
    if (userEmail.length < 2) return alert("Invalid email")

    let dotCom = userEmail[1].split(".")
    if (dotCom.length < 2) return alert("Invalid email")

    return true

  }

  const handleChange = (e) => {

    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]:value,
    }

    setValues(newValues)

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    let nameValidation = validateName()

    let emailValidation = validateEmail()

    if (nameValidation && emailValidation) {
      setValidation(true)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="input-form" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="input-form" onChange={handleChange} />
        <button type="submit" className="btn-form">SUBMIT</button>
      </form>
      {validation ? <h3>Thanks {values.name}, we'll contact you via email!</h3> : ""}
    </>
  );
};

export default Form;
