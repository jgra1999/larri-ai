import React, { useRef } from 'react'
import { eForm } from '@/types/form'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import { useChatStore } from '@/store/chat'

type eKeyBoard = React.KeyboardEvent<HTMLTextAreaElement>

export function ChatForm() {
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
	const { sendPrompt } = useChatStore()

	const handleSubmit = (e: eForm) => {
		e?.preventDefault()

		if (textAreaRef.current?.value) {
			sendPrompt(textAreaRef.current?.value)
		}

		if (textAreaRef.current) {
			textAreaRef.current.value = ''
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSubmit(e)
		}
	}

	const handleKeyUp = (e: eKeyBoard) => {
		e.currentTarget.style.height = '24px'
		let textAreaHeight = e.currentTarget.scrollHeight

		if (textAreaRef.current) {
			textAreaRef.current.style.height = `${textAreaHeight}px`
		}
	}

	return (
		<>
			<div className='absolute bottom-5 left-0 right-0'>
				<form
					className='flex flex-row w-11/12 max-w-4xl m-auto rounded-xl shadow bg-white'
					onSubmit={handleSubmit}
					onKeyDown={handleKeyDown}
				>
					<div className='relative flex flex-col flex-grow w-full px-4 py-3 text-newDark rounded-md'>
						<textarea
							name='message'
							rows={1}
							className='w-full h-[24px] resize-none bg-transparent m-0 outline-none max-h-40 pr-5 caret-primary font-medium'
							autoFocus
							tabIndex={0}
							defaultValue=''
							ref={textAreaRef}
							onKeyUp={handleKeyUp}
						></textarea>
						<button className='absolute right-2 bottom-2.5 p-1 hover:bg-lightGray rounded-lg transition-colors duration-200'>
							<ArrowUpCircleIcon className='w-6 h-6 text-primary' />
						</button>
					</div>
				</form>
				<div className='text-center mt-2'>
					<p className='text-gray-400 text-[10px]'>
						Presiona shift + enter para hacer un salto de linea
					</p>{' '}
				</div>
			</div>
		</>
	)
}
