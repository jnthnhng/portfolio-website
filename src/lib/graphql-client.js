import { GraphQLClient } from 'graphql-request';
import { GraphQL_API_KEY } from '$lib/server/secrets.js';

const GRAPHQL_ENDPOINT = GraphQL_API_KEY
export const client = new GraphQLClient(GRAPHQL_ENDPOINT)