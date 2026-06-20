# Contact Form Setup

The contact form on the Reputation Unit website uses [Web3Forms](https://web3forms.com/) for email delivery without requiring a backend database or complex email provider integrations like Resend/Sendgrid.

The form submits to a local Next.js API route (`/api/contact`), which validates the input and forwards the payload safely to Web3Forms without exposing the access key to the frontend.

## Step-by-Step Setup

1. **Create or Choose Destination Email:** Ensure you have the email address where you want to receive project inquiries (e.g., `hello@reputationunit.com` or your Gmail).
2. **Get an Access Key:** Go to [Web3Forms](https://web3forms.com/) and create a new access key associated with your destination email.
3. **Add Environment Variable Locally:** Create a `.env.local` file in the root of the project.
   ```
   WEB3FORMS_ACCESS_KEY=your_real_key_here
   ```
4. **Restart Dev Server:** Restart `npm run dev` to pick up the new environment variable.
5. **Add Environment Variable to Vercel:** Go to your Vercel project settings > Environment Variables and add `WEB3FORMS_ACCESS_KEY` with your actual key. Make sure it applies to Production (and Preview if you want to test in preview deployments).
6. **Test the Form:** Submit a test inquiry on the site to verify you receive the email.

## Important Notes

* **Security:** The access key is kept secret on the server and is **never** committed to Git. Never put the real key in `.env.example`.
* **No Database:** No submissions are stored locally or in a database.
* **Spam Protection:** There is a basic honeypot field implemented. If spam becomes an issue, consider adding hCaptcha or Web3Forms' built-in spam protection.
