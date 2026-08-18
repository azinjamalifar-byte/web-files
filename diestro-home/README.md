# Diestro Coffee — Home Page

Mobile-first, RTL, cinematic-but-warm home page for the Diestro Coffee
redesign. Built per `AzinJamalifarDiestroProposal.pdf` and
`Diestro_Website_Redesign_Brief_2.pdf`, referencing `oryzo.ai` (full-viewport
scroll storytelling, product-as-hero) and `theoystermanevents.co.uk` (warm,
asymmetric, handcrafted character).

## Files

```
diestro-home/
├── preview.html                 ← open directly in a browser, no server needed
├── template-home-diestro.php    ← the WordPress deliverable
├── assets/
│   ├── css/diestro-home.css     ← design tokens + all styles (mobile-first)
│   ├── js/diestro-home.js       ← header state, mobile nav, reveal-on-scroll,
│   │                              roasting-story scrub (GSAP ScrollTrigger)
│   ├── js/gsap.min.js           ← self-hosted, no CDN dependency
│   ├── js/ScrollTrigger.min.js  ← self-hosted (GSAP + all plugins are free
│   │                              since Sept 2024 — no license needed)
│   ├── fonts/                   ← Vazirmatn (Persian) + Fraunces (Latin
│   │                              accent), woff2 only, ~180KB total
│   └── img/
│       ├── logo/diestro-logo.png       ← real logo, background removed
│       ├── products/{alto,sereno,bizarro,ciento}.webp  ← real packaging photos
│       └── hero/                       ← hero cutout + beans macro crop
```

## Installing into WordPress

1. Copy `template-home-diestro.php` and `assets/` into the active theme's
   root directory (e.g. `wp-content/themes/your-theme/`).
2. In WP Admin → Pages, create/edit the front page → Page Attributes →
   Template → select **"دیسترو - صفحه اصلی"**.
3. Set that page as the site's static front page under Settings → Reading.
4. The template calls `wp_head()` / `wp_body_open()` / `wp_footer()`, so
   plugins, tracking scripts, and the admin bar keep working. It renders its
   own `<html>`/`<head>` rather than `get_header()`/`get_footer()`, because
   this is a landing-page-style template that owns its full markup — it does
   not depend on (or fight with) whatever the current theme's header/footer
   already do.

No theme `functions.php` changes are required — the template enqueues its
own CSS/JS/fonts directly via `get_theme_file_uri()`, scoped to itself.

## What's real vs. placeholder

**Real, sourced from the brand assets you provided:**
- Logo (background-removed from your JPEG), colors sampled directly from it
  and from packaging (`#003058` navy, `#bc7e19` amber, plus each product
  line's own accent).
- Product photography: Alto, Sereno, Bizarro, Ciento — actual packaging
  shots, cropped/optimized (not stock imagery).
- Product names, roast levels, blend ratios, and flavor notes — read off
  the real packaging.
- IA, nav labels, footer structure, contact numbers, and brand phrases
  ("دستان ماهر" / "با دستان ماهر") — taken from the current live site
  screenshot you sent, so the redesign keeps the brand's own voice rather
  than inventing one.

**Placeholder, flagged for you to replace:**
- **Prices** for Alto/Sereno/Bizarro/Ciento — I didn't have your real price
  list for these four SKUs, so I used illustrative Toman figures in the same
  range as the real prices visible on the current site (400K–1.15M). Replace
  `'price'` in the `$diestro_featured_products` array in the PHP template
  (or the hardcoded spans in `preview.html`).
- **Visual Flavor Profile bars** (intensity/bitterness/acidity) — per your
  answer, these are estimated from each product's roast level and
  Arabica/Robusta ratio (e.g. Bizarro's 60% Robusta + medium-dark roast →
  higher intensity/bitterness than Alto's 100% Arabica floral-fruity). Swap
  `'profile'` values once you have real cupping data.

## Wiring to WooCommerce (next step, out of scope for this build)

The home page currently reads product data from the `$diestro_featured_products`
PHP array at the top of `template-home-diestro.php` — this keeps the template
fully functional and previewable before any products exist in the store.
To wire it to real inventory:

```php
$diestro_featured_products = array();
$wc_products = wc_get_products( array( 'sku' => array( 'alto', 'sereno', 'bizarro', 'ciento' ) ) );
foreach ( $wc_products as $p ) {
    $diestro_featured_products[] = array(
        'name'  => $p->get_name(),
        'price' => number_format_i18n( $p->get_price() ),
        'image' => wp_get_attachment_image_url( $p->get_image_id(), 'medium' ),
        // 'roast', 'blend', 'flavor_note', 'profile' → map from your own
        // product attributes/ACF fields once those exist on the SKU.
        ...
    );
}
```

The cart icon and "مشاهده همه محصولات" link already fall back to
`wc_get_cart_url()` / `wc_get_page_permalink( 'shop' )` when WooCommerce is
active, and to `#products` when it isn't (so the template never fatals on a
site without WooCommerce installed).

## Proposal requirements — self-check

| Requirement | Status |
|---|---|
| Hero: brand intro, product image, premium message, primary CTA | ✅ |
| Roasting Story: full-viewport pinned scroll, hand → bean, green→roasted, roast level shown, ends in packaging moving toward viewer, short honest captions, 5 frames, lightweight (SVG + GSAP ScrollTrigger, no video) | ✅ |
| Featured Products: real photos, cards ready for Visual Flavor Profile (intensity/bitterness/acidity + flavor tags) | ✅ |
| Brand Story: warm tone, asymmetric (not 3-col grid), handcrafted/artisanal emphasis | ✅ |
| Product Discovery teaser: Brew Assistant + Coffee Passport, intro-only, CTA to shop | ✅ |
| Footer: contact, social, logo, secondary nav | ✅ |
| Mobile-first (coded mobile → expanded to desktop, not the reverse) | ✅ — base CSS is unprefixed mobile; `min-width` media queries layer on tablet/desktop |
| Color from logo + product photos (navy/gold baseline, finalized from real assets) | ✅ — sampled exact hex values, see CSS `:root` tokens |
| Serif headline + clean sans body, legible Persian font | ✅ — Vazirmatn (Persian, all text) + Fraunces (Latin accent: product names, eyebrows, numerals) |
| Consistent spacing/grid system | ✅ — CSS custom-property spacing scale, single `.container` + breakpoint set reused everywhere |
| Lightweight, purposeful motion (GSAP/scroll-trigger) | ✅ — GSAP core + ScrollTrigger only, self-hosted (~118KB combined); `prefers-reduced-motion` disables pin/scrub |
| Performance: fast load, optimized images, lazy-load below fold | ✅ — WebP throughout, hero/first-viewport images eager + `fetchpriority="high"`, everything below the fold `loading="lazy"`, fonts subset to Arabic+Latin only (~180KB total), no external font/script CDN requests |
| Persian + RTL | ✅ — `dir="rtl"`, `lang="fa"`, logical CSS properties (`inset-inline-start`, etc.) throughout, so nothing needs manual RTL patching |
| Oryzo influence: full-viewport sections, product-as-hero, tight palette, scroll-driven bean state | ✅ |
| Oysterman influence: warm tone, asymmetric brand-story layout, small artisanal detail (wax-stamp-style badge) | ✅ |

## Known gaps / explicitly out of scope

- **Live site (`diestrocoffee.com`) could not be fetched** from this
  environment (network policy blocks the domain) — the current-site
  reference came from the full-page screenshot you sent instead, which
  covered everything needed (nav, hero copy, sections, footer, contact info).
- This is the **home page only**, as scoped — shop/product/cart/checkout
  pages, the Brew Assistant and Coffee Passport themselves (only teased
  here), and the blog/magazine are not part of this build.
- No A/B of the exact final Toman prices or cupping-lab flavor scores — see
  "What's real vs. placeholder" above.
