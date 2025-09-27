# AWS Cognito Setup Guide for Social Login

This guide will help you set up AWS Cognito User Pool with Google and Facebook social login providers.

## Step 1: Create AWS Cognito User Pool

1. Go to AWS Console → Cognito → User pools
2. Click "Create user pool"
3. **Configure sign-in experience**:
   - Sign-in options: Email
   - Federated identity providers: Google, Facebook
4. **Configure security requirements**:
   - Password policy: Use defaults
   - Multi-factor authentication: Optional
5. **Configure sign-up experience**:
   - Required attributes: email
   - Verification: Email
6. **Configure message delivery**:
   - Use Amazon SES or Cognito (for development)
7. **Integrate your app**:
   - User pool name: `cognito-capacitor-app`
   - App client name: `cognito-capacitor-client`
   - App client settings:
     - Generate client secret: **NO** (important for mobile apps)
     - Allowed OAuth flows: Authorization code grant
     - Allowed OAuth scopes: email, openid, profile, aws.cognito.signin.user.admin
     - Allowed callback URLs:
       - `http://localhost:8100` (for web development)
       - `tensilapp://callback` (for mobile app)
     - Allowed sign-out URLs:
       - `http://localhost:8100` (for web development)
       - `tensilapp://callback` (for mobile app)

## Step 2: Set up Social Identity Providers

### Google Setup:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client IDs
5. Application type: Web application
6. Authorized redirect URIs:
   - `https://YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com/oauth2/idpresponse`
7. Copy Client ID and Client Secret

### Facebook Setup:
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app → Consumer
3. Add Facebook Login product
4. Settings → Basic:
   - Add App Domains: `YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com`
5. Facebook Login → Settings:
   - Valid OAuth Redirect URIs: `https://YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com/oauth2/idpresponse`
6. Copy App ID and App Secret

## Step 3: Configure Identity Providers in Cognito

1. In your User Pool → Sign-in experience → Federated identity provider sign-in
2. Add Google:
   - Provider name: Google
   - Client ID: (from Google Console)
   - Client secret: (from Google Console)
   - Authorized scopes: profile email openid
   - Map attributes:
     - email → email
     - given_name → given_name
     - family_name → family_name

3. Add Facebook:
   - Provider name: Facebook
   - App ID: (from Facebook)
   - App secret: (from Facebook)
   - Authorized scopes: public_profile,email
   - Map attributes:
     - email → email
     - first_name → given_name
     - last_name → family_name

## Step 4: Create Identity Pool (Optional, for AWS resource access)

1. Go to Cognito → Identity pools
2. Create new identity pool
3. Authentication providers:
   - Cognito User Pool: Add your User Pool ID and App Client ID
4. Create the pool and note the Identity Pool ID

## Step 5: Update Environment Configuration

Update `src/environments/environment.ts` with your actual values:

```typescript
awsConfig: {
  accountID: 'YOUR_AWS_ACCOUNT_ID',
  region: 'YOUR_AWS_REGION', // e.g., 'us-east-1'
  cognitoDomain: 'YOUR_COGNITO_DOMAIN.auth.YOUR_AWS_REGION.amazoncognito.com',
  userPoolId: 'YOUR_REGION_XXXXXXXXX', // e.g., 'us-east-1_abc123def'
  userPoolClientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXX', // App client ID
  identityPoolId: 'YOUR_REGION:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // Optional
}
```

## Step 6: Test the Setup

1. Run the app: `npm start`
2. Navigate to sign-in page
3. Try social login buttons
4. Verify successful redirect to home page

## Troubleshooting

- **Invalid redirect URI**: Check callback URLs in Cognito and social providers
- **Client ID not found**: Verify App Client ID in environment.ts
- **Domain not found**: Check Cognito domain configuration
- **CORS errors**: Ensure localhost is in allowed origins

## Mobile App Configuration

For Capacitor mobile apps, you'll need to:

1. Configure custom URL scheme in `capacitor.config.json`
2. Handle deep links in native code
3. Test on actual devices or simulators

The app is already configured with the custom scheme `tensilapp://callback`