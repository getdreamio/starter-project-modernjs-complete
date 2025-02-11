import { DreamMFAuthRoute } from "@dream.mf/oidc";
import { useNavigate } from "@modern-js/runtime/router";
import React from "react";

const AuthPage = () => {
	const navigate = useNavigate();
	return (
		<DreamMFAuthRoute
			onBeforeRedirect={() => {}}
			navigate={navigate}
			loginMessage={"Logging you in..."}
		/>
	);
};

export default AuthPage;
