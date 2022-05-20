import React, { useState } from 'react'
import "./Form.css";

const Form = () => {

    const [activeFormPart, setActiveFormPart] = useState(1);

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        address1: "",
        address2: "",
        country: "india",
        interestedCourse: "javascript",
        mobile: "",
    }
    
    const [user, setUser] = useState(initialState)
    
    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users"))
        
        if(users){
            users.push(user)
            localStorage.setItem("users", JSON.stringify([...users]))
            return
        }
        localStorage.setItem("users", JSON.stringify([user]))
    }

  return (
    <div className="formContainer">
        <form onSubmit={handleSubmit} className="formMain">
            <section className="formParts" style={{transform:`${activeFormPart===1?"translateX(0%)":activeFormPart===2?"translateX(-100%)":activeFormPart===3?"translateX(-200%)":"none"}`}}>
                <div className="formSec">

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstName" onChange={handleChange} value={user.firstName}/>

                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lastName" onChange={handleChange} value={user.lastName}/>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleChange} value={user.email}/>

                </div>
                <div className="buttonSec">
                    <button type="button" className="slideBtn" onClick={()=>setActiveFormPart(2)}>Next</button>
                </div>
            </section>
            <section className="formParts" style={{transform:`${activeFormPart===1?"translateX(0%)":activeFormPart===2?"translateX(-100%)":activeFormPart===3?"translateX(-200%)":"none"}`}}>
                <div className="formSec">

                    <label htmlFor="address1">Address Line 1</label>
                    <input type="text" id="address1" name="address1" onChange={handleChange} value={user.address1}/>

                    <label htmlFor="address2">Address Line 2</label>
                    <input type="text" id="address2" name="address2" onChange={handleChange} value={user.address2}/>

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" onChange={handleChange} value={user.country}>
                    <option value="india">India</option>
                    <option value="australia">Australia</option>
                    <option value="usa">USA</option>
                    </select>
                </div>
                <div className="buttonSec">
                    <button type="button" className="slideBtn" onClick={()=>setActiveFormPart(1)}>Prev</button>
                    <button type="button" className="slideBtn" onClick={()=>setActiveFormPart(3)}>Next</button>
                </div>
            </section>
            <section className="formParts" style={{transform:`${activeFormPart===1?"translateX(0%)":activeFormPart===2?"translateX(-100%)":activeFormPart===3?"translateX(-200%)":"none"}`}}>
                <div className="formSec">

                    
                    <label htmlFor="courses">Interested Course</label>
                    <select id="courses" name="interestedCourse" onChange={handleChange} value={user.interestedCourse}>
                    <option value="javascript">Javascript</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    </select>

                    <label htmlFor="mobile">Mobile number</label>
                    <input type="number" id="mobile" name="mobile" onChange={handleChange} value={user.mobile}/>
                </div>
                <div className="buttonSec">
                    <button type="button" className="slideBtn" onClick={()=>setActiveFormPart(2)}>Prev</button>
                    <button type="submit" className="slideBtn">Submit</button>
                </div>
            </section>
        </form>
    </div>
  )
}

export default Form