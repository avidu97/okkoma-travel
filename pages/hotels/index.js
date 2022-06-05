import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl41i5arf37e101xs9dmq4usk/master"
);

const QUERY = gql`
  {
    hotels {
      id
      name
    }
  }
`;

export async function getStaticProps() {
  const { hotels } = await graphcms.request(QUERY);

  return {
    props: {
      hotels,
    },
  };
}

export default function HotelPage({ hotels }) {
  return (
    <div>
      <Head></Head>
      <div>
        <h1>This is the Hotel Homepage</h1>
        <ul>
          {hotels.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
