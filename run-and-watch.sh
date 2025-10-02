#!/bin/bash

echo "🚀 Starting app and monitoring logs..."
echo ""

# Kill app if running
~/Library/Android/sdk/platform-tools/adb shell am force-stop im.tensil.cognito

# Clear old logs
~/Library/Android/sdk/platform-tools/adb logcat -c

# Start app
echo "📱 Launching app..."
~/Library/Android/sdk/platform-tools/adb shell am start -n im.tensil.cognito/.MainActivity

# Wait a moment for app to start
sleep 2

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 LIVE LOGS (Ctrl+C to stop)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Watch filtered logs
~/Library/Android/sdk/platform-tools/adb logcat -v time | \
  grep --line-buffered -E "Capacitor|Console|Storage (SET|GET|configured)|Checking authentication|authenticated|redirecting|OAuth|Amplify Configuration|callback detected|sign-in|IdToken|tokens found"

