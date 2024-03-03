import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps<{}>) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.png' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
			</Head>

			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Script
				src='https://www.googletagmanager.com/gtag/js?id=G-Z0362T3MC6'
				strategy='afterInteractive'
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Z0362T3MC6', {
			page_path: window.location.pathname,
		  });
        `}
			</Script>

			<Script
				async
				src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
				strategy='lazyOnload'
				crossOrigin='anonymous'
			></Script>

			<Component {...pageProps} />
		</>
	)
}

//TODO: Setear y revisar las la seguridad de los incios de sesion con gmail, facebook y twitter antes de ir a produccion
