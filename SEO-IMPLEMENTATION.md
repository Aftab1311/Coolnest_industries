# Coolnest Industries SEO implementation

**Prepared:** 13 October 2026  
**Canonical domain supplied by the owner:** `https://coolnestindustries.com`  
**Project:** Next.js 16.3.8 App Router, React 19

## A. SEO audit

### Critical

- No confirmed critical crawl blocker was found in the project source. The production build serves the main routes as server-rendered or static HTML, and the local production server returned the expected pages.
- Public DNS, certificate, hosting configuration, and indexing could not be verified from this project checkout. Confirm the deployed domain before submitting it to Google.

### High

- Before this work, route metadata was incomplete and there were no consistent canonical, Open Graph, or X/Twitter card tags.
- The project had no generated `robots.txt`, XML sitemap, or structured business data.
- The catalog did not provide dedicated pages for its two confirmed primary product families. Buyers had fewer useful paths from search result to product enquiry.
- Some existing copy and factory-style imagery made claims that were not supported by the available business details. Product information is now more cautious. The original image selections and placements have been retained.

### Medium

- Detailed materials, dimensions, thickness, flute data, availability, and application compatibility are not documented in the supplied information. The product pages invite buyers to confirm those facts instead of publishing guessed specifications.
- Exact address, hours, phones, GST, founders, and product categories exist in the project and/or supplied brief, but should be confirmed by the owner against current business records before launch.
- No Google Search Console, Google Analytics 4, or Google Business Profile account integration was present in the source. No owner account access was available.
- Factory-style visuals in the original image set should be checked by the owner before they are described as photographs of actual Coolnest operations.

### Low

- No keyword volume, ranking, or search traffic export was available. A public search-result sample is noted in section D; it is not a rank-tracking report.
- No Lighthouse score or real-user Core Web Vitals data was available. Build and responsive checks are not a substitute for field performance measurement.

## B. Implemented improvements

- `lib/seo.ts` — shared page metadata helper, official domain, canonical paths, Open Graph, and X/Twitter cards.
- `app/layout.tsx` — metadata base, title template, language, index/follow robots metadata, and shared organization/business/site JSON-LD.
- `app/page.tsx`, `app/about/page.tsx`, `app/products/page.tsx`, `app/contact/page.tsx`, and `app/sustainability/page.tsx` — unique page titles, descriptions, and canonical paths.
- `app/products/[slug]/page.tsx` and `lib/products.ts` — static pages for honeycomb and air cooler cooling pads, product JSON-LD, buyer information, FAQs, related-product links, and enquiry CTAs.
- `components/StructuredData.tsx` — Organization, LocalBusiness, WebSite, Product, and BreadcrumbList JSON-LD. No prices, ratings, reviews, or certifications were invented.
- `components/Breadcrumbs.tsx` — visible breadcrumbs and matching BreadcrumbList data on secondary pages.
- `app/sitemap.ts` and `app/robots.ts` — seven absolute canonical URLs in the sitemap; all public routes allowed, with only `/api/` disallowed; sitemap declared in robots.
- `next.config.ts` — permanent `www.coolnestindustries.com` to apex-domain redirect.
- `components/About.tsx`, `components/SiteSections.tsx`, `components/Sustainability.tsx`, and `app/sustainability/page.tsx` — original image selections retained; product-enquiry paths and less speculative copy.
- `components/QuoteEnquiryForm.tsx` and `app/contact/page.tsx` — product-specific enquiry selection from product-page links and the `?product=` query parameter.
- `scripts/verify-ui.mjs` — browser checks cover the core routes and desktop/mobile layouts, product navigation, enquiry inputs, and mobile navigation.

## C. Keyword mapping

| Page | Primary intent and keyword themes |
| --- | --- |
| `/` | Coolnest Industries; Coolnest Industries Hapur; honeycomb cooling pad manufacturer in Hapur; cooling pad manufacturer in Hapur |
| `/products` | Cooling pad categories; evaporative cooling pads; air cooler pads; industrial and air-washer enquiries; custom sizes; bulk/wholesale enquiry; 5090 and 7090 profiles |
| `/products/honeycomb-cooling-pads` | Honeycomb cooling pad manufacturer/supplier in Hapur; honeycomb evaporative cooling pads; Hapur, Uttar Pradesh |
| `/products/air-cooler-cooling-pads` | Air cooler cooling pad manufacturer in Hapur; replacement and bulk air cooler pad enquiries |
| `/about` | Coolnest Industries manufacturer; company identity, founders, and Hapur location |
| `/contact` | Contact and quote intent; Hapur address, phones, email, directions, and enquiry form |
| `/sustainability` | Informational intent about honeycomb media and evaporative cooling; supporting rather than primary commercial target |

The brief also lists cellulose, industrial, air-washer, 5090, and 7090 products. The catalog mentions those only as enquiry categories or listed profiles. Separate landing pages are deferred until the owner supplies enough confirmed specifications and original content to make them genuinely useful. No page was created for a keyword alone.

No search volumes, ranking positions, difficulty scores, or traffic estimates have been fabricated.

## D. Local SEO strategy

Hapur is the primary location on the homepage, company pages, and product pages. Uttar Pradesh is included as the broader location. Delhi NCR and India remain expansion targets, not separate location pages, because no service-area details or location-specific proof was supplied.

A public search-result sample on 13 October 2026 for Hapur cooling-pad manufacturer terms returned Milestonne by Neutech, which describes a Hapur manufacturing location and provides product grades, applications, and customization information. Search results can vary by location and time; this sample does not prove rankings or search volume. It does show the kind of verifiable product and location detail buyers can compare. See [Milestonne by Neutech](https://www.neutech.org.in/).

To strengthen Coolnest’s local result after launch:

1. Verify the site address, phone numbers, hours, GST, and manufacturing details against the real business records.
2. Claim or verify the matching Google Business Profile, use the real business name and accurate category, set the address and map pin, add confirmed hours and the canonical website URL, and keep phone details consistent.
3. Review any factory-style images in the original set before describing them as actual Coolnest operations. Keep the restored site images unless the owner approves replacements; add only authentic photos to the Business Profile.
4. Add product material, actual dimensions and flute details, application compatibility, supply terms, and minimum quantities only when confirmed by the business.
5. Ask actual buyers for honest reviews after completed transactions; do not buy, incentivize, or invent reviews.
6. Keep the same name/address/phone on legitimate supplier directories and business listings. Prefer relevant, maintained trade directories over bulk citation packages.

Google’s documentation says a sitemap submission is a crawl hint rather than a guarantee, and advises accurate verified information in the Business Profile. See [Google’s sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) and [Business Profile edit guidance](https://support.google.com/business/answer/3039617?hl=en).

## E. Technical SEO and QA

- **Titles/descriptions:** unique metadata on each core page; homepage title is `Coolnest Industries | Honeycomb Cooling Pad Manufacturer in Hapur`.
- **Canonicals:** absolute canonical tags resolve against `https://coolnestindustries.com`; homepage canonical has no trailing slash, matching the sitemap root.
- **Open Graph/X:** shared page-level social metadata and product imagery.
- **Sitemap:** `/sitemap.xml`, seven URLs, all absolute and on the apex domain.
- **Robots:** `/robots.txt` allows public content, disallows `/api/`, and references the sitemap.
- **Redirect:** `www` redirects permanently to the apex host. Confirm the same behavior on the deployed host; local host-header test returned HTTP 308.
- **Structured data:** Organization, LocalBusiness, WebSite, Product, and BreadcrumbList are emitted in server-rendered HTML. Business details are from the project/brief and require owner confirmation.
- **Product rich results limitation:** Product markup has no Offer, Review, or AggregateRating, because no truthful price, stock, or verified reviews were supplied. Google’s Product snippet guidance requires at least one of those properties for product-snippet eligibility. Do not add made-up values; a confirmed quote/price model or genuine reviews would be needed before considering them. See [Google’s Product snippet requirements](https://developers.google.com/search/docs/appearance/structured-data/product-snippet).
- **Images:** Original image files remain in their previous page placements. Next.js Image is used with dimensions and responsive sizes; Next image delivery is configured for AVIF/WebP.
- **Indexable content:** product and company content is server-rendered/static HTML; product pages are statically generated.
- **Internal links:** checked 172 local anchor references across seven pages; 17 unique local route/fragment targets returned successfully, with no missing fragment targets found.
- **Automated checks:** `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run test:ui` passed. A rendered metadata scan found unique titles and checked descriptions, canonicals, Open Graph, and Twitter cards on all seven routes. The UI test covers seven routes at 1440px desktop and 390px mobile, checks missing images, horizontal overflow, browser errors, an enquiry default, product navigation, and mobile navigation.
- **Endpoint checks:** local production server returned HTTP 200 for the homepage, product page, robots, and sitemap; homepage and product canonical URLs matched the expected domain; Organization, LocalBusiness, WebSite, and Product markup were present; sitemap contained seven URLs.
- **Performance:** these checks do not establish a Lighthouse score or real-user LCP/INP/CLS. Measure after public deployment.

## F. Manual actions required

1. **Confirm business facts before publishing.** Check the address and map pin, both phone/WhatsApp numbers, email, opening hours, GST number, founders, product categories, and whether the business accepts custom and bulk orders. Correct the source data if anything changed.
2. **Supply technical product details.** Confirm material, dimensions/thickness, 5090 and 7090 definitions, flute/profile variants, colors if offered, compatible applications, availability, order minimums, and delivery areas. Then expand the product pages with those verified details.
3. **Deploy to the official domain.** Configure HTTPS and the apex domain, keep `www` forwarding to the apex, and verify the actual live homepage, product pages, `/robots.txt`, and `/sitemap.xml` after deployment.
4. **Search Console.** Add and DNS-verify the `coolnestindustries.com` Domain property. Submit `https://coolnestindustries.com/sitemap.xml`; inspect the homepage and two product URLs, request indexing where appropriate, and review indexing/canonical reports. Sitemap submission does not guarantee indexing.
5. **Google Business Profile.** Claim/verify the owner-managed listing. Match the real signage name, accurate category, full address and pin (or hide the address if customers are not served there), true opening hours, phone, website URL, and only genuine service areas. Add real photos and maintain the profile. Google describes these controls in its [Business Profile guidance](https://support.google.com/business/answer/3039617?hl=en).
6. **Analytics and conversion tracking.** Create a GA4 property and provide its measurement ID if tracking is wanted. Add events for successful quote-form submission, phone taps, directions clicks, and WhatsApp clicks; test those events in DebugView. The project had no GA4 integration. The local UI check did not submit the form or send an email; confirm SMTP environment variables on the deployed host and submit one owner-controlled test enquiry.
7. **Photos, reviews, citations.** The site's original image set has been restored. If any image is described as a real factory scene, verify that it depicts actual Coolnest operations. Request honest reviews from actual buyers and create/clean up a small set of relevant local/industry listings with matching NAP.
8. **Post-deploy validation.** Run Google’s Rich Results Test and Schema.org Validator on the live pages; use URL Inspection and PageSpeed Insights; check real-user Core Web Vitals when Google has enough field data.

## G. Measurement plan

- **Indexation:** Search Console Page indexing report, sitemap processing status, and URL Inspection for the seven sitemap URLs. Check that Google-selected canonicals match the apex URLs.
- **Organic discovery:** in Search Console Performance, compare consecutive 28-day periods for clicks, impressions, CTR, and average position. Segment by page and filter queries for `Coolnest`, `Hapur`, `honeycomb cooling pad`, `air cooler cooling pad`, `5090`, and `7090`. Treat average position as an aggregate, not a guaranteed location-specific rank.
- **Brand visibility:** trend branded query impressions/clicks separately from non-brand local manufacturing queries.
- **Qualified enquiries:** in GA4, count successful quote submissions and click-to-call/directions/WhatsApp actions. Review enquiry quality separately by product, required quantity, and delivery location; analytics events do not measure lead quality on their own.
- **Performance:** review Search Console Core Web Vitals and PageSpeed Insights after deployment. Report field data separately from any one-off lab run.
- **Cadence:** establish the first post-launch 28-day baseline, then review monthly and compare like-for-like periods. Annotate major content, profile, or site changes.

## H. Remaining limitations

- No code deployment, DNS edit, Google account verification, Business Profile edit, sitemap submission, or indexing request was performed.
- The live public domain was not validated from the local production build; local requests only prove the implementation when served by the project.
- Business facts originate from the supplied brief and project data; the owner still needs to verify exact NAP/hours/GST and product claims.
- No Search Console, GA4, Google Keyword Planner, or rank-tracking data was available. Public search sampling is qualitative only.
- Product pages intentionally omit unconfirmed technical specifications and pricing. Rich-result eligibility, ranking, traffic, and lead volume cannot be promised.
- No real email was sent during the UI check; confirm the SMTP setup with an owner-controlled enquiry on the deployed system.
- Lighthouse and field Core Web Vitals remain unmeasured.
