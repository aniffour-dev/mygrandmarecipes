import { GraphQLClient } from "graphql-request";

const endpoint = `https://dev-mygrandmarecipes.pantheonsite.io/graphql`;
export const client = new GraphQLClient(endpoint);