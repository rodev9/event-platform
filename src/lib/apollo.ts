import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-eu-west-2.graphcms.com/v2/cl4opszbd0r1w01xs1za44wxm/master',
  cache: new InMemoryCache()
})