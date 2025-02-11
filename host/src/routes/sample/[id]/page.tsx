import { ImportRemoteOptions, importRemote } from "@dream.mf/core";
import { DreamMFAuthGuard } from "@dream.mf/oidc";
import { useGetRemoteByAccessKey } from "@dream.mf/ros";
import { useParams } from "@modern-js/runtime/router";
import React, { Suspense } from "react";
import PageLoader from "../../../components/page-loader";

const SamplePage = () => {
	const { id } = useParams();

	const SampleRemote = React.lazy(async () => {
		try {
			const remote = await useGetRemoteByAccessKey({
				rosUrl: process.env.NX_PUBLIC_DREAM_ROS_API,
				accessKey: process.env.NX_PUBLIC_DREAM_ROS_ACCESSKEY,
				remoteKey: "remote_sample",
			});
			return importRemote({
				remoteUrl: remote?.url,
				scope: remote?.scope || "remote_sample",
				module: "SamplePage",
				remoteUrlFallback: process.env.NX_PUBLIC_REMOTE_SAMPLE_URL,
			} as ImportRemoteOptions);
		} catch (error) {
			return <>Error: Unable to find remote via ros.</>;
		}
	});

	return (
		<div className="p-4">
			<DreamMFAuthGuard
				fallback={
					<div className="p-2 text-center">
						Redirecting you to the auth provider...
					</div>
				}
			>
				<Suspense fallback={<PageLoader />}>
					<SampleRemote id={id} />
				</Suspense>
			</DreamMFAuthGuard>
		</div>
	);
};

export default SamplePage;
