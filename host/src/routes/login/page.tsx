import { DreamMFAuthGuard } from "@dream.mf/oidc";
import { useEffect } from "react";

const LoginPage = () => {
	return (
		<DreamMFAuthGuard
			fallback={
				<div className="p-2 text-center">
					Redirecting you to the auth provider...
				</div>
			}
		>
			<div className="p-2 text-center">
				Note:This page should be replaced with whatever your login redirection
				structure looks like.
			</div>
		</DreamMFAuthGuard>
	);
};

export default LoginPage;
