import { Helmet } from "@modern-js/runtime/head";
import { useEffect, useState } from "react";
import logo from "../images/dream_logo.png";

const Index = () => {
	const [rosStatus, setRosStatus] = useState("Checking...");

	useEffect(() => {
		fetch("http://localhost:4000/health")
			.then((response) => response.text())
			.then((data) => {
				setRosStatus(data);
			})
			.catch((error) => {
				console.error("[ROS]", "Error fetching ROS status:", error);
				setRosStatus("Unable to communicate with ROS");
			});
	}, []);

	return (
		<>
			<Helmet>
				<title>Dream.mf | Home</title>
			</Helmet>
			<div className="p-4 text-center">
				<img
					src={logo}
					alt="Logo"
					style={{ height: 200 }}
					className="mx-auto"
				/>

				<p className="mt-8">
					Please ensure you have run the ROS setup script and are connected to
					the ROS network.
				</p>
				<p className="mb-2">
					Login Credentials: root@getdream.io / Dr34m!12345
				</p>
				<p>
					ROS Status:{" "}
					<span
						style={{
							padding: "4px 8px",
							borderRadius: "4px",
							backgroundColor:
								rosStatus === '"Service is healthy"' ? "#4ade80" : "#ef4444",
							color: "white",
						}}
					>
						{rosStatus}
					</span>
				</p>

				<p className="mb-2 mt-8">Frontend built in MODERN.js and @Dream.mf</p>

				<p className="mb-2 mt-8">
					This sample frontend is stubbed out with auth0 for the identity
					provider for testing purposes.
				</p>
				<p>Login Credentials: testuser@dream.mf / Password123</p>
			</div>
		</>
	);
};

export default Index;
