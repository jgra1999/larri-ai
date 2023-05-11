import React, { useState } from 'react'
import { UserFormValues } from '@/types/form'

/* Components */
import { Formik, Form, Field } from 'formik'
import { FormikInput } from '../forms/FormikInput'
import { Button } from '../forms/Button'

/* Icons */
import { UserIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { LoadingIcon } from '../Icons'

/* Validations */
import {
	validatePhone,
	validateSimpleName,
	validateUserName
} from '@/hooks/useFormValidation'
import { supabase } from '@/supabase/client'
import { useRouter } from 'next/router'
import { Checkbox } from '../forms/CheckBox'

interface userFormProp {
	userEmail: string | undefined
}

export function UserForm({ userEmail }: userFormProp) {
	const [isSending, setIsSending] = useState(false)
	const router = useRouter()

	const initialValues: UserFormValues = {
		full_name: undefined,
		email: userEmail,
		city: undefined,
		phone: undefined,
		is_student: false,
		terms: false
	}

	const handleSubmit = async (values: UserFormValues) => {
		const { full_name, city, phone, is_student, email } = values

		try {
			setIsSending(true)
			const {
				data: { user }
			} = await supabase.auth.getUser()

			const { error } = await supabase.from('profiles').insert({
				full_name,
				email,
				city,
				phone,
				is_student,
				user_id: user?.id
			})
		} catch (error) {
			console.error(error)
		} finally {
			setIsSending(false)
			router.push('/planes')
		}
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className='lg:w-1/3 mx-auto space-y-8 mt-28 px-5'>
				<h3 className='font-bold text-5xl text-center'>
					<span className='text-primary'>Completa</span> tu perfil
				</h3>
				<FormikInput
					label='Nombre y Apellido'
					name='full_name'
					inputType='text'
					placeholder='Joe Doe'
					icon={<UserIcon className='w-5 h-5 text-gray-400' />}
					validate={validateUserName}
					value={initialValues.full_name}
				/>
				<FormikInput
					label='Correo Electrónico'
					name='email'
					inputType='text'
					placeholder=''
					icon={<UserIcon className='w-5 h-5 text-gray-400' />}
					value={initialValues.email}
				/>
				<FormikInput
					label='Ciudad'
					name='city'
					inputType='text'
					placeholder='Caracas'
					icon={<MapPinIcon className='w-5 h-5 text-gray-400' />}
					validate={validateSimpleName}
					value={initialValues.city}
				/>

				<FormikInput
					label='Teléfono'
					name='phone'
					inputType='tel'
					placeholder='0123456789'
					icon={<PhoneIcon className='w-5 h-5 text-gray-400' />}
					value={initialValues.phone}
					validate={validatePhone}
				/>

				<div className='space-y-2'>
					<div>
						<Field
							type='checkbox'
							id='isStudent'
							name='is_student'
							className='hidden'
						/>
						<label
							htmlFor='isStudent'
							className='inline-block
									py-1
									pr-4
									pl-10
									text-sm
												text-gray-500
									font-medium
									relative
									cursor-pointer
									transition-all
									duration-300
									before:content-[""]
									before:w-4
									before:h-4
									before:inline-block
									before:border-2
									before:border-gray-300
									before:bg-white
												before:rounded
									before:absolute
									before:top-2
									before:left-3'
						>
							Eres estudiante?
						</label>
					</div>

					<div>
						<Field type='checkbox' name='terms' id='terms' className='hidden' />
						<label
							htmlFor='terms'
							className='inline-block
									py-1
									pr-4
									pl-10
									text-sm
								text-gray-500
									font-medium
									relative
									cursor-pointer
									transition-all
									duration-300
									before:content-[""]
									before:w-4
									before:h-4
									before:inline-block
									before:border-2
									before:border-gray-300
									before:bg-white
												before:rounded
									before:absolute
									before:top-2
									before:left-3'
						>
							Has leído y estas de acuerdo con nuestros{' '}
							<a
								href='/terminos-y-condiciones'
								target='_blank'
								className='text-primary'
							>
								términos y condiciones?
							</a>
						</label>
					</div>
				</div>

				<Button Btype='submit' text={isSending ? <LoadingIcon /> : 'Guardar'} />
			</Form>
		</Formik>
	)
}
