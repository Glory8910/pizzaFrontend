import React, { useState, useContext, useReducer } from 'react'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom"
import Navbar from "../navbar/navbar"
import "./login.css"

export default function Login() {

    let [usermail, setusermail] = useState("")
    let [userpassword, setuserpassword] = useState("")
    let history = useHistory()




    async function handleclick() {


        await axios.post("https://pizzabytes.herokuapp.com/users/login", { email: usermail, password: userpassword })
            .then((result) => {
             

                localStorage.setItem("token", result.data.token)
                localStorage.setItem("role", result.data.role)

                if (result.data.token && result.data.role.includes("admin")) {

                    history.push("/admindashboard")
                }
                else if (result.data.token && (result.data.role.includes("user"))) {

                    history.push("/buildpizza")
                }
            })
            .catch((error) => {
                console.log(error)
            })
  



    }




    let handlechangeemail = (e) => {

        setusermail(e.target.value)

    }

    let handlechangepassword = (e) => {


        setuserpassword(e.target.value)

    }
 
    return (
        <>
        <Navbar />
        <div className="container centering" >
      



   

            <div className="jumbotron jumbo"   >
            <h1 className="text-center">Welcome </h1>
            <h1 className="text-center">Login </h1>
                <form>

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
                        }}>Sign In</button>
                    </div>


                    <div className="text-right">
                        <Link to="/register"
                        >
                            Register
                        </Link>
                    </div>
                    <div className="text-left">
                        <Link to="/forgotpassword"

                        >
                            Forgot Password
                        </Link>
                    </div>
                </form>
            </div>
        </div>
</>
    )
}