import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";



function Private (props){
    const [token    ] = useAuth()
    console.log(token)
    if (token){
        return <Route {...props} />

    
    }
    return  <Redirect to="/login"></Redirect>
   
    

}
export default Private