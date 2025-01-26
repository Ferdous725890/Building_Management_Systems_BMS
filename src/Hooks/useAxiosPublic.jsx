import axios from 'axios';


const axiosPublic = axios.create({
    baseURL:'https://building-management-alpha.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;