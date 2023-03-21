import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps<{}>) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.png' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

//TODO: Setear y revisar las la seguridad de los incios de sesion con gmail, facebook y twitter antes de ir a produccion
