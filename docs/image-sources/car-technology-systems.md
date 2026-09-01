# Image Sources — Car Technology Systems

## Status: photography supplied for APOLLON VX1–VX5

The five VX cameras have official product photography (VX1 added 2026-08-26,
VX2–VX5 added 2026-08-30). The other five Car Technology Systems products have
none, so their cards and detail pages render a neutral "coming soon" panel in
the site's own styling. **No placeholder, stock, or substitute imagery has been
introduced** for them.

### Supplied — the VX series

Original PNGs (1448 × 1086, opaque white background), used as-is. Rendered with
`unoptimized` and `object-contain` on a white panel so the full hardware stays
visible, nothing is cropped, and the clean white product background is preserved
(no WebP re-encode, no downscale).

All files live under `public/images/car-safety-and-security/<slug>/`, with the
gallery in a `gallery/` subfolder.

| Product | Main image | Gallery |
| --- | --- | --- |
| APOLLON VX1 | `vx1/main.png` | `vx1-gallery-01…05.png` |
| APOLLON VX2 | `vx2/main.png` | `vx2-gallery-01…04.png` |
| APOLLON VX3 | `vx3/1.png` | `vx3-gallery-01…04.png` |
| APOLLON VX4 | `vx4/main.png` | `vx4-gallery-01…05.png` |
| APOLLON VX5 | `vx5/main.png` | `vx5-gallery-01…07.png` |

Two conventions worth knowing before touching these:

- The folder is `car-safety-and-security` (with "and"), matching the existing
  DC-UHD04 convention already in the repository — not `car-safety-security`.
- **VX3's primary image is `1.png`, not `main.png`.** That is the filename as
  supplied; the catalogue entry points at the real file rather than renaming
  the asset or duplicating it.

The last gallery slot of VX2, VX3, VX4 and VX5 is the same shared accessories
shot (auxiliary camera with bracket, in-car charger, USB-C cable) — one file
per product folder, byte-identical across the four.

The old JXPlayCar imagery under `public/images/products/bmw/` and the DC-UHD04
photography under `public/images/car-safety-and-security/` belong to
discontinued products and **must not** be reused for these products.

## Where to drop the assets

Each product's `imageBase` is already recorded in `lib/products/car.ts`. Create
the folder and add the files, following the same convention the MotoPlay
products use (`hero` image plus a `gallery/` subfolder):

| Product              | Expected folder                              |
| -------------------- | -------------------------------------------- |
| APOLLON VX1–VX5      | supplied — see above                          |
| APOLLON VISION 360   | `public/images/products/car/vision-360/`     |
| APOLLON Q4 PRIME     | `public/images/products/car/q4-prime/`       |
| APOLLON Q4 PRO       | `public/images/products/car/q4-pro/`         |
| APOLLON Q8 ELITE     | `public/images/products/car/q8-elite/`       |
| APOLLON Q8 SIGNATURE | `public/images/products/car/q8-signature/`   |

Within each folder:

```
hero.png            # or .webp — primary product image
gallery/*.png       # optional additional views
```

## Wiring the images up

The plumbing already exists. Both pages branch on the data, so adding photography
for a remaining product means only filling in `mainImage` and `galleryImages` on
that product's `en` and `tr` blocks in `lib/products/car.ts` — no page edits:

- `app/[locale]/products/car/page.tsx` — card image panel
- `app/[locale]/products/car/[slug]/page.tsx` — main image and gallery grid

## Vehicle brand logos — also missing

The Car page's "Designed for the Cars You Drive" compatibility section lists
Audi, BMW, Mercedes-Benz, Land Rover / Range Rover, Porsche, Toyota and Lexus.

**No brand logo assets exist in this repository** — `public/logos/` contains only
the Apollon wordmark. Per the brief, no logos were generated, redrawn,
downloaded, or simulated with styled text, so the section renders the brand
names in the site's own heading typeface inside the standard glass cards.

If licensed logo files are supplied later, add them under
`public/images/brands/<slug>.svg` and swap the text spans in the compatibility
grid of `app/[locale]/products/car/page.tsx`. Note that vehicle manufacturer
logos are trademarked; confirm permitted compatibility use before publishing.
