import { useDreamAuth } from "@dream.mf/oidc";
import { useNavigate } from "@modern-js/runtime/router";
import { useEffect } from "react";

const LogoutPage = () => {
	const auth = useDreamAuth();
	const navigate = useNavigate();

	useEffect(() => {
		auth.handleLogout(() => {
			navigate("/");
		}, true);
	}, [auth, navigate]);

	return <div className="p-2 text-center">Logging you out...</div>;
};

export default LogoutPage;
