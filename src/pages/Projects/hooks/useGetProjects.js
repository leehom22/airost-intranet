import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useGetProjects = () => {
    const getProjects = async () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/projects`)
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
        }
    return useQuery({
        queryKey:["projects"],
        queryFn: getProjects,
    })
}
 
export default useGetProjects;