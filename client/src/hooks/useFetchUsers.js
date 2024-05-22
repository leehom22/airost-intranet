import { useQuery} from '@tanstack/react-query'
import axios from 'axios'
const useFetchUsers = () => {
    const getUsers = async () => {
        return axios.get('http://localhost:4000/admin/users')
        .then(res => res.data)
        .catch(err => console.log(err))
    }
    return useQuery({
        queryKey:["users"],
        queryFn: getUsers,
    })
}
 
export default useFetchUsers;