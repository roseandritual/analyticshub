# Rose & Ritual — Social Analytics Dashboard

A clean, minimal analytics dashboard for @roseritualapothecary pulling live TikTok and Instagram data via SocialCrawl.

## Setup

1. Deploy to Vercel (connect this GitHub repo)
2. In Vercel project settings, go to **Environment Variables**
3. Add: `SOCIALCRAWL_API_KEY` = your SocialCrawl API key (starts with `sc_`)
4. Redeploy

## Project structure

```
/api/tiktok.js       — backend route for TikTok data
/api/instagram.js    — backend route for Instagram data
/public/index.html   — dashboard UI
/vercel.json         — Vercel config
```

## Local development

```bash
npm i -g vercel
vercel dev
```
