export {default} from 'next-auth/middleware'
export const config = {
    matcher: ["/dashboard","/dashboard/user", "/dashboard/admin", "/dashboard/partner"]
}