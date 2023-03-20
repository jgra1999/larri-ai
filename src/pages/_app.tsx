import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps<{}>) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

//TODO: Setear y revisar las la seguridad de los incios de sesion con gmail, facebook y twitter antes de ir a produccion
