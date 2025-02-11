import { Outlet } from "@modern-js/runtime/router";
import DreamLayout from "../components/layout";

import { DreamMFLogListener } from "@dream.mf/logging";
import { DreamMFAuthProvider } from "@dream.mf/oidc";
// Dream features & configuration
import { setupRosRuntime } from "@dream.mf/ros";
import { useEffect } from "react";
import setupAuthentication from "../config/setup-auth";
import setupLogging from "../config/setup-logging";

const Layout = () => {
	useEffect(() => {
		setupRosRuntime(
			process.env.NX_PUBLIC_DREAM_ROS_API,
			process.env.NX_PUBLIC_DREAM_ROS_ACCESSKEY,
		);
	}, []);

	return (
		<>
			<DreamMFLogListener config={setupLogging()} />
			<DreamMFAuthProvider config={setupAuthentication()}>
				<DreamLayout>
					<Outlet />
				</DreamLayout>
			</DreamMFAuthProvider>
		</>
	);
};

export default Layout;
