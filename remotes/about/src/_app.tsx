import React from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
	return (
		<>
			<Helmet>
				<title>Dream.mf | About</title>
			</Helmet>
			<div>
				<h3 className="text-xl font-bold mb-2">Project Overview</h3>
				<p className="mb-4">
					This project is a microfrontend architecture demonstration using
					Dream.mf. It showcases the integration of multiple remote modules into
					a single application, allowing for independent development and
					deployment of different parts of the application.
				</p>
				<br />
				<h3 className="text-xl font-bold mb-2">Dream.mf Libraries</h3>
				<ul className="list-disc pl-5 mb-4">
					<li>
						Core - Import Remote and Runtime functionality (type DreamMF in
						console)
					</li>
					<li>OIDC - Authentication and user functionality</li>
					<li>Logging - Logging and error handling</li>
					<li>Bundlers - Out of the box build and deployment tools</li>
				</ul>
				<br />
				<h3 className="text-xl font-bold mb-2">Technologies Used</h3>
				<ul className="list-disc pl-5 mb-4">
					<li>React - A JavaScript library for building user interfaces</li>
					<li>React Router - For routing and navigation</li>
					<li>Tailwind CSS - A utility-first CSS framework for styling</li>
					<li>Dream.mf - A microfrontend framework for modular architecture</li>
					<li>
						Rspack - A fast build tool for bundling JavaScript applications
					</li>
				</ul>
			</div>
		</>
	);
};

export default AboutPage;
