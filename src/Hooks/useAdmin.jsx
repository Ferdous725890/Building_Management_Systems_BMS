import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseManu/UseAuth";
import useAxiosSecure from "./UseManu/useAxiosSecure";

const useAdmin = () => {
  const {user} = UseAuth()
  const axiosSequre = useAxiosSecure()
  const {data: isAdmin, isPending: isAdminloading} = useQuery({
    queryKey:[user?.email, 'isAdmin'],
    queryFn: async()=>{
      const res = await axiosSequre.get(`/user/admin/${user?.email}`)
      // console.log(res.data);
      return res.data.admin
    }
  })
  return [isAdmin, isAdminloading]
};

export default useAdmin;