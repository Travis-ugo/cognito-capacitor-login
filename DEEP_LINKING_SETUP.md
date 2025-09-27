# Deep Linking Setup Guide

Your app has been configured for deep linking with the custom scheme `happymeapp://`. Here's what you need to update:

## ✅ What's Already Configured:

### 1. Capacitor Configuration
- Custom scheme: `happymeapp`
- URL navigation allowed for `happymeapp://*`

### 2. iOS Configuration
- Automatically handled by Capacitor with the custom scheme

### 3. Android Configuration
- Intent filter added to AndroidManifest.xml
- Deep link scheme: `happymeapp`
- Auto-verify enabled for better handling

### 4. App Code
- Deep link listener in main.ts
- OAuth callback detection and processing
- Platform-specific redirect URLs

## 🔧 AWS Cognito Configuration Required:

**Go to: AWS Console → Cognito → User pools → [Your User Pool] → App integration → App clients → [Your App Client] → Edit**

### Update Allowed Callback URLs:
```
http://localhost:8100
tensilapp://callback
```

### Update Allowed Sign-out URLs:
```
http://localhost:8100
tensilapp://callback
```

**Important**: Use the exact format `tensilapp://callback` without trailing slashes

## 📱 How Deep Linking Works:

### iOS:
1. User taps social login button
2. App opens Cognito OAuth URL in Safari/WebView
3. User completes OAuth with Google/Facebook
4. Cognito redirects to `tensilapp://callback?code=...`
5. iOS opens your app with the deep link
6. App processes the OAuth code and completes login

### Android:
1. Same flow as iOS
2. Android Intent system handles the deep link
3. Your app receives the callback URL
4. OAuth code is processed for token exchange

## 🧪 Testing Deep Links:

### iOS Simulator:
```bash
# Open this URL in Safari on the simulator
tensilapp://callback?code=test123
```

### Android Emulator:
```bash
# Use ADB to test deep links
adb shell am start -W -a android.intent.action.VIEW -d "tensilapp://callback?code=test123" im.tensil.cognito
```

### Real Devices:
- Create a test link and send it via message/email
- Tap the link to test if it opens your app

## 🔍 Debugging:

### Check Console Logs:
- "Deep link received: ..." - Confirms deep link is working
- "OAuth callback detected, processing..." - Confirms OAuth handling
- "OAuth code received: ..." - Confirms successful OAuth flow

### Common Issues:
1. **App doesn't open from link**: Check custom scheme configuration
2. **OAuth callback not detected**: Verify callback URLs in Cognito
3. **Token exchange fails**: Check AWS credentials and scopes

## 📋 Next Steps:

1. **Update AWS Cognito callback URLs** (required)
2. **Test social login** on iOS simulator
3. **Build and test on Android** if needed
4. **Test on real devices** for production

## 🛠️ Build Commands:

### iOS:
```bash
npm run build
npx cap sync ios
npx cap run ios
```

### Android:
```bash
npm run build
npx cap sync android
npx cap run android
```

The deep linking setup is now complete! Just update your AWS Cognito callback URLs and test the social login flow.