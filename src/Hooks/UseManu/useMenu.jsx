// import { useEffect, useState } from "react";

import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setloading] = useState(true)
  // console.log(menu);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMenu(data);
  //       setloading(false)
  //     });

      
      
    // }, []);
    // return [menu, loading]
const axiosSecure = useAxiosSecure()

const {refetch,data: menu=[]} = useQuery({
  queryKey:['manu'],
  queryFn:async()=>{
    const res = await axiosSecure.get('/menu')
    return res.data

  }
})
return [menu, refetch]



};
export default useMenu;
