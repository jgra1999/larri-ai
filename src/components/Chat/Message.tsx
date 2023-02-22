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
		? 'https://cdn-icons-png.flaticon.com/512/320/320333.png'
		: 'https://s.yimg.com/ny/api/res/1.2/2iiZwBhBaDu1et6MfAUPDQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-07/1134c300-f145-11eb-bbdb-09530ba7e5bc'

	const textElement = ai ? <TypingEffect text={message} /> : message

	const handleNotify = () => toast.success('Copiado en portapapeles')

	return (
		<div
			className={`flex py-8 px-4 md:px-20 lg:px-52 w-full relative ${
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
					<div className='w-full break-words text-sm md:text-base leading-6 font-medium'>
						<p>{textElement}</p>
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
