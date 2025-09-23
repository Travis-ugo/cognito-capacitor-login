# Cognito Capacitor Login App

An Ionic Angular Capacitor application with AWS Cognito authentication and social login support (Google, Facebook, Apple).

## Features

- 🔐 AWS Cognito Authentication with Amplify v6
- 🌐 Social Login (Google, Facebook, Apple)
- 📱 Cross-platform (iOS, Android, Web)
- 🎨 Modern Ionic UI
- 🔒 Route Guards for protected pages
- 👤 User profile display
- 🚀 Built with Angular 19 and Ionic 8

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- AWS Account with Cognito setup
- Google/Facebook Developer accounts for social login

## Quick Start

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd cognito-capacitor-login
   npm install
   ```

2. **Configure AWS Cognito**
   - Follow the [AWS Setup Guide](./AWS_SETUP_GUIDE.md)
   - Update `src/environments/environment.ts` with your AWS credentials

3. **Run the Application**
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── shared/           # Shared components (header, footer)
│   ├── models/               # TypeScript interfaces
│   ├── pages/
│   │   ├── home/            # Home page (protected)
│   │   ├── intro/           # Landing page
│   │   └── account/         # Authentication pages
│   │       ├── sign-in/     # Login page
│   │       ├── sign-up/     # Registration page
│   │       └── callback/    # OAuth callback handler
│   ├── services/            # Angular services
│   │   ├── auth.service.ts  # Authentication service
│   │   └── user.service.ts  # User management
│   └── auth.guard.ts        # Route protection
└── environments/            # Environment configuration
```

## Environment Configuration

Update `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  awsConfig: {
    accountID: 'YOUR_AWS_ACCOUNT_ID',
    region: 'us-east-1',
    cognitoDomain: 'YOUR_COGNITO_DOMAIN.auth.us-east-1.amazoncognito.com',
    userPoolId: 'us-east-1_XXXXXXXXX',
    userPoolClientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
    identityPoolId: 'us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  }
};
```

## Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run test       # Run unit tests
npm run lint       # Run linter

# Capacitor commands
npx cap add ios     # Add iOS platform
npx cap add android # Add Android platform
npx cap run ios     # Run on iOS simulator
npx cap run android # Run on Android emulator
```

## Authentication Flow

1. **Landing Page** (`/`) - Intro slides with login/signup buttons
2. **Login/Signup** (`/account/login`, `/account/register`) - Authentication forms with social buttons
3. **OAuth Callback** (`/callback`) - Handles social login redirects
4. **Home Page** (`/home`) - Protected page showing user profile

## Social Login Setup

### Google
1. Create project at [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google+ API
3. Create OAuth 2.0 credentials
4. Add authorized redirect URI: `https://YOUR_COGNITO_DOMAIN.auth.YOUR_REGION.amazoncognito.com/oauth2/idpresponse`

### Facebook
1. Create app at [Facebook Developers](https://developers.facebook.com/)
2. Add Facebook Login product
3. Configure Valid OAuth Redirect URIs
4. Copy App ID and App Secret

### Apple (iOS only)
1. Configure in Apple Developer Console
2. Set up Sign in with Apple
3. Configure identifiers and certificates

## Mobile Deployment

### iOS
```bash
npx cap add ios
npx cap open ios
```

### Android
```bash
npx cap add android
npx cap open android
```

## Route Guards

- `IsAuthenticated` - Protects routes requiring login
- `IsNotAuthenticated` - Redirects logged-in users away from auth pages

## Key Features

### Auth Service
- Social login integration
- User attribute management
- Token handling
- Logout functionality

### Home Page
- Displays user profile information
- Shows data from social providers
- Profile picture support
- Secure logout

### Responsive Design
- Mobile-first approach
- Ionic grid system
- Cross-platform compatibility

## Troubleshooting

### Common Issues

1. **Invalid redirect URI**
   - Check callback URLs in Cognito and social providers
   - Ensure domains match exactly

2. **CORS errors**
   - Verify localhost is in allowed origins
   - Check Amplify configuration

3. **Build errors**
   - Run `npm install` to ensure all dependencies
   - Check TypeScript errors in console

4. **Social login not working**
   - Verify social provider app configuration
   - Check Cognito identity provider setup
   - Ensure OAuth flows are enabled

## Development Notes

- Uses Amplify v6 for authentication
- Standalone Angular components
- TypeScript with strict mode
- Ionic 8 with Angular 19
- Custom URL scheme for mobile redirects

## Security Best Practices

- Client secret not used (recommended for mobile apps)
- Secure token storage
- Route protection with guards
- Input validation on forms
- HTTPS redirects only

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
1. Check the [AWS Setup Guide](./AWS_SETUP_GUIDE.md)
2. Review AWS Cognito documentation
3. Check Amplify v6 migration guide
4. Ionic Angular documentation

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request