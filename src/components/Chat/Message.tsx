import React from 'react'
import { Avatar } from './Avatar'
import { TypingEffect } from './TypingEffect'

import { ClipboardIcon } from '@heroicons/react/24/outline'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'

type Props = {
	message: string
	ai: boolean
}

export function Message({ message, ai }: Props) {
	const avatar = ai
		? 'https://res.cloudinary.com/hothra/image/upload/v1684519492/Larri-AI/chat-icon_pc3pqo.jpg'
		: '/img/default-img.png'

	const textElement = ai ? <TypingEffect text={message} /> : message

	const handleNotify = () => toast.success('Copiado en portapapeles')

	return (
		<div
			className={`grid relative object-none object-bottom w-full ${
				ai ? 'text-start' : 'text-end'
			}`}
		>
			<article
				className={`flex items-start justify-between w-auto md:max-w-[45%] py-3 px-4  rounded-md shadow mb-8 ${
					ai
						? 'bg-primary text-white relative justify-self-start'
						: 'bg-gray-50 justify-self-end'
				}`}
			>
				{/* <Avatar>
					<img
						src={avatar}
						alt='Avatar'
						className='w-8 h-8 lg:w-10 lg:h-10 rounded-full'
					/>
				</Avatar> */}

				<div className='min-h-[20px] flex items-center gap-4 whitespace-pre-wrap flex-1'>
					<div className='w-full break-words text-sm  leading-6'>
						<p className='font-medium'>{textElement}</p>
					</div>
				</div>
				{ai && (
					<CopyToClipboard text={message}>
						<button onClick={handleNotify}>
							<ClipboardIcon className='w-4 h-4 text-gray-500 lg:hover:text-primary active:text-primary absolute -top-5 right-0' />
						</button>
					</CopyToClipboard>
				)}
			</article>
			<Toaster />
		</div>
	)
}
