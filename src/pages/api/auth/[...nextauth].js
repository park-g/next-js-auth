import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  secret: process.env.SECRET,
  debug: process.env.NEXTAUTH_DEBUG_ENABLED,
  theme: {
    colorScheme: "auto",
    brandColor: "#ff0000",
    logo: ""
  }
});
