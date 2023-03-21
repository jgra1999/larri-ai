import React, { useState } from 'react'
import { supabase } from '@/supabase/client'
import { CheckoutFormValues } from '@/types/form'
import { useRouter } from 'next/router'

/* components */
import { Formik, Field, FormikHelpers, Form, ErrorMessage } from 'formik'
import { FormikInput } from '../forms/FormikInput'
import { Button } from '../forms/Button'

/* icons */
import {
	ViewfinderCircleIcon,
	CalendarDaysIcon,
	UserCircleIcon,
	BuildingLibraryIcon,
	BanknotesIcon
} from '@heroicons/react/24/solid'
import { LoadingIcon } from '../Icons'

/* Validations */
import {
	validateSimpleName,
	validateUserName,
	validateAmount,
	validateDate,
	validateRef
} from '@/hooks/useFormValidation'

export function FormikCheck() {
	const [isSending, setIsSending] = useState(false)
	const router = useRouter()
	const initialValues: CheckoutFormValues = {
		bank: undefined,
		account_holder: undefined,
		amount: undefined,
		date: undefined,
		num_ref: undefined
	}

	const handleSubmit = async (
		values: CheckoutFormValues,
		{ setSubmitting }: FormikHelpers<CheckoutFormValues>
	) => {
		const { bank, account_holder, amount, date, num_ref } = values
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
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className='w-3/4 max-w-[500px] space-y-8 mt-10 xl:mt-0'>
				<FormikInput
					label='Banco'
					name='bank'
					inputType='text'
					placeholder='Indícanos desde que banco hiciste el pago'
					icon={<BuildingLibraryIcon className='w-5 h-5 text-gray-400' />}
					validate={validateSimpleName}
					value={initialValues.bank}
				/>
				<FormikInput
					label='Titular de la Cuenta'
					name='account_holder'
					inputType='text'
					placeholder='Ingresa tu nombre y apellido'
					icon={<UserCircleIcon className='w-5 h-5 text-gray-400' />}
					validate={validateUserName}
					value={initialValues.account_holder}
				/>
				<div className='relative'>
					<label
						htmlFor='amount'
						className='block mb-2 text-lg md:text-sm font-normal text-gray-500'
					>
						Monto transferido
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<BanknotesIcon className='w-5 h-5 text-gray-400' />
						</div>
						<Field
							type='number'
							step={0.01}
							name='amount'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-lg md:text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full pl-12 p-2.5 outline-none'
							placeholder='Indícanos la cantidad que transferiste'
							validate={validateAmount}
							value={initialValues.amount}
						/>
					</div>
					<ErrorMessage name='amount'>
						{(msg) => (
							<div className='text-red-600 font-medium text-xs absolute -bottom-5 left-0'>
								{msg}
							</div>
						)}
					</ErrorMessage>
				</div>
				<FormikInput
					label='Fecha de realización'
					name='date'
					inputType='date'
					placeholder=''
					icon={<CalendarDaysIcon className='w-5 h-5 text-gray-400' />}
					value={initialValues.date}
					validate={validateDate}
				/>
				<FormikInput
					label='Numero de referencia'
					name='num_ref'
					inputType='number'
					placeholder='Ingresa los últimos 4 dígitos'
					icon={<ViewfinderCircleIcon className='w-5 h-5 text-gray-400' />}
					value={initialValues.num_ref}
					validate={validateRef}
				/>
				<Button Btype='submit' text={isSending ? <LoadingIcon /> : 'Enviar'} />
			</Form>
		</Formik>
	)
}
