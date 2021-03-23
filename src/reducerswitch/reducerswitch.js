import React from "react"
import Statemaintain from "../statemaitain/statemaintain"


export default (state, action)=>{
 
    switch (action.type) {
      case ("SET_USER"):
        console.log(action.user)
        return {
          ...state,
          userdetails: action.user,
          isloggedIn: true,
          role:action.role
        };
     
        break;
      case ("SET_NO_USER"):

        console.log(action.error)
        return { ...state, isloggedIn: false, userdetails: null,role:null }
    
        break;

      default:
        return state
        break;


    }
  
}