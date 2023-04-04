declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			PORT?: string;
			PWD: string;
			MONGODB_STRING: string;
			DEV_LOST_KONGO_MONGODB_STRING: string;
			GOOGLE_AUTH_SECRET: string;
			GOOGLE_AUTH_CLIENT_ID: string;
			NEXTAUTH_URL: string;
			NEXTAUTH_SECRET: string;
			GITHUB_CLIENT_ID: string;
			GITHUB_ACCOUNT_SECRET: string;
		}
	}
}

export { }