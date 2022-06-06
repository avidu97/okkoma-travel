import React from "react";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl41i5arf37e101xs9dmq4usk/master"
);

export async function getStaticProps({ params }) {
  const { destination } = await graphcms.request(
    `
        query DestinationPageQuery($slug: String!) {
          destination(where: { slug: $slug }) {
            name
            description
          }
        }
      `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      destination,
    },
  };
}

export async function getStaticPaths() {
  const { destinations } = await graphcms.request(`
      {
        destinations {
          slug
          name
        }
      }
    `);

  return {
    paths: destinations.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function Destinations({ destination }) {
  return (
    <div>
      <Head></Head>
      <div>
        <h1>Hi this is Destinations Page</h1>
        <h2>{destination.name}</h2>
        <p>{destination.description}</p>
      </div>
    </div>
  );
}
