import React, { useRef } from 'react'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

type Event = React.KeyboardEvent<HTMLTextAreaElement>

export function ChatForm() {
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

	const handleKeyUp = (e: Event) => {
		e.currentTarget.style.height = '24px'
		let textAreaHeight = e.currentTarget.scrollHeight

		console.log()

		if (textAreaRef.current) {
			textAreaRef.current.style.height = `${textAreaHeight}px`
		}
	}

	return (
		<div className='absolute bottom-10 left-0 right-0'>
			<form className='flex flex-row w-11/12 max-w-4xl m-auto rounded-xl shadow bg-white'>
				<div className='relative flex flex-col flex-grow w-full px-4 py-3 text-newDark rounded-md'>
					<textarea
						name='message'
						rows={1}
						className='w-full h-[24px] resize-none bg-transparent m-0 outline-none max-h-40 pr-5'
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
		</div>
	)
}
