import React, { useContext } from "react";
import UseAuth from "../Hooks/UseManu/UseAuth";
import { AuthContext } from "../Provider/Authprovider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Result } from "postcss";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const {googleLogin} = useContext(AuthContext)
    const navigated = useNavigate()
    const handelLogin = () =>{
        // console.log('btn click');
        googleLogin()
        .then(result =>{
            // console.log(result.user);
            const userinfo = {
                email: result.user.email,
                name : result.user.displayName,
            }
            axiosPublic.post('/users', userinfo)
            .then(res =>{
                // console.log(res.data);
                if(res.data.insertedId > 0){
                    alert("added")
                }
            })
            navigated('/')
        })
       
    }
  return (

    <div>
      <div className="px-5 ">
        <button
        onClick={handelLogin}
        className="btn mt-5 w-full">Google Login</button>
      </div>    
    </div>
  );
};

export default SocialLogin;
