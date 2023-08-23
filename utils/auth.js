import { PrismaAdapter } from "@next-auth/prisma-adapter";

import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "./connect.js";
import bcrypt from "bcryptjs";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "a",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "a",
        },
      },
      async authorize(credentials) {
        //Check if the user exists.
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("No user found");
        }

        //Check if the password is correct.
        const passwordValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!passwordValid) {
          throw new Error("Incorrect password");
        }

        //Return the user object.
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      });
      token.isAdmin = userInDb?.isAdmin;
      return token;
    },
  },
  pages: {
    error: "/api/auth/signin",
  },
  secret: process.env.SECRET,
};
