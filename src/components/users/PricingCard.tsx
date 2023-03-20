import React from 'react'

type CardProps = {
	plan: string
	description: string
	price: string
	children: React.ReactElement
}

export function PricingCard({ plan, description, price, children }: CardProps) {
	return (
		<div className='bg-white rounded-lg px-6 py-5 w-[350px] space-y-8'>
			<div>
				<h4 className='text-xl font-medium mb-2'>{plan}</h4>
				<p className='text-sm text-gray-400'>{description}</p>
			</div>

			<p className='text-5xl font-bold'>
				{price}
				<span className='text-sm text-gray-500 font-medium'>/mensuales</span>
			</p>

			{children}
		</div>
	)
}
