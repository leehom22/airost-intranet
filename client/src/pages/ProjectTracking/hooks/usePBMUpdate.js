import axios from 'axios'
import { useQueryClient, useMutation} from '@tanstack/react-query'

const usePBMUpdate = ({projectId, cards}) => {
    const queryClient = useQueryClient()
    const updateProjectBoard = async () => {
    try{
        console.log("Sending pending update data to backend")
        const response=await axios.put('http://localhost:4000/projects/update',{
            projectId:projectId,
            tasks: cards, //should be only a single task (not a whole array)
        },{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        return response 
    }catch(err){
        console.error("Error while updating project board:", err.response?.data || err.message);
        throw err; // re-throw so that react-query's onError still works
    }
}
    return useMutation({
        mutationFn: updateProjectBoard,
        onSuccess: (data) => {
            queryClient.invalidateQueries()
            console.log("Project board updated successfully", data)
          },
          onError:(err)=>{
            console.error("Failed to update project board:", err.response?.data || err.message);
          }
    })
}
 
export default usePBMUpdate;