export const environment = {
  production: false,
  cdn: '',
  imgCdn: '',
  apiGateway: '',
  apiGatewayStage: '',
  subscriptionsIOSAPIKey: '',
  subscriptionsAndroidAPIKey: '',
  // awsConfig: {
  //   accountID: '730335457135',
  //   region: 'eu-north-1', // Replace with your AWS region
  //   cognitoDomain: 'eu-north-1bzzl2ybts.auth.eu-north-1.amazoncognito.com', // Replace with your Cognito domain
  //   userPoolId: 'eu-north-1_bZzl2ybtS', // Replace with your User Pool ID
  //   userPoolClientId: '2j624tdce1fe6kso61d1f0lhoc', // Replace with your App Client ID
  //   //  // Replace with your Identity Pool ID
  // },
  awsConfig: {
    region: 'eu-north-1',
    cognitoDomain: 'eu-north-1bzzl2ybts.auth.eu-north-1.amazoncognito.com',
    userPoolId: 'eu-north-1_bZzl2ybtS',
    userPoolClientId: '2j624tdce1fe6kso61d1f0lhoc',
    userPoolWebClientId: '2j624tdce1fe6kso61d1f0lhoc',
    identityPoolId: 'eu-north-1:e4a55099-41fe-4984-9c09-849a07a26f04',
    oauth: {
      domain: 'eu-north-1bzzl2ybts.auth.eu-north-1.amazoncognito.com',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'happymeapp://callback',
      redirectSignOut: 'happymeapp://signout',
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
