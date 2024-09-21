import axios from 'axios'
import { useQueryClient, useMutation} from '@tanstack/react-query'

const useProjectBoardMutation = ({projectId, cards}) => {
    const queryClient = useQueryClient()
    const updateProjectBoard = async () => {
        return axios.put(`${process.env.REACT_APP_API_URL}/projects/tracking`,{
            projectId: projectId,
            tasks: cards,
        })
    }
    return useMutation({
        mutationFn: updateProjectBoard,
        onSuccess: (data) => {
            queryClient.invalidateQueries()
          },
    })
}
 
export default useProjectBoardMutation;