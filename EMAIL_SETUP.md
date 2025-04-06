# Email Setup for Contact Form

This document explains how to set up the email functionality for your contact form to receive submissions at wardrob.in@gmail.com.

## EmailJS Setup

The contact form uses EmailJS to send form submissions to your email. Follow these steps to complete the setup:

1. **Create an EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - The free tier allows 200 emails per month

2. **Create an Email Service**:
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Select your email provider (Gmail, Outlook, etc.)
   - Connect your wardrob.in@gmail.com account
   - Once connected, note the Service ID (you'll need it later)

3. **Create an Email Template**:
   - In the EmailJS dashboard, go to "Email Templates"
   - Click "Create New Template"
   - Design your template with the following variables:
     - {{from_name}} - The sender's full name
     - {{from_email}} - The sender's email
     - {{phone}} - The sender's phone number
     - {{address}} - The sender's address
     - {{service}} - The selected service
     - {{message}} - The message content
   - Set the recipient to wardrob.in@gmail.com or use {{to_email}}
   - Note the Template ID (you'll need it later)

4. **Configure Environment Variables**:
   - Open the `.env` file in the root of your project
   - Update the following variables with your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_USER_ID=your_user_id
     ```
   - You can find your User ID in the EmailJS dashboard under "Account" > "API Keys"

5. **Testing**:
   - After completing the setup, fill out the contact form on your website
   - Submit the form and check if you receive the email at wardrob.in@gmail.com
   - Check for success/error messages that appear on the website after submission

## Troubleshooting

- If you're not receiving emails, check the browser console for errors
- Verify that your EmailJS account is active and the service is connected properly
- Make sure your email template is correctly configured
- Check that the environment variables are correctly set

## Security Notes

- The `.env` file contains sensitive information and should not be committed to your public repository
- EmailJS has rate limits, so monitor your usage if you expect high traffic

For more details or customizations, refer to the [EmailJS documentation](https://www.emailjs.com/docs/). 