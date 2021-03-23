import React, { useState } from 'react'
import axios from 'axios'
import {Link } from "react-router-dom"



export default function Register() {
    let [username, setusername] = useState("")
    let [usermail, setusermail] = useState("")
    let [userpassword, setuserpassword] = useState("")


    async function handleclick() {

        await axios.post("https://pizzabytes.herokuapp.com/users/reg", { name: username, email: usermail, password: userpassword })
            .then((result) => {
  
            
            alert("you have registered sucessfully")
            }
            )
            .catch((error) => {
        
                alert(error)
            })
  



    }

    let handlechangename = (e) => {


        setusername(e.target.value)

    }

    let handlechangeemail = (e) => {

        setusermail(e.target.value)

    }

    let handlechangepassword = (e) => {

  
        setuserpassword(e.target.value)

    }

    return (

        <div className="container" >

           
            <div className="jumbotron jumbo">
            <h1 className="text-center">Welcome </h1>
            <h1 className="text-center">Welcome to Pizza Bytes </h1>

            <h2 className="text-center">Registration </h2>

                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" name="name" onChange={(e) => {
                            handlechangename(e)
                        }} type="text"></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" name="email" onChange={(e) => {
                            handlechangeemail(e)

                        }} type="email"></input>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name="password" onChange={(e) => {
                            handlechangepassword(e)

                        }} type="password"></input>
                    </div>

                    <div className="mx-auto p-3">
                        <button className="btn  btn-primary" onClick={(e) => {
                            e.preventDefault()
                            handleclick()
                        }}>Sign Up</button>
                    </div>
                    <div className="text-right">
                        <Link to="/login"
                        >Login</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}