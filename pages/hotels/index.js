import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl41i5arf37e101xs9dmq4usk/master"
);

const QUERY = gql`
  {
    hotels {
      slug
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
          {hotels.map(({ slug, name }) => (
            <Link href={`/hotels/${slug}`} key={slug}><a>{name}</a></Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
