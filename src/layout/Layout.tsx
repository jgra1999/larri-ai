import React from 'react'
import Head from 'next/head'
import { Header } from './Header'
import { CookiesBanner } from '@/components/CookiesBanner'

type Props = {
	children: React.ReactElement
	title?: string
	showHeader: boolean
	bg?: boolean
	googleIndex: boolean
	metaDescription?: string
	metaKeywords?: string
}

export function Layout({
	children,
	title = 'Larri AI',
	showHeader,
	bg,
	googleIndex,
	metaDescription,
	metaKeywords
}: Props) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={metaDescription} />
				<meta name='keywords' content={metaKeywords} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
				{!googleIndex ? (
					<meta name='robots' content='noindex,nofollow' />
				) : (
					<meta name='robots' content='all' />
				)}
			</Head>

			{showHeader ? <Header bgWhiteColor={bg} /> : ''}

			{children}

			<CookiesBanner />
		</div>
	)
}
