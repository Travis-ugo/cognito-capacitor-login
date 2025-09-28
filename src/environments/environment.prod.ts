export const environment = {
  production: true,
  cdn: '',
  imgCdn: '',
  apiGateway: '',
  apiGatewayStage: '',
  subscriptionsIOSAPIKey: '',
  subscriptionsAndroidAPIKey: '',
  awsConfig: {
  region: 'eu-north-1',
  cognitoDomain: '<YOUR_COGNITO_DOMAIN>.auth.<YOUR_REGION>.amazoncognito.com',
  userPoolId: '<YOUR_USER_POOL_ID>',
  userPoolClientId: '<YOUR_USER_POOL_CLIENT_ID>',
  userPoolWebClientId: '<YOUR_USER_POOL_WEB_CLIENT_ID>',
  identityPoolId: '<YOUR_IDENTITY_POOL_ID>',
    oauth: {
      domain: '<YOUR_COGNITO_DOMAIN>.auth.<YOUR_REGION>.amazoncognito.com',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'https://cognito-capacitor-login.vercel.app/callback',
      redirectSignOut: 'https://cognito-capacitor-login.vercel.app',
      responseType: 'code'
    }
  },
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
};
