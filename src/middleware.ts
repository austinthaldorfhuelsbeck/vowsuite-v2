import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
	publicRoutes: ["/site", "/api/uploadthing"],
	async afterAuth(auth, req) {
		// rewrite for domains
		const url = req.nextUrl;
		const searchParams = url.searchParams.toString();
		let hostname = req.headers;

		const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

		// look for subdomain
		const customSubDomain = hostname
			.get("host")
			?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
			.filter(Boolean)[0];

		if (customSubDomain) {
			return NextResponse.rewrite(
				new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url),
			);
		}

		// look for sign in page
		if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
			return NextResponse.redirect(new URL("/agency/sign-in", req.url));
		}

		// look for root domain
		if (
			url.pathname === "/" ||
			(url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
		) {
			return NextResponse.rewrite(new URL("/site", req.url));
		}

		// look for dashboards
		if (
			url.pathname.startsWith("/agency") ||
			url.pathname.startsWith("/subaccount")
		) {
			return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url));
		}
	},
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}