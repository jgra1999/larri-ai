import React from 'react'
import Head from 'next/head'
import { Header } from './Header'

type Props = {
	children: React.ReactElement
	title?: string
	showHeader: boolean
	bg?: boolean
}

export function Layout({ children, title = 'Larri AI', showHeader, bg }: Props) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{showHeader ? <Header bgWhiteColor={bg} /> : ''}

			{children}
		</div>
	)
}
