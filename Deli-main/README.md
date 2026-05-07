# Deli White-label B2B Template

Astro storefront + Sanity CMS + Vercel deployment template for fast, reusable B2B client delivery.

## 1) Local setup

```sh
npm install
cp .env.example .env
npm run dev
```

Required `.env` values:

```bash
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
SANITY_API_WRITE_TOKEN=your_sanity_write_token_here
```

## 2) Start frontend and CMS

- Frontend (Astro): from this folder run `npm run dev`
- Sanity Studio: from `sanity-studio/` run `npm run dev`

## 3) White-label delivery workflow

1. Duplicate this repository/template for a new client.
2. Create a new Sanity project/dataset for that client.
3. Update `.env` with the client's `PUBLIC_SANITY_PROJECT_ID`, dataset, and write token.
4. In Sanity Studio, update branding/content (logo, colors, products, categories, settings).
5. Deploy to Vercel and set the same environment variables.
6. Add deployed domain to Sanity CORS and enable credentials.
7. Configure Sanity webhook to Vercel Deploy Hook.

Suggested webhook filter:

```txt
_type in ["product", "productCategory", "siteSettings"]
```

## 4) Security notes

- Never commit `.env` or API tokens.
- Use a dedicated Editor-scoped write token for inquiry submissions.
- Rotate tokens immediately if shared in chat/logs.

## 5) Useful commands

- `npm run dev`: run storefront locally
- `npm run build`: production build
- `npm run preview`: preview production build locally