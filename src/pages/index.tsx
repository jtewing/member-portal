import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.userRoute.hello.useQuery({ text: "Dancers & Friends" });

  return (
    <>
      <Head>
        <title>Hello World</title>
        <meta
          name="Momentum Member Portal"
          content="A place for people to check their account details."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#aaaaaa] to-[#f3f3f3]">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl">Welcome to the Momentum Portal</h1>
          <p className="text-2xl text-black">
            {hello.data ? hello.data.greeting : "Loading..."}
          </p>
          <AuthShowcase />
        </div>
      </main>
    </>
  );
};

export default Home;

// This may all be unnecessary
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.userRoute.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-black">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
