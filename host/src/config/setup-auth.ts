import { BaseAuthConfig, DreamMFAuthConfig } from "@dream.mf/oidc";

const setupAuthentication = () => {
	return {
		...BaseAuthConfig,
		skipSigninCallback: false,
		authority: process.env.NX_PUBLIC_OAUTH_AUTHORITY || "",
		client_id: process.env.NX_PUBLIC_OAUTH_CLIENT_ID || "",
		client_secret: process.env.NX_PUBLIC_OAUTH_CLIENT_SECRET || "",
		redirect_uri: process.env.NX_PUBLIC_OAUTH_REDIRECT_URL || "",
		scope: process.env.NX_PUBLIC_OAUTH_SCOPE || "",
		post_logout_redirect_uri: process.env.NX_PUBLIC_OAUTH_POST_LOGOUT_URL || "",
		metadataUrl: process.env.NX_PUBLIC_OAUTH_WELL_KNOWN_URL || "",
		useFetchInterceptor: true,
	} as DreamMFAuthConfig;
};

export default setupAuthentication;
