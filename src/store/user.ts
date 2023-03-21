import { create } from 'zustand'

interface UserI {
	id: number | null
	full_name: string
	city: string
	phone: number | null
	user_id: string
	is_student: boolean
	updated_at: string
	created_at: string
	free_plan: boolean
	payment_plan: boolean
}

type State = {
	profile: any
}

type Actions = {
	setProfile: (profile: any) => void
	logout: () => void
}

export const useUserStore = create<State & Actions>((set, get) => ({
	// profile: {
	// 	id: null,
	// 	full_name: '',
	// 	city: '',
	// 	phone: null,
	// 	user_id: '',
	// 	is_student: false,
	// 	updated_at: '',
	// 	created_at: '',
	// 	free_plan: false,
	// 	payment_plan: false
	// },

	profile: '',

	setProfile: (profile: any) =>
		set((state) => ({
			profile
		})),

	logout: () =>
		set((state) => ({
			profile: ''
		}))
}))