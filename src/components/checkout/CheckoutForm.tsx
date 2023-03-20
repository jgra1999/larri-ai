import React, { useState } from 'react'
import { supabase } from '@/supabase/client'
import { eForm } from '@/types/form'
import { useRouter } from 'next/router'

/* components */
import { Button } from '../forms/Button'
import { Input } from '../forms/Input'

// import { Formik } from "formik";

/* icons */
import {
	ViewfinderCircleIcon,
	CalendarDaysIcon,
	UserCircleIcon,
	BuildingLibraryIcon,
	BanknotesIcon
} from '@heroicons/react/24/solid'
import { LoadingIcon } from '../Icons'

export function CheckoutForm() {
	const [isSending, setIsSending] = useState(false)
	const router = useRouter()

	const handleSubmit = async (e: eForm) => {
		e.preventDefault()

		const bank = (e.currentTarget.elements[0] as HTMLInputElement).value
		const account_holder = (e.currentTarget.elements[1] as HTMLInputElement).value
		const amount = (e.currentTarget.elements[2] as HTMLInputElement).value
		const date = (e.currentTarget.elements[3] as HTMLInputElement).value
		const num_ref = (e.currentTarget.elements[4] as HTMLInputElement).value

		try {
			setIsSending(true)
			const {
				data: { user }
			} = await supabase.auth.getUser()

			const { error } = await supabase.from('payments').insert({
				bank,
				account_holder,
				amount,
				date,
				num_ref,
				user_id: user?.id
			})
		} catch (error) {
			console.error(error)
		} finally {
			setIsSending(false)
			router.push('/perfil')
		}
	}

	return (
		<form
			className='w-3/4 max-w-[500px] space-y-8 mt-10 xl:mt-0'
			onSubmit={handleSubmit}
		>
			<Input
				label='Banco'
				name='bank'
				inputType='text'
				placeholder='Indícanos desde que banco hiciste el pago'
				icon={<BuildingLibraryIcon className='w-5 h-5 text-gray-400' />}
			/>
			<Input
				label='Titular de la Cuenta'
				name='accountHolder'
				inputType='text'
				placeholder='Ingresa tu nombre y apellido'
				icon={<UserCircleIcon className='w-5 h-5 text-gray-400' />}
			/>
			<div>
				<label
					htmlFor='quantity'
					className='block mb-2 text-lg md:text-sm font-normal text-gray-500'
				>
					Monto transferido
				</label>
				<div className='relative'>
					<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
						<BanknotesIcon className='w-5 h-5 text-gray-400' />
					</div>
					<input
						type='number'
						step={0.01}
						name='quantity'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-lg md:text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full pl-12 p-2.5 outline-none'
						placeholder='Indícanos la cantidad que transferiste'
					/>
				</div>
			</div>
			<Input
				label='Fecha de realización'
				name='date'
				inputType='date'
				placeholder=''
				icon={<CalendarDaysIcon className='w-5 h-5 text-gray-400' />}
			/>
			<Input
				label='Numero de referencia'
				name='referenceNumber'
				inputType='number'
				placeholder='Ingresa los últimos 4 dígitos'
				icon={<ViewfinderCircleIcon className='w-5 h-5 text-gray-400' />}
			/>
			<Button text={isSending ? <LoadingIcon /> : 'Enviar'} />
		</form>
	)
}
