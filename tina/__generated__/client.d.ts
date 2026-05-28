import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'fafb09eff5f7c94ec46fef437e7cd8491d0e9d54', queries,  });
export default client;
  