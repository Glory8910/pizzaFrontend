import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Register from './register/register';

import Login from "./login/login"
import Forgotpassword from "./forgotpassword/forgotpassword"
import { useContext, useReducer, useEffect, useState } from 'react';
import Passwordreset from './passwordreset/passwordreset';
import axios from 'axios';
import { IngredientList } from "./contextarea/ingredientList"
import Logincontext from './contextarea/logincontext';

import ProtectedRoutes from './protectedRoutes/protectedRoutes';

import ReducerSwitch from "./reducerswitch/reducerswitch"
import Statemaintain from './statemaitain/statemaintain';
import Buildpizza from './buidpizza/buildpizza';






function App() {


  return (

    <BrowserRouter>

      <Switch>
        
        <Route exact path="/register" >
          <Register />
        </Route>
        <Route exact path="/resetpassword" ><Passwordreset /></Route>

        <Route exact path="/login" ><Login></Login></Route>
        <Route exact path="/" ><Login></Login></Route>

     

        <Route exact path="/forgotpassword" > <Forgotpassword /></Route>


      
        <Route exact path="/logout" ><Login></Login> </Route>
  


        <Statemaintain>
          <IngredientList>
         
            <ProtectedRoutes exact path="/buildpizza" component={Buildpizza}></ProtectedRoutes>
          </IngredientList>
        </Statemaintain>
        

      </Switch>
    </BrowserRouter>



  );
}

export default App;
