import React, { useState } from 'react'
import { eForm } from '@/types/form'
import { Layout } from '@/layout/Layout'

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import {
	FacebookSolidIcon,
	TwitterSolidIcon,
	LoadingIcon,
	GmailSolidIcon
} from '@/components/Icons'

import { supabase } from '@/supabase/client'
import { CookiesBanner } from '@/components/CookiesBanner'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [isSending, setIsSending] = useState(false)
	const [checkEmail, setCheckEmail] = useState(false)

	const handleSubmit = async (e: eForm) => {
		e.preventDefault()

		try {
			setIsSending(true)
			const { data } = await supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: 'https://larri-ai.com/procesando'
					// emailRedirectTo: 'http://localhost:3000/procesando'
				}
			})
		} catch (error) {
			console.error(error)
		} finally {
			setIsSending(false)
			setCheckEmail(true)
		}
	}

	const signInWithGoogle = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'https://larri-ai.com/procesando'
			}
		})
	}

	// const signInWithFacebook = async () => {
	// 	const { data, error } = await supabase.auth.signInWithOAuth({
	// 		provider: 'facebook'
	// 	})
	// }

	return (
		<>
			<Layout title='Larri AI - Login' showHeader={true} googleIndex={true}>
				<main className='container mx-auto mt-28 w-full flex flex-col items-center '>
					<div className='flex flex-col items-center mb-6 px-2'>
						<img src='/img/icon.png' alt='Icon' className='w-28' />
						<h2 className='font-bold text-3xl xs:text-4xl mt-2'>
							Inicia sesión en tu cuenta
						</h2>
					</div>
					<div className='bg-white rounded-lg shadow w-11/12 md:max-w-lg px-8 py-4 flex flex-col gap-y-6'>
						<form onSubmit={handleSubmit}>
							{checkEmail ? (
								<div className='py-6'>
									<h4 className='text-2xl font-medium text-center text-primary'>
										Revisa la bandeja de entrada de tu email
									</h4>
								</div>
							) : (
								<div className='space-y-6'>
									<div>
										<label
											htmlFor='input-group-1'
											className='block mb-2 text-sm font-medium text-gray-500'
										>
											Magic Link
										</label>
										<div className='relative'>
											<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
												{<EnvelopeIcon className='w-5 h-5 text-gray-400' />}
											</div>
											<input
												type='email'
												id='input-group-1'
												className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full pl-12 p-2.5  outline-none'
												placeholder='Ingresa tu email'
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>
									</div>

									<button className='py-2 px-4 rounded-lg w-full text-lg bg-primary font-bold text-white hover:bg-[#fe984f] transition-colors duration-200 flex justify-center'>
										{isSending ? <LoadingIcon /> : 'Enviar'}
									</button>
								</div>
							)}
						</form>
						<div className='flex justify-between items-center text-center'>
							<div className='h-[1px] w-full bg-gray-300 flex-1'></div>
							<p className='flex-1 text-gray-400 text-sm font-medium'>
								O continua con
							</p>
							<div className='h-[1px] w-full bg-gray-300 flex-1'></div>
						</div>

						<div className='flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-0'>
							<button className='border-2 border-gray-300 py-2 px-12 rounded-lg group transition-colors duration-200 cursor-not-allowed'>
								<TwitterSolidIcon />
							</button>
							<button
								className='border-2 border-gray-300 hover:border-[#ea4335] py-2 px-12 rounded-lg group transition-colors duration-200'
								onClick={signInWithGoogle}
							>
								<GmailSolidIcon />
							</button>
							<button className='border-2 border-gray-300 py-2 px-12 rounded-lg group transition-colors duration-200 cursor-not-allowed'>
								<FacebookSolidIcon />
							</button>
						</div>
					</div>
					<CookiesBanner />
				</main>
			</Layout>
		</>
	)
}

/* twt: hover:border-[#2eb4e1] face: hover:border-[#3b5998]  */
