# Quick Guide: Submit Your Site to Google

## Step 1: Add Site to Google Search Console

1. **Go to:** https://search.google.com/search-console
2. **Click:** "Add property"
3. **Choose:** Domain (not URL prefix)
4. **Enter:** alphery.com
5. **Verify ownership** via one of these methods:

### Verification Methods:

#### Method A: HTML File Upload (Easiest for Vercel/Cloudflare)
- Download the HTML verification file
- Upload to your `/public` folder
- Deploy
- Click "Verify"

#### Method B: DNS Record (Recommended)
- Go to Hostinger DNS settings
- Add TXT record with the value Google provides
- Click "Verify"

#### Method C: HTML Tag (Quick)
- Copy the meta tag Google gives you
- Add it to `index.html` in the `<head>` section
- Deploy
- Click "Verify"

---

## Step 2: Submit Your Sitemap

After verification:

1. In Search Console, click **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**

---

## Step 3: Request Indexing

1. In Search Console, click **URL Inspection** (top)
2. Enter: `https://www.alphery.com`
3. Click **Request Indexing**

Google will crawl within 24-48 hours!

---

## Step 4: Track Progress

Check these daily:
- Search Console → Coverage
- Search Console → Performance
- Search: `site:alphery.com` in Google

---

## Expected Timeline:

- **24-48 hours**: Google crawls your site
- **3-7 days**: Appears for "alphery.com" or "alphery"
- **1-2 weeks**: Appears for brand searches
- **1+ month**: Ranks for competitive keywords
