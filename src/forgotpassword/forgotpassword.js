import React, { useState } from 'react'
import axios from 'axios'
import {Link } from "react-router-dom"


export default function Forgotpassword() {

    let [usermail, setusermail] = useState("")
    
    
    async function handleclick() {

        await axios.post("https://pizzabytes.herokuapp.com/users/reset", { email: usermail })
            .then((result) => {
                
                alert("check your mail to reset your new password")
           
            })
            .catch((error) => {
           
                alert("user not found")
            })
   



    }


    let handlechangeemail = (e) => {

     
        setusermail(e.target.value)

    }


    return (

        <div className="container" >

          
            <div className="jumbotron jumbo">
            <h1 className="text-center">Welcome </h1>
            <h1>Pizza Bytes</h1>
            <h2 className="text-center">Password Reset </h2>

                <form>

                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" name="email" onChange={(e) => {
                            handlechangeemail(e)

                        }} type="email"></input>
                    </div>

                    <div className="mx-auto p-3">
                        <button className="btn  btn-primary" onClick={(e) => {
                            e.preventDefault()
                            handleclick()
                        }}>Reset</button>
                    </div>
                    <div className="text-right">
                        <Link
                          to="/login"
                        >
                       Login
                        </Link>
                    </div>
                    
                </form>
            </div>
        </div>

    )
}