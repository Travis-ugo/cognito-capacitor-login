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
    cognitoDomain: 'eu-north-1bzzl2ybts.auth.eu-north-1.amazoncognito.com',
    userPoolId: 'eu-north-1_bZzl2ybtS',
    userPoolClientId: '2j624tdce1fe6kso61d1f0lhoc',
    userPoolWebClientId: '2j624tdce1fe6kso61d1f0lhoc',
    identityPoolId: 'eu-north-1:e4a55099-41fe-4984-9c09-849a07a26f04',
    oauth: {
      domain: 'eu-north-1bzzl2ybts.auth.eu-north-1.amazoncognito.com',
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
