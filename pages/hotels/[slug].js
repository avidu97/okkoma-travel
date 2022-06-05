import Head from "next/head";
import React from "react";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

export async function getServerSideProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-south-1.graphcms.com/v2/cl41i5arf37e101xs9dmq4usk/master"
  );

  const { hotels } = await graphcms.request(
    `
      { 
        hotels {
          slug
          name
        }
      }
    `
  );

  return {
    props: {
      hotels,
    },
  };
}

export default function HotelsSingle({ hotels }) {
  console.log(hotels);
  return (
    <div>
      <Head></Head>
      <>
        <div>
          <h1>Hi this is hotels page</h1>
          <div>
            {hotels.map(({ slug, name }) => (
                <Link key={slug} href={`/hotels/${slug}`}>
                  <a>{name}</a>
                </Link>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}
