import Head from "next/head";
import React from "react";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl41i5arf37e101xs9dmq4usk/master"
);

const QUERY = gql`
  {
    hotels {
      slug
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
    fallback: 'blocking'
  };
}

export default function Hotels({ hotels }) {
  console.log(hotels);
  return (
    <div>
      <Head></Head>
      <div>
        <h1>Hi this is hotels page</h1>
        <div>
          <ul>
            {hotels.map(({ slug, title }) => (
              <li key={slug}>{title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
