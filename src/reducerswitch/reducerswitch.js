import React from "react"
import Statemaintain from "../statemaitain/statemaintain"


export default (state, action)=>{
 
    switch (action.type) {
      case ("SET_USER"):
    
        return {
          ...state,
          userdetails: action.user,
          isloggedIn: true,
          role:action.role
        };
     
        break;
      case ("SET_NO_USER"):

        return { ...state, isloggedIn: false, userdetails: null,role:null }
    
        break;

      default:
        return state
        break;


    }
  
}