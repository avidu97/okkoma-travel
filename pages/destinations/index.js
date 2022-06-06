import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl41i5arf37e101xs9dmq4usk/master"
);

const QUERY = gql`
  {
    destinations {
      slug
      id
      name
    }
  }
`;

export async function getStaticProps() {
  const { destinations } = await graphcms.request(QUERY);

  return {
    props: {
      destinations,
    },
  };
}

export default function DestinationPage({ destinations }) {
  return (
    <div>
      <Head></Head>
      <div>
        <h1>This is destinations Home page</h1>
        <ul>
          {destinations.map(({ slug, name }) => (
            <Link href={`/destinations/${slug}`} key={slug}>
              <a>{name}</a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
