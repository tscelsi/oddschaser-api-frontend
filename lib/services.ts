import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useGenerateApiKey = () => useMutation({
    mutationFn: async () => {
        const { data } = await axios.post('/api/users/generate_api_key')
        return data
    },
    onError: (error) => {
        console.error(error)
    }
})