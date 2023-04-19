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
	const avatar = ai ? '/img/chat-icon.jpg' : '/img/default-img.png'

	const textElement = ai ? <TypingEffect text={message} /> : message

	const handleNotify = () => toast.success('Copiado en portapapeles')

	return (
		<div
			className={`flex py-8 px-4 md:px-20 lg:px-52 w-full relative object-none object-bottom ${
				ai ? 'bg-white' : ''
			}`}
		>
			<article className='flex items-start justify-between w-full gap-4'>
				<Avatar>
					<img
						src={avatar}
						alt='Avatar'
						className='w-8 h-8 lg:w-10 lg:h-10 rounded-full'
					/>
				</Avatar>

				<div className='min-h-[20px] flex items-start gap-4 whitespace-pre-wrap flex-1'>
					<div className='w-full break-words text-sm md:text-base leading-6'>
						<p className='font-medium'>{textElement}</p>
					</div>
				</div>
				{ai && (
					<CopyToClipboard text={message}>
						<button onClick={handleNotify}>
							<ClipboardIcon className='w-4 h-4 text-gray-500 lg:hover:text-primary active:text-primary' />
						</button>
					</CopyToClipboard>
				)}
			</article>
			<Toaster />
		</div>
	)
}
