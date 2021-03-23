import React,{useEffect, useReducer } from "react";
import Logincontext from "../contextarea/logincontext"
import ReducerSwitch from "../reducerswitch/reducerswitch"
import axios from "axios"

let Statemaintain =(props)=>{
  
let initalState = {
    isloggedIn: false,
    userdetails: {},
    authlevel: "",
    error: {}

  }

  
  const [userdetails, dispatch] = useReducer(ReducerSwitch, initalState)



  let getdata = () => {
    axios.post("https://pizzabytes.herokuapp.com/users/isauthenticated", null, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }).then((result) => {

      dispatch({ type: "SET_USER", user: result.data.userdetails,role:result.data.role })
    }).catch((error) => { dispatch({ type: "SET_NO_USER", user: null, error: error }) })

  }

  useEffect(()=>{getdata()},[])

return(
    <Logincontext.Provider value={{user:userdetails,isloggedIn:userdetails.isloggedIn,getdata}}>

        {props.children}
    </Logincontext.Provider>


)

}

export default Statemaintain
