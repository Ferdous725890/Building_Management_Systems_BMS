import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";




const axiossSecure = axios.create({
    baseURL:"https://building-management-alpha.vercel.app/"
    // baseURL:"http://localhost:5000/"
})
const useAxiosSecure = () => {
    const navigated = useNavigate()
    const {logOut} = useContext(AuthContext)
    axiossSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('stop ', token);
        config.headers.authorization= `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })


// response 
axiossSecure.interceptors.response.use(function(response){
    return response
},async(error)=>{
    const status =error.response.status
    console.log('error in ', status);
  
    if(status === 401 || status===500 || status===404){
       await logOut()
navigated('/login')
    }
    return Promise.reject(error)
})


   return axiossSecure
};

export default useAxiosSecure;



