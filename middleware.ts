import { NextResponse } from "next/server";

export const middleware = (res: {
       nextUrl: { pathname: string };
       url: string | URL | undefined;
}) => {
       return NextResponse.redirect(new URL('/login', res.url))
};

export const config = {
       matcher: ["/userlist:path*"],
};
