# AWS Cognito OAuth Configuration

## Required Redirect URIs in AWS Cognito User Pool

You need to add the following redirect URIs to your AWS Cognito User Pool App Client configuration:

### 1. Mobile App (Custom Scheme)
- **Sign-in redirect URI**: `tensilapp://callback`
- **Sign-out redirect URI**: `tensilapp://callback`

### 2. Web Development (Localhost)
- **Sign-in redirect URI**: `http://localhost:8100/callback`
- **Sign-out redirect URI**: `http://localhost:8100`

### 3. Web Production (Vercel)
- **Sign-in redirect URI**: `https://cognito-capacitor-login.vercel.app/callback`
- **Sign-out redirect URI**: `https://cognito-capacitor-login.vercel.app`

## Complete List for Copy/Paste

**Sign-in redirect URIs** (comma-separated):
```
tensilapp://callback,http://localhost:8100/callback,https://cognito-capacitor-login.vercel.app/callback
```

**Sign-out redirect URIs** (comma-separated):
```
tensilapp://callback,http://localhost:8100,https://cognito-capacitor-login.vercel.app
```

## How to Configure in AWS Console

1. Go to AWS Cognito Console
2. Select your User Pool: `eu-north-1_bZzl2ybtS`
3. Go to "App integration" tab
4. Find your App Client: `2j624tdce1fe6kso61d1f0lhoc`
5. Click "Edit"
6. Under "OAuth 2.0 settings", add the redirect URIs above
7. Make sure these OAuth scopes are enabled:
   - `email`
   - `openid`
   - `profile`
8. Save changes

## Current App Configuration

The app has been updated to automatically detect the environment:

- **Mobile (Capacitor)**: Uses `tensilapp://callback`
- **Web Development**: Uses `http://localhost:8100/callback`
- **Web Production**: Uses `https://cognito-capacitor-login.vercel.app/callback`

## Testing

After adding these URIs to Cognito:

1. **Web Development**: Run `ionic serve` and test OAuth
2. **Mobile**: Build and test on simulator/device
3. **Web Production**: Deploy to Vercel and test

## Troubleshooting

- **InvalidOriginException**: Redirect URI not configured in Cognito
- **InvalidRedirectException**: Redirect URI mismatch between app and Cognito
- **CORS errors**: Usually resolved by having correct redirect URIs

The OAuth callback handler at `/callback` will process the authorization code and redirect to appropriate pages.