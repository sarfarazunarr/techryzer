import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'
import {connectDB} from '../../../../lib/db_connection'
import User from '../../../../lib/models/userModel'
import bcrypt from 'bcryptjs'
const login = async (credentials) => {
    try {
        await connectDB()
        const user = await User.findOne({email: credentials.email})
        if(!user) throw new Error("Wrong Credentials");
        const isCorrect = await bcrypt.compare(credentials.password, user.password)
        if(!isCorrect) throw new Error("Wrong Credentials");
        return user;
    } catch (error) {
        throw new Error("Something went wrong")
    }
}


export const authOptions = {
    pages: {
        signIn: "/account/signin"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentails: {},
            async authorize(credentials){
                try {
                    const user = await login(credentials)
                    return user;
                } catch (error) {
                    throw new Error("Failed to login")
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.email = user.email;
                token.id = user.id;
                token.account_type = user.account_type
            }
            return token;
        },
        async session({session, token}){
            if(token){
                session.user.email = token.email;
                session.user.id = token.id;
                session.user.account_type = token.account_type;
            }
            return session;
        },
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}