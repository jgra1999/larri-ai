import { create } from 'zustand'
import { Messages } from '@/types/chat'
import { v4 as uuidv4 } from 'uuid'

type chatState = {
	messages: Messages[]
	sendPrompt: (prompt: string) => void
}

export const useChatStore = create<chatState>((set, get) => ({
	messages: [],
	sendPrompt: async (prompt: string) => {
		// const aiId = get().messages.length + 1
		const randomIdUser = uuidv4()
		const randomIdIA = uuidv4()

		set((state) => ({
			messages: [
				...state.messages,
				{
					id: randomIdUser,
					ai: false,
					message: prompt
				},
				{
					id: randomIdIA,
					ai: true,
					message: ''
				}
			]
		}))

		try {
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ prompt })
			})

			const json = await response.json()

			set((state) => ({
				messages: state.messages.map((entry) => {
					if (entry.id === randomIdIA) {
						return {
							...entry,
							message: json.response
						}
					}
					return entry
				})
			}))
		} catch (error) {
			console.error(error)
		}
	}
}))
