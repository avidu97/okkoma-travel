import Head from "next/head";
import React from "react";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";


const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl41i5arf37e101xs9dmq4usk/master"
);

export async function getStaticProps({ params }) {
  const { hotel } = await graphcms.request(
    `
      query HotelPageQuery($slug: String!) {
        hotel(where: { slug: $slug }) {
          name
          description
          rooms
        }
      }
    `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      hotel,
    },
  };
}

export async function getStaticPaths() {
  const { hotels } = await graphcms.request(`
    {
      hotels {
        slug
        name
      }
    }
  `);

  return {
    paths: hotels.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function hotels({ hotel }) {
  return (
    <div>
      <Head></Head>
        <div>
          <h1>Hi this is hotels page</h1>
          <div>
            <h1>{hotel.name}</h1>
          </div>
        </div>
    </div>
  );
}
