import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useGetProjects = () => {
    const getProjects = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
          return res.data;
        } catch (err) {
          throw new Error("Failed to fetch projects"); // 
        }
      };
      
    return useQuery({
        queryKey:["projects"],
        queryFn: getProjects,
    })
}
 
export default useGetProjects;