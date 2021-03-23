import React, { useState } from 'react'
import axios from 'axios'


export default function Passwordreset() {

    let [usermail, setusermail] = useState("")
    let [userpassword, setuserpassword] = useState("")
    
    


    async function handleclick() {

        await axios.post("https://pizzabytes.herokuapp.com/users/resetpassword", { email: usermail, password: userpassword })
            .then((result) => { 
            alert("you have sucessfully changed your password")
           
            })
            .catch((error) => {
              
                alert("try again with proper credentials"  )
            })
      



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
            <h1>Pizza Bytes</h1>
            <h2 className="text-center">Reset password </h2>

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
                        }}>Reset</button>
                    </div>
                </form>
            </div>
        </div>

    )
}