/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en'
	},
	env: {
		OPENAI_API_KEY: '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',
		NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID: 'ca-pub-8979322655331375',
		NEXT_PUBLIC_GOOGLE_ANALYTICS: 'G-Z0362T3MC6',
		NEXT_PUBLIC_SUPABASE_URL: 'https://odhjapsnjwljayyvfjem.supabase.co',
		NEXT_PUBLIC_SUPABASE_ANON_KEY:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kaGphcHNuandsamF5eXZmamVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTc5MDAsImV4cCI6MTk5MzQzMzkwMH0.VHjOe3fiPbFRIjLAjQPxbf7zVILxqLVxyGq8NGjTOf0'
	}
}

module.exports = nextConfig
