import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

export default function Contact() {
  return (
    <Layout title="Contact" description="Contact Betalectic">
      <div className="container py-28">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col justify-center">
            <h1>Get in Touch with Us</h1>
            <p>
              How can we help you? Leave your contact details and we will get
              back to you..
            </p>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>

              <p className="font-bold my-auto">
                3rd Floor, Mitti’s Building, Near Divyashree Lanco Hills,
                Chaitanya Enclave, Manikonda, Hyderabad, Telangana - 500089
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>

            <Link
              className="font-bold my-auto"
              href="mailto:contact@betalectic.com"
            >
              contact@betalectic.com
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
