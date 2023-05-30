/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'es'
	},
	env: {
		OPENAI_API_KEY: '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', //esta es mi api key
		/* OPENAI_API_KEY: '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', */ // api de; work
		GOOGLE_ANALYTICS: 'G-3ZVBJ60L83',
		NEXT_PUBLIC_SUPABASE_URL: 'https://odhjapsnjwljayyvfjem.supabase.co',
		NEXT_PUBLIC_SUPABASE_ANON_KEY:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kaGphcHNuandsamF5eXZmamVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTc5MDAsImV4cCI6MTk5MzQzMzkwMH0.VHjOe3fiPbFRIjLAjQPxbf7zVILxqLVxyGq8NGjTOf0'
	}
}

module.exports = nextConfig
