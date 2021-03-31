import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import Buildpizza from "../buidpizza/buildpizza"

import Logincontext from "../contextarea/logincontext"
import Ingredientcontext from "../contextarea/Ingredientcontext"

export default function ProtectedRoutes({ component: Component, ...rest }) {
    let logincontextnew = useContext(Logincontext)

    if (logincontextnew.isloggedIn) {

        return (
            
                    <Route
                        {...rest}
                        render={(props) => {
                        
      

                            return <Component ></Component>
                          


                        }



                        }
                    />



                 
        )

    }

    else {

        return <div>loading...</div>


    }




}