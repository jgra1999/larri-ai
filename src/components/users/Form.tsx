import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/client'
import { useUserStore } from '@/store/user'
import { eForm } from '@/types/form'

/* Components */
import { Input } from '../forms/Input'
import { Checkbox } from '../forms/CheckBox'
import { Button } from '../forms/Button'

/* Icons */
import { UserIcon, AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { LoadingIcon } from '../Icons'

export function Form() {
	const [isSending, setIsSending] = useState(false)
	const { profile, setProfile } = useUserStore()

	const router = useRouter()

	const handleSubmit = async (e: eForm) => {
		e.preventDefault()

		const fullName = (e.currentTarget.elements[0] as HTMLInputElement).value
		const username = (e.currentTarget.elements[1] as HTMLInputElement).value
		const phone = (e.currentTarget.elements[2] as HTMLInputElement).value
		const isStudent = (e.currentTarget.elements[3] as HTMLInputElement).checked

		try {
			setIsSending(true)
			const {
				data: { user }
			} = await supabase.auth.getUser()

			const { error } = await supabase.from('profiles').insert({
				user_name: username,
				full_name: fullName,
				phone: phone,
				is_student: isStudent,
				user_id: user?.id
			})
		} catch (error) {
			console.error(error)
		} finally {
			setIsSending(false)
			router.push('/prices')
		}
	}

	return (
		<form className='lg:w-1/3 mx-auto space-y-8 mt-28 px-5' onSubmit={handleSubmit}>
			<h3 className='font-bold text-5xl text-center'>
				<span className='text-primary'>Completa</span> tu perfil
			</h3>

			<Input
				label='Nombre y Apellido'
				name='name'
				inputType='text'
				placeholder='Joe Doe'
				icon={<UserIcon className='w-5 h-5 text-gray-400' />}
			/>

			<Input
				label='Username'
				name='username'
				inputType='text'
				placeholder='joeDoe123'
				icon={<AtSymbolIcon className='w-5 h-5 text-gray-400' />}
			/>

			<Input
				label='Teléfono'
				name='phone'
				inputType='text'
				placeholder='0123456789'
				icon={<PhoneIcon className='w-5 h-5 text-gray-400' />}
			/>

			<Checkbox text='Eres estudiante?' name='isStudent' />

			<Button Btype='submit' text={isSending ? <LoadingIcon /> : 'Guardar'} />
		</form>
	)
}
