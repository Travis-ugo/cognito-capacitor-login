# Cognito Capacitor Login App

A comprehensive Ionic Angular Capacitor application featuring AWS Cognito authentication with complete social login integration for Google, Facebook, and Apple. This app demonstrates modern mobile authentication patterns with cross-platform support for iOS, Android, and Web.

## 🚀 Features

- 🔐 **AWS Cognito Authentication** with Amplify v6
- 🌐 **Complete Social Login Support**:
  - Google Sign-In
  - Facebook Login
  - Apple Sign In (iOS)
- 📱 **Cross-platform Support**: iOS, Android, and Web
- 🎨 **Modern Ionic UI** with responsive design
- 🔒 **Route Guards** for protected pages
- 👤 **User Profile Management** with social provider data
- 🔗 **Deep Linking** support for mobile OAuth flows
- 🛡️ **Security Best Practices** implemented
- 🚀 **Built with Latest Stack**: Angular 19 and Ionic 8

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **AWS Account** with administrative access
- **Google Developer Account**
- **Facebook Developer Account**
- **Apple Developer Account** (for Apple Sign In)
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)

## 🏃‍♂️ Quick Start

1. **Clone and Install Dependencies**
   ```bash
   git clone <your-repo-url>
   cd cognito-capacitor-login
   npm install
   ```

2. **Configure AWS Cognito** (see detailed setup below)

3. **Set up Social Providers** (Google, Facebook, Apple)

4. **Update Environment Configuration**

5. **Run the Application**
   ```bash
   npm start
   ```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── shared/              # Reusable UI components
│   │       ├── header/          # App header component
│   │       └── footer/          # App footer component
│   ├── models/                  # TypeScript interfaces and types
│   │   ├── auth/               # Authentication-related interfaces
│   │   └── user/               # User data interfaces
│   ├── pages/
│   │   ├── intro/              # Landing page with authentication options
│   │   ├── home/               # Protected home page (user dashboard)
│   │   └── account/            # Authentication flow pages
│   │       ├── sign-in/        # Login page with social buttons
│   │       ├── sign-up/        # Registration page
│   │       └── callback/       # OAuth redirect handler
│   ├── services/               # Core business logic services
│   │   ├── auth.service.ts     # Authentication service (Cognito integration)
│   │   ├── user.service.ts     # User data management
│   │   └── storage.service.ts  # Secure local storage
│   ├── guards/                 # Route protection
│   │   ├── auth.guard.ts       # Authenticated route guard
│   │   └── no-auth.guard.ts    # Non-authenticated route guard
│   └── utils/                  # Utility functions
└── environments/               # Environment configuration
    ├── environment.ts          # Development configuration
    └── environment.prod.ts     # Production configuration
```

## 🔧 Environment Configuration

Create and update your environment files with the following structure:

### Development Environment (`src/environments/environment.ts`)

```typescript
export const environment = {
  production: false,
  awsConfig: {
    region: 'YOUR_AWS_REGION',                    // e.g., 'us-east-1'
    cognitoDomain: 'YOUR_COGNITO_DOMAIN.auth.YOUR_AWS_REGION.amazoncognito.com',
    userPoolId: 'YOUR_REGION_XXXXXXXXX',          // e.g., 'us-east-1_abc123def'
    userPoolClientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXX', // App client ID (no secret)
    identityPoolId: 'YOUR_REGION:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    oauth: {
      domain: 'YOUR_COGNITO_DOMAIN.auth.YOUR_AWS_REGION.amazoncognito.com',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'http://localhost:8100/callback', // Web development
      redirectSignOut: 'http://localhost:8100',
      responseType: 'code'
    }
  }
};
```

### Production Environment (`src/environments/environment.prod.ts`)

```typescript
export const environment = {
  production: true,
  awsConfig: {
    region: 'YOUR_AWS_REGION',
    cognitoDomain: 'YOUR_COGNITO_DOMAIN.auth.YOUR_AWS_REGION.amazoncognito.com',
    userPoolId: 'YOUR_REGION_XXXXXXXXX',
    userPoolClientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
    identityPoolId: 'YOUR_REGION:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    oauth: {
      domain: 'YOUR_COGNITO_DOMAIN.auth.YOUR_AWS_REGION.amazoncognito.com',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'https://yourdomain.com/callback', // Production URL
      redirectSignOut: 'https://yourdomain.com',
      responseType: 'code'
    }
  }
};
```

## ☁️ AWS Cognito Setup (Detailed)

### Step 1: Create AWS Cognito User Pool

1. **Navigate to AWS Cognito Console**
   - Open [AWS Console](https://console.aws.amazon.com/)
   - Search for "Cognito" and select it
   - Click "Manage User Pools" → "Create a user pool"

2. **Configure Authentication**
   - **Pool name**: `cognito-capacitor-app` (or your preferred name)
   - **How do you want your end users to sign in?**: Email address
   - **Which standard attributes are required?**: Email
   - **Which attributes do you want to verify?**: Email

3. **Configure Policies**
   - **Password requirements**: Use default or customize
   - **Do you want to allow users to sign themselves up?**: Yes
   - **How quickly should user accounts created by admins expire?**: Never
   - **Do you want to enable Multi-Factor Authentication?**: Optional

4. **Configure Message Customizations**
   - **Do you want to customize your email verification messages?**: No (or customize as needed)
   - **Which app clients will have read access to the email address?**: Select the client you'll create

5. **Configure App Client**
   - **App client name**: `cognito-capacitor-client`
   - **Generate client secret**: **UNCHECK THIS** (important for mobile apps)
   - **Enable sign-in API for server-based authentication**: Check
   - **Enable username-password authentication for admin APIs**: Check

### Step 2: Configure App Client Settings

1. **Navigate to App Client Settings**
   - In your User Pool, go to "App clients" → Select your client → "Edit"

2. **OAuth 2.0 Settings**
   - **Enabled Identity Providers**: Select Cognito User Pool and any social providers you'll add
   - **Callback URLs**: Add these URLs (comma-separated):
     ```
     http://localhost:8100/callback,
     https://yourdomain.com/callback,
     tensilapp://callback
     ```
   - **Sign out URLs**: Add these URLs (comma-separated):
     ```
     http://localhost:8100,
     https://yourdomain.com,
     tensilapp://callback
     ```
   - **Allowed OAuth Flows**: Authorization code grant
   - **Allowed OAuth Scopes**: email, openid, profile

3. **Domain Name Configuration**
   - Go to "Domain name" in the left sidebar
   - **Domain prefix**: Choose a unique prefix (e.g., `your-app-name-auth`)
   - Save changes and note the complete domain URL

### Step 3: Create Identity Pool (Optional but Recommended)

1. **Navigate to Identity Pools**
   - In Cognito console, click "Federated Identities"
   - Click "Create new identity pool"

2. **Configure Identity Pool**
   - **Identity pool name**: `cognito_capacitor_identity_pool`
   - **Enable access to unauthenticated identities**: Optional
   - **Authentication providers** → Cognito:
     - User Pool ID: Your User Pool ID
     - App Client ID: Your App Client ID

3. **Configure IAM Roles**
   - Allow AWS to create new roles or select existing ones
   - Note the Identity Pool ID for your environment configuration

## 🔐 Social Login Provider Setup

### 🟦 Google Setup (Complete Guide)

#### 1. Create Google Cloud Project

1. **Navigate to Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Sign in with your Google account

2. **Create or Select Project**
   - Click on the project dropdown at the top
   - Click "New Project"
   - **Project name**: `cognito-capacitor-app` (or your preferred name)
   - **Organization**: Select if applicable
   - Click "Create"

3. **Enable APIs**
   - Navigate to "APIs & Services" → "Library"
   - Search for "Google+ API" and enable it
   - Search for "People API" and enable it

#### 2. Configure OAuth Consent Screen

1. **Navigate to OAuth Consent Screen**
   - Go to "APIs & Services" → "OAuth consent screen"
   - **User Type**: External (for public apps) or Internal (for G Suite organizations)
   - Click "Create"

2. **Fill Required Information**
   - **App name**: Your app name
   - **User support email**: Your email
   - **App logo**: Upload your app logo (optional)
   - **App domain**: Your website domain
   - **Authorized domains**: Add your domain and AWS Cognito domain
     ```
     yourdomain.com
     amazoncognito.com
     ```
   - **Developer contact information**: Your email

3. **Configure Scopes**
   - Click "Add or Remove Scopes"
   - Add these scopes:
     - `../auth/userinfo.email`
     - `../auth/userinfo.profile`
     - `openid`

4. **Test Users** (if using External type during development)
   - Add test user emails if your app is not published

#### 3. Create OAuth 2.0 Credentials

1. **Navigate to Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"

2. **Configure Web Application**
   - **Application type**: Web application
   - **Name**: `Cognito-Capacitor-Web-Client`
   - **Authorized JavaScript origins**: Add these origins:
     ```
     http://localhost:8100
     https://yourdomain.com
     https://YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com
     ```
   - **Authorized redirect URIs**: Add this URI:
     ```
     https://YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com/oauth2/idpresponse
     ```

3. **Save Credentials**
   - Copy the **Client ID** and **Client Secret**
   - You'll need these for Cognito configuration

#### 4. Configure Google in AWS Cognito

1. **Add Identity Provider**
   - In AWS Cognito User Pool → "Sign-in experience" → "Federated identity provider sign-in"
   - Click "Add identity provider"
   - **Provider type**: Google
   - **Provider name**: `Google`

2. **Configure Provider Details**
   - **Client ID**: Paste your Google Client ID
   - **Client secret**: Paste your Google Client Secret
   - **Authorize scope**: `profile email openid`

3. **Map Attributes**
   - **email** → **email**
   - **given_name** → **given_name**
   - **family_name** → **family_name**
   - **picture** → **picture**

### 📘 Facebook Setup (Complete Guide)

#### 1. Create Facebook App

1. **Navigate to Facebook Developers**
   - Go to [Facebook for Developers](https://developers.facebook.com/)
   - Sign in with your Facebook account
   - Click "My Apps" → "Create App"

2. **Select App Type**
   - Choose "Consumer" for most use cases
   - Click "Continue"

3. **Configure Basic Information**
   - **App Display Name**: Your app name
   - **App Contact Email**: Your email
   - Click "Create App"

#### 2. Add Facebook Login Product

1. **Add Product**
   - In your app dashboard, click "Add Product"
   - Find "Facebook Login" and click "Set Up"

2. **Choose Platform**
   - Select "Web" for initial setup
   - **Site URL**: `https://YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com`

#### 3. Configure Facebook Login Settings

1. **Basic Settings**
   - Go to "Facebook Login" → "Settings"
   - **Valid OAuth Redirect URIs**: Add this URI:
     ```
     https://YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com/oauth2/idpresponse
     ```

2. **App Settings**
   - Go to "Settings" → "Basic"
   - **App Domains**: Add:
     ```
     YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com
     localhost
     yourdomain.com
     ```
   - **Privacy Policy URL**: Add your privacy policy URL
   - **Terms of Service URL**: Add your terms URL

3. **Get App Credentials**
   - Copy the **App ID** and **App Secret**
   - You'll need these for Cognito configuration

#### 4. Configure Advanced Settings

1. **Client OAuth Settings**
   - **Client OAuth Login**: Yes
   - **Web OAuth Login**: Yes
   - **Force Web OAuth Reauthentication**: No
   - **Use Strict Mode for Redirect URIs**: Yes

2. **App Review** (for production)
   - Submit for app review when ready for production
   - Request permissions for `email` and `public_profile`

#### 5. Configure Facebook in AWS Cognito

1. **Add Identity Provider**
   - In AWS Cognito User Pool → "Sign-in experience" → "Federated identity provider sign-in"
   - Click "Add identity provider"
   - **Provider type**: Facebook
   - **Provider name**: `Facebook`

2. **Configure Provider Details**
   - **App ID**: Paste your Facebook App ID
   - **App secret**: Paste your Facebook App Secret
   - **Authorize scope**: `public_profile,email`

3. **Map Attributes**
   - **email** → **email**
   - **first_name** → **given_name**
   - **last_name** → **family_name**
   - **picture** → **picture**

### 🍎 Apple Setup (Complete Guide)

#### 1. Apple Developer Account Setup

1. **Apple Developer Membership**
   - Ensure you have an active [Apple Developer Program](https://developer.apple.com/programs/) membership
   - Sign in to [Apple Developer Console](https://developer.apple.com/account/)

#### 2. Configure App ID

1. **Create App ID**
   - Navigate to "Certificates, Identifiers & Profiles"
   - Click "Identifiers" → "+" to create new
   - Select "App IDs" → "Continue"
   - **Type**: App
   - **Bundle ID**: Use your app's bundle ID (e.g., `com.yourcompany.cognitoapp`)
   - **Capabilities**: Check "Sign In with Apple"

#### 3. Configure Sign In with Apple

1. **Create Services ID**
   - In "Identifiers", click "+" → "Services IDs" → "Continue"
   - **Description**: Your app name
   - **Identifier**: Use reverse domain notation (e.g., `com.yourcompany.cognitoapp.service`)
   - **Sign In with Apple**: Configure this
   - **Domains and Subdomains**: Add:
     ```
     YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com
     ```
   - **Return URLs**: Add:
     ```
     https://YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com/oauth2/idpresponse
     ```

2. **Create Private Key**
   - Go to "Keys" → "+" to create new
   - **Key Name**: "Sign in with Apple Key"
   - **Sign In with Apple**: Check this option
   - **Configure**: Select your App ID
   - Download the key file (`.p8`) and note the Key ID

3. **Get Team ID**
   - In Apple Developer Console, your Team ID is displayed in the top right
   - Note this ID for Cognito configuration

#### 4. Configure Apple in AWS Cognito

1. **Add Identity Provider**
   - In AWS Cognito User Pool → "Sign-in experience" → "Federated identity provider sign-in"
   - Click "Add identity provider"
   - **Provider type**: OpenID Connect

2. **Configure Provider Details**
   - **Provider name**: `Apple`
   - **Client ID**: Your Services ID (e.g., `com.yourcompany.cognitoapp.service`)
   - **Client secret**: Generate JWT token using your private key, Team ID, and Key ID
   - **Authorize scope**: `name email`
   - **Issuer**: `https://appleid.apple.com`

3. **Generate Client Secret (JWT Token)**
   You need to create a JWT token as the client secret. Here's a Node.js script:

   ```javascript
   const jwt = require('jsonwebtoken');
   const fs = require('fs');

   const teamId = 'YOUR_TEAM_ID';
   const clientId = 'com.yourcompany.cognitoapp.service';
   const keyId = 'YOUR_KEY_ID';
   const privateKey = fs.readFileSync('path/to/your/AuthKey_KEYID.p8', 'utf8');

   const token = jwt.sign({
     iss: teamId,
     iat: Math.floor(Date.now() / 1000),
     exp: Math.floor(Date.now() / 1000) + (86400 * 180), // 6 months
     aud: 'https://appleid.apple.com',
     sub: clientId
   }, privateKey, {
     algorithm: 'ES256',
     header: {
       kid: keyId
     }
   });

   console.log(token);
   ```

4. **Map Attributes**
   - **email** → **email**
   - **name** → **name**

## 📱 Mobile Configuration

### iOS Configuration

1. **URL Scheme Setup**
   - Open `ios/App/App/Info.plist`
   - Add URL scheme configuration (already configured in this project):
   ```xml
   <key>CFBundleURLTypes</key>
   <array>
     <dict>
       <key>CFBundleURLName</key>
       <string>com.yourapp.oauth</string>
       <key>CFBundleURLSchemes</key>
       <array>
         <string>tensilapp</string>
       </array>
     </dict>
   </array>
   ```

2. **Deep Link Handling**
   - The app automatically handles deep links through Capacitor
   - OAuth callbacks use the scheme: `tensilapp://callback`

### Android Configuration

1. **Intent Filter Setup**
   - Open `android/app/src/main/AndroidManifest.xml`
   - Add intent filter (already configured in this project):
   ```xml
   <intent-filter android:autoVerify="true">
     <action android:name="android.intent.action.VIEW" />
     <category android:name="android.intent.category.DEFAULT" />
     <category android:name="android.intent.category.BROWSABLE" />
     <data android:scheme="tensilapp" />
   </intent-filter>
   ```

## 🔧 Available Scripts

```bash
# Development
npm start                    # Start Ionic development server
npm run build               # Build for production
npm run test                # Run unit tests
npm run lint                # Run ESLint
npm run e2e                 # Run end-to-end tests

# Capacitor Mobile Commands
npx cap add ios             # Add iOS platform
npx cap add android         # Add Android platform
npx cap sync               # Sync web assets and plugins
npx cap run ios            # Build and run on iOS simulator
npx cap run android        # Build and run on Android emulator
npx cap open ios           # Open iOS project in Xcode
npx cap open android       # Open Android project in Android Studio

# Platform-specific builds
npm run build:ios          # Build and sync for iOS
npm run build:android      # Build and sync for Android
```

## 🔄 Authentication Flow

### 1. Application Entry
- User opens app and sees intro/landing page
- Options to sign in or sign up are presented

### 2. Authentication Options
- **Email/Password**: Traditional Cognito authentication
- **Google**: OAuth flow through Google
- **Facebook**: OAuth flow through Facebook
- **Apple**: Sign In with Apple (iOS only)

### 3. OAuth Flow (Social Login)
1. User taps social login button
2. App redirects to provider's OAuth endpoint
3. User authenticates with social provider
4. Provider redirects to Cognito with authorization code
5. Cognito exchanges code for tokens
6. App receives tokens via callback URL
7. User is redirected to home page

### 4. Token Management
- Access tokens stored securely
- Refresh tokens handled automatically
- Session management through Amplify

## 🛡️ Security Best Practices

### 1. OAuth Configuration
- **No client secret**: Mobile apps use public clients
- **PKCE enabled**: Proof Key for Code Exchange for additional security
- **Secure redirect URIs**: HTTPS for production, localhost for development

### 2. Token Storage
- Tokens stored in secure keychain/keystore
- Automatic token refresh
- Secure session management

### 3. App Security
- Route guards protect authenticated pages
- Input validation on all forms
- HTTPS enforcement in production
- Secure headers implemented

## 🧪 Testing

### Web Testing
```bash
npm start
# Navigate to http://localhost:8100
# Test all social login options
```

### iOS Testing
```bash
npm run build
npx cap run ios
# Test on iOS simulator or device
# Verify deep linking works correctly
```

### Android Testing
```bash
npm run build
npx cap run android
# Test on Android emulator or device
# Verify intent filters work correctly
```

### Deep Link Testing

#### iOS Simulator
```bash
# Open Safari on simulator and navigate to:
tensilapp://callback?code=test123
```

#### Android Emulator
```bash
adb shell am start -W -a android.intent.action.VIEW -d "tensilapp://callback?code=test123" com.yourpackage.name
```

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Invalid Redirect URI
**Error**: `InvalidOriginException` or redirect URI mismatch
**Solution**:
- Verify callback URLs in Cognito match exactly
- Check AWS Console → User Pool → App clients → OAuth settings
- Ensure no trailing slashes in URLs

#### 2. CORS Errors
**Error**: Cross-origin request blocked
**Solution**:
- Add localhost to allowed origins in Cognito
- Verify OAuth domain configuration
- Check that Amplify configuration is correct

#### 3. Social Login Not Working
**Error**: Provider authentication fails
**Solution**:
- Verify social provider app configuration
- Check client IDs and secrets in Cognito
- Ensure OAuth scopes are correctly mapped
- Verify attribute mapping in Cognito

#### 4. Deep Links Not Working (Mobile)
**Error**: App doesn't open from OAuth callback
**Solution**:
- Check URL scheme configuration in native projects
- Verify Capacitor deep link plugin setup
- Test with manual deep link commands
- Ensure intent filters are correct (Android)

#### 5. Build Errors
**Error**: TypeScript or dependency errors
**Solution**:
- Run `npm install` to ensure all dependencies
- Check Node.js version compatibility
- Clear node_modules and reinstall if needed
- Verify TypeScript configuration

#### 6. App Not Found (Apple)
**Error**: App ID not found in Apple configuration
**Solution**:
- Verify App ID is correctly configured in Apple Developer Console
- Check Services ID configuration
- Ensure bundle ID matches between App ID and Services ID
- Verify Sign In with Apple is enabled for the App ID

### Debug Mode

Enable debug logging by setting environment variable:
```bash
export DEBUG=amplify:*
npm start
```

## 📦 Dependencies

### Core Dependencies
- **@angular/core**: ^19.2.6 - Angular framework
- **@ionic/angular**: ^8.5.4 - Ionic UI framework
- **@capacitor/core**: ^7.2.0 - Capacitor native bridge
- **aws-amplify**: ^6.14.2 - AWS Amplify SDK

### Authentication Dependencies
- **@aws-amplify/auth**: ^6.12.2 - Amplify Auth module
- **@capacitor/browser**: ^7.0.2 - In-app browser for OAuth

### Platform Dependencies
- **@capacitor/ios**: ^7.2.0 - iOS platform
- **@capacitor/android**: ^7.2.0 - Android platform

## 🚀 Deployment

### Web Deployment (Vercel/Netlify)

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Update environment configuration**:
   - Set production OAuth redirect URLs
   - Update Cognito callback URLs to include your domain

3. **Deploy**:
   - Vercel: Connect GitHub repo and deploy
   - Netlify: Drag and drop `dist` folder

### Mobile App Store Deployment

#### iOS App Store

1. **Prepare for production**:
   ```bash
   npm run build
   npx cap sync ios
   npx cap open ios
   ```

2. **Configure in Xcode**:
   - Set production bundle ID
   - Configure signing certificates
   - Update Info.plist with production settings

3. **Submit to App Store**:
   - Archive the app in Xcode
   - Upload to App Store Connect
   - Complete app review process

#### Google Play Store

1. **Prepare for production**:
   ```bash
   npm run build
   npx cap sync android
   npx cap open android
   ```

2. **Configure in Android Studio**:
   - Set production application ID
   - Generate signed APK/AAB
   - Configure release signing

3. **Submit to Play Store**:
   - Upload AAB to Google Play Console
   - Complete store listing
   - Submit for review

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Additional Resources

- [AWS Cognito Documentation](https://docs.aws.amazon.com/cognito/)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Ionic Framework Documentation](https://ionicframework.com/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Angular Documentation](https://angular.io/docs)

## 🆘 Support

If you encounter any issues:

1. Check this README for troubleshooting solutions
2. Review AWS Cognito and Amplify documentation
3. Check the social provider documentation (Google, Facebook, Apple)
4. Open an issue in this repository with detailed error information

For questions about specific integrations:
- **AWS Cognito**: AWS Support or AWS Forums
- **Google OAuth**: Google Developers Support
- **Facebook Login**: Facebook Developers Support
- **Apple Sign In**: Apple Developer Support