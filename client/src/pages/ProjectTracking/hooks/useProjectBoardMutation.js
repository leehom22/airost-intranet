import axios from 'axios'
import { useQueryClient, useMutation} from '@tanstack/react-query'

const useProjectBoardMutation = ({projectId, cards}) => {
    const queryClient = useQueryClient()
    const updateProjectBoard = async () => {
        return axios.put('http://localhost:4000/projects/tracking',{
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