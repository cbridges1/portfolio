import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '632758a9a4aca2fb02faff0a669ab4b11e2ef19d', queries,  });
export default client;
  