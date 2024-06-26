import { Session } from "next-auth";
import { Rights } from "./auth";
import { NextRequest } from "next/server";

export interface NextAuthRequest extends NextRequest {
    auth: Session | null;
}

const checkAdminRights = (req: NextAuthRequest, check: (rights: Rights) => boolean) => {
    const rights = req.auth?.user.rights;
    if (rights && check(rights)) {
        console.log("✅ allowed");
        return 200;
    } else if (rights) {
        console.log("🚫 logged in but not allowed");
        return 403;
    } else {
        console.log("🔒 protected and not logged in");
        return 401;
    }
};

const routes = {
    "/": (_: NextAuthRequest) => 200,
    "/about": (_: NextAuthRequest) => 200,
    "/blog": (_: NextAuthRequest) => 200,
    "/contact": (_: NextAuthRequest) => 200,
    "/test": (_: NextAuthRequest) => (process.env.DEV_MODE ? 200 : 404),
    "/form": (_: NextAuthRequest) => 200,
    "/faq": (_: NextAuthRequest) => 200,
    "/ieseg": (_: NextAuthRequest) => 200,
    "/offer": (_: NextAuthRequest) => 200,
    "/legal-mentions": (_: NextAuthRequest) => 200,
    "/admin/form-submission": (req: NextAuthRequest) => checkAdminRights(req, (r: Rights) => r.formAdmin),
    "/admin/users": (req: NextAuthRequest) => checkAdminRights(req, (r: Rights) => r.userAdmin),
    "/admin/blog/new": (req: NextAuthRequest) => checkAdminRights(req, (r: Rights) => r.blogAuthor),
    "/admin/blog/validation": (req: NextAuthRequest) => checkAdminRights(req, (r: Rights) => r.blogAdmin)
};

export const getAuthorisationCode = (req: NextAuthRequest, localelesspath: string): number => {
    if (localelesspath in routes) {
        const getCode = routes[localelesspath as keyof typeof routes];
        return getCode(req);
    } else if (/^\/admin\/blog\/edit\/\d+$/.test(localelesspath)) {
        return checkAdminRights(req, (r: Rights) => r.blogAuthor);
    } else {
        return 404;
    }
};
