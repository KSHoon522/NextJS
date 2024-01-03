import Layout from "@/components/Layout";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          max-width: 520px;
          width: 100%;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  );
}
