import Layout from "@theme/Layout";

export default function About() {
  return (
    <Layout title="About" description="About Betalectic">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>About Betalectic</p>
      </div>
    </Layout>
  );
}
