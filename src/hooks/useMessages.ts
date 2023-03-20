import { Messages } from '@/types/chat'
import { useQuery } from '@tanstack/react-query'
import api from '../pages/api/openAi'

const fetchMessages = async () => {
	const res = await api.post<Messages[]>('/')
}
