import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl41i5arf37e101xs9dmq4usk/master"
);

const QUERY = gql`
  {
    destinations {
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
          {destinations.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
