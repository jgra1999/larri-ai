import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'

type CardProps = {
	name: string
	message: string
	notification: string
	icon: React.ReactElement
	children: React.ReactElement
}

export function CheckoutCard({
	name,
	icon,
	children,
	message,
	notification
}: CardProps) {
	return (
		<>
			<CopyToClipboard text={message}>
				<button
					className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow w-80 lg:w-full lg:flex-row md:max-w-xl hover:bg-gray-100'
					onClick={() => toast.success(`${notification}`)}
				>
					<div className='flex items-center justify-center w-full rounded-t-lg h-64 lg:h-[152px] lg:w-1/2 md:rounded-none lg:rounded-l-lg bg-gray-100'>
						{icon}
					</div>
					<div className='flex flex-col py-4 px-6 leading-normal w-full'>
						<h5 className='mb-2 text-2xl font-bold tracking-tight text-newDark text-left'>
							{name}
						</h5>
						{children}
					</div>
				</button>
			</CopyToClipboard>
			<Toaster />
		</>
	)
}
