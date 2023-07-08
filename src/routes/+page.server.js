/** @type {import('./$types').PageLoad} */

import { gql } from 'graphql-request';
import { client } from '$lib/graphql-client';

export async function load({ params }) {

	const query = gql`
		query GetProjects {
			projects {
				name
				slug
				description
				demo
				sourceCode
				image {
					url
				}
			}
		}
	`;

	const { projects } = await client.request(query);

	return {
		props: { projects }
	};
}
