
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { ConnectDB } from "@util/database";
import User from "models/users";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async signIn({ profile }) {
            try {
                await ConnectDB();

                const userExists = await User.findOne({ email: profile.email });

                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name,
                        image: profile.picture,
                    });
                }
                return true;
            } catch (error) {
                console.error("Sign-in error:", error);
                return false;
            }
        },
    },
    pages: {
        signIn: "/auth/signin",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };