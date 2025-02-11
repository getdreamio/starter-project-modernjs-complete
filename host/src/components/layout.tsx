import { DreamMFAuthGuard } from "@dream.mf/oidc";
import { Link, NavLink } from "@modern-js/runtime/router";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import favicon from "../images/dream_icon.png";
import "../index.css";

export interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-[#273360] p-4 text-white shadow-lg">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<img src={favicon} alt="Logo" className="h-8 w-8 mr-3" />
						<NavLink to="/" className="text-3xl">
							Dream.mf Starter
						</NavLink>
					</div>
					<nav className="flex space-x-4">
						<Link to="/" className="hover:underline">
							Home
						</Link>
						<Link to="/about" className="hover:underline">
							About
						</Link>
						<Link to="/sample/45" className="hover:underline">
							Sample
						</Link>
						<DreamMFAuthGuard stopRedirect={true} fallback={null}>
							<Link to="/logout" className="hover:underline">
								Logout
							</Link>
						</DreamMFAuthGuard>
					</nav>
				</div>
			</header>
			<main className="flex-1 container mx-auto pt-8">
				<div className="bg-[#212946] p-6 rounded-lg shadow-md text-white">
					<ErrorBoundary
						fallback={
							<div>
								Oops, an error has occurred when trying to render the page.
							</div>
						}
					>
						{children}
					</ErrorBoundary>
				</div>
			</main>
		</div>
	);
};

export default Layout;
