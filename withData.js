import { withAppSyncData } from 'next-apollo-appsync'
import AppSyncConfig from './pages/aws-exports'

const config = {
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_appsync_region,
  auth: {
    type: 'API_KEY',
    apiKey: AppSyncConfig.aws_appsync_apiKey
  },
}

export default withAppSyncData(config)