#!/bin/bash
# Watch Android logs for the Cognito app - filtered for relevant messages only

echo "🔍 Watching Android logs for im.tensil.cognito..."
echo "📱 Filtering for: Auth, Storage, OAuth, Console messages"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Clear old logs first
~/Library/Android/sdk/platform-tools/adb logcat -c

# Watch logs with filters
~/Library/Android/sdk/platform-tools/adb logcat | grep -E "Console|Capacitor|📦|🔧|🔐|🔗|✅|❌|⏳|Amplify|OAuth|Storage SET|Storage GET|authenticated|Checking if|redirecting" --line-buffered --color=always
