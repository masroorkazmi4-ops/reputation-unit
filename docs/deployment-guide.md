# Deployment Guide

This guide provides the exact steps to deploy the Reputation Unit website to Vercel and connect the custom domain `reputationunit.com`.

## 1. GitHub Setup

Since the local Git repository is initialized and the code is committed, you need to push it to a remote GitHub repository.

1. Create a new empty repository on GitHub (name it `reputation-unit`). Do not initialize it with a README or `.gitignore`.
2. Open your terminal in the local project directory and run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/reputation-unit.git
   git branch -M main
   git push -u origin main
   ```

## 2. Vercel Import

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New... > Project**.
3. Import the `reputation-unit` repository from your GitHub account.
4. Vercel will automatically detect the **Framework Preset** as Next.js. Leave the Build and Output Settings as default.

## 3. Required Environment Variables

Before clicking Deploy, you must add the Web3Forms access key so the contact form works in production.

1. In the Vercel deployment configuration screen, open the **Environment Variables** section.
2. Add the following key:
   * **Name**: `WEB3FORMS_ACCESS_KEY`
   * **Value**: (Paste your real Web3Forms key here)
3. Click **Add**.
4. Now click **Deploy**. Wait for the build to finish.

## 4. Domain Connection

1. Once the deployment succeeds, click **Continue to Dashboard**.
2. Go to **Settings > Domains**.
3. Enter `reputationunit.com` and click **Add**.
4. Choose the recommended option to add both `reputationunit.com` and `www.reputationunit.com`, redirecting `www` to the root domain.
5. Vercel will provide DNS records (usually an A Record for the root domain and a CNAME for the www subdomain, or Nameservers).
6. Log in to your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare) and update the DNS records to match what Vercel provided.
7. Wait a few minutes (up to a few hours depending on DNS propagation). Vercel will automatically provision an SSL certificate.

## 5. Contact Form Testing

Once the live URL is working:
1. Navigate to `https://reputationunit.com#contact`.
2. Fill out the form with a test inquiry.
3. Click **Send Inquiry**.
4. Confirm you see the success message "Inquiry Received".
5. Check your destination email inbox to verify the email arrived properly.

## 6. Rollback Steps

If an issue occurs in production:
1. Go to the Vercel dashboard > Deployments.
2. Find the previous stable deployment in the list.
3. Click the three dots (...) and select **Promote to Production** or **Instant Rollback**.
4. Fix the issue locally, commit, and push to trigger a new safe deployment.

## Common Problems & Fixes

* **Form returns "An unexpected error occurred" or "Contact form is not configured yet"**: The `WEB3FORMS_ACCESS_KEY` environment variable is missing in Vercel. Go to Settings > Environment Variables, add it, and trigger a redeployment.
* **Domain shows "Not Secure"**: SSL certificates take a few minutes to issue after DNS propagates. Give it up to 15 minutes.
