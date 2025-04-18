import Head from "next/head";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <LogoGrid />
    </>
  );
}
