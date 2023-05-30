import React from 'react'
import { ChatForm } from './ChatForm'
import { useChatStore } from '@/store/chat'
import { Message } from './Message'

interface IEntry {
	id: string
	ai: boolean
	message: string
}

export function ChatContainer() {
	const { messages } = useChatStore()

	/* 
        const messagesContainer = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (messagesContainer.current) {
			messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
		}
	}, [messages])
    */

	return (
		<div className='bg-white w-11/12 md:w-3/4 h-[650px] mx-auto shadow-md container rounded-xl my-10 relative'>
			<div className='overflow-y-auto h-[540px] w-full py-4 px-5'>
				{messages.map((entry: IEntry) => (
					<Message key={entry.id} message={entry.message} ai={entry.ai} />
				))}
				<ChatForm />
			</div>
		</div>
	)
}
