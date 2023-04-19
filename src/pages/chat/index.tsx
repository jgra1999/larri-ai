import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useChatStore } from '@/store/chat'
import { useUserStore } from '@/store/user'
import { supabase } from '@/supabase/client'

import { Layout } from '@/layout/Layout'
import { ChatForm } from '@/components/Chat/ChatForm'
import { Message } from '@/components/Chat/Message'

interface IEntry {
	id: string
	ai: boolean
	message: string
}

export default function index() {
	const router = useRouter()

	const { profile, setProfile } = useUserStore()

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const {
					data: { user }
				} = await supabase.auth.getUser()

				const { data, error } = await supabase
					.from('profiles')
					.select()
					.eq('user_id', user?.id)

				if (data?.length === 0) {
					router.push('/completar-perfil')
					return
				}

				setProfile(data?.[0])
			} catch (error) {
				console.error(error)
			}
		}

		if (!profile?.user_id) {
			fetchUserData()
		}

		if (profile?.free_plan) {
			const current_date = new Date()
			const plan_duration = 3 * 24 * 60 * 60 * 1000
			const last_update_date = new Date(profile?.updated_at)

			if (current_date.getTime() - last_update_date.getTime() >= plan_duration) {
				router.push('/perfil')
			}
		}

		if (profile?.payment_plan) {
			const current_date = new Date()
			const plan_duration = 30 * 24 * 60 * 60 * 1000
			const last_update_date = new Date(profile?.updated_at)

			if (current_date.getTime() - last_update_date.getTime() >= plan_duration) {
				router.push('/perfil')
			}
		}
	}, [])

	const { messages } = useChatStore()

	const messagesContainer = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (messagesContainer.current) {
			messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
		}
	}, [messages])

	return (
		<div className='w-full h-screen relative'>
			<Layout
				title='Larri AI - Chat'
				showHeader={true}
				bg={true}
				googleIndex={false}
			>
				<>
					<div
						className='flex flex-col h-[78vh] overflow-y-auto'
						ref={messagesContainer}
					>
						{messages.map((entry: IEntry) => (
							<Message key={entry.id} message={entry.message} ai={entry.ai} />
						))}
						<ChatForm />
					</div>
				</>
			</Layout>
		</div>
	)
}
