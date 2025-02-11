import React from "react";
import { Helmet } from "react-helmet";

export interface SampleProps {
	id: string;
}

const SamplePage = ({ id }: SampleProps) => {
	return (
		<>
			<Helmet>
				<title>Dream.mf | Sample</title>
			</Helmet>
			<div>
				<h2 className="text-2xl font-bold mb-4">Remote App - Sample</h2>
				<p className="mb-4">This is the sample remote application.</p>
				<p className="mb-4">Parameter: {id || "No id found"} </p>
			</div>
		</>
	);
};

export default SamplePage;
