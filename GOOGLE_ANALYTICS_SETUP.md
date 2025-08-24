# Google Analytics Setup Guide

Google Analytics has been successfully integrated into your website! Follow these steps to complete the setup:

## Step 1: Get Your Google Analytics 4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account or sign in to your existing account
3. Create a new property for your website
4. Choose "Google Analytics 4" (not Universal Analytics)
5. Set up a data stream for your website
6. Copy your **Measurement ID** (it looks like `G-XXXXXXXXXX`)

## Step 2: Configure Your Measurement ID

You have two options to configure your Google Analytics ID:

### Option A: Environment Variable (Recommended)
1. Create a `.env` file in your project root
2. Add your measurement ID:
   ```
   REACT_APP_GA_MEASUREMENT_ID=G-YOUR-ACTUAL-ID-HERE
   ```
3. Replace `G-YOUR-ACTUAL-ID-HERE` with your real measurement ID

### Option B: Direct Configuration
1. Open `src/components/GoogleAnalytics.tsx`
2. Find line 8 and replace the commented line:
   ```typescript
   // Change this line:
   // const GA_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID-HERE';
   
   // To this (with your real ID):
   const GA_MEASUREMENT_ID = 'G-1234567890';
   ```

## Step 3: Verify Installation

1. Build and deploy your website
2. Visit your website
3. Go to Google Analytics → Reports → Realtime
4. You should see your visit in real-time

## What's Being Tracked

The integration automatically tracks:

✅ **Page Views**: Every page visit and navigation
✅ **Item Views**: When users view product detail pages
✅ **WhatsApp Inquiries**: When users click "Inquire via WhatsApp"
✅ **User Sessions**: Duration and engagement metrics

## Custom Events Available

You can track additional events using these functions:

```typescript
import { trackEvent, trackPurchase } from '../components/GoogleAnalytics';

// Track custom events
trackEvent('button_click', 'engagement', 'hero_cta');

// Track purchases (if you add e-commerce)
trackPurchase('order_123', 89.00, 'EUR');
```

## Privacy & GDPR Compliance

Consider adding a cookie consent banner if you serve EU customers. The current implementation respects user privacy by:

- Only tracking when a valid measurement ID is configured
- Not collecting personally identifiable information
- Following Google Analytics 4 privacy standards

## Testing

To test your Google Analytics setup:

1. Open your website in an incognito/private browser window
2. Navigate to different pages
3. Click on products and WhatsApp buttons
4. Check Google Analytics → Reports → Realtime to see the activity

## Troubleshooting

- **No data showing**: Double-check your measurement ID
- **Console errors**: Make sure the ID format is correct (G-XXXXXXXXXX)
- **Development mode**: Analytics won't track in development by default

Your Google Analytics is now ready to provide valuable insights about your website visitors and product performance! 📊
