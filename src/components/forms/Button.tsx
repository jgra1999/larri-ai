import React from 'react'

type ButtonProps = {
	text: string | React.ReactElement
	Btype: 'button' | 'submit' | 'reset' | undefined
}

export function Button({ text, Btype }: ButtonProps) {
	return (
		<button
			type={Btype}
			className='py-2 px-4 rounded-lg w-36 text-lg bg-primary font-bold text-white hover:bg-[#fe984f] transition-colors duration-200 flex justify-center'
		>
			{text}
		</button>
	)
}
