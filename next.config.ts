import type { NextConfig } from "next";

// The standalone distributor page was folded into the unified contact form.
// Any previously shared URL lands on the contact form with the
// Distributor / Partnership inquiry type preselected.
const DISTRIBUTOR_PATHS = ["partner-distributor", "distributor"];

// The product catalogue was restructured into two families: Motorcycle and Car.
// Discontinued families (car-multimedia, car-safety-security) and their product
// pages have no one-to-one replacement, so they land on the Car family page.
// The MotoPlay route simply moved, so its product slugs are carried across.
const RETIRED_CAR_PATHS = ["car-multimedia", "car-safety-security"];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://ecdn6-nc.globalso.com/**")],
  },
  async redirects() {
    return [
      ...DISTRIBUTOR_PATHS.flatMap((path) => [
        {
          source: `/:locale(tr|en)/${path}`,
          destination: "/:locale/contact?type=distributor",
          permanent: true,
        },
        {
          // Unprefixed legacy URL — send to the default locale
          source: `/${path}`,
          destination: "/tr/contact?type=distributor",
          permanent: true,
        },
      ]),

      // Signature Audio Series — page removed, homepage teaser retained.
      {
        source: "/:locale(tr|en)/products/signature-audio-series",
        destination: "/:locale/products",
        permanent: true,
      },
      { source: "/products/signature-audio-series", destination: "/tr/products", permanent: true },

      // MotoPlay moved from /products/motorcycle-smart-systems to
      // /products/motorcycle. Product slugs are unchanged, so they map 1:1.
      {
        source: "/:locale(tr|en)/products/motorcycle-smart-systems/:slug",
        destination: "/:locale/products/motorcycle/:slug",
        permanent: true,
      },
      {
        source: "/:locale(tr|en)/products/motorcycle-smart-systems",
        destination: "/:locale/products/motorcycle",
        permanent: true,
      },
      {
        source: "/products/motorcycle-smart-systems/:slug",
        destination: "/tr/products/motorcycle/:slug",
        permanent: true,
      },
      {
        source: "/products/motorcycle-smart-systems",
        destination: "/tr/products/motorcycle",
        permanent: true,
      },

      // Discontinued car families and every product/brand page beneath them.
      // No equivalent product exists in the new catalogue, so these land on the
      // Car Technology Systems page rather than guessing a replacement.
      ...RETIRED_CAR_PATHS.flatMap((path) => [
        {
          source: `/:locale(tr|en)/products/${path}/:rest*`,
          destination: "/:locale/products/car",
          permanent: true,
        },
        {
          source: `/products/${path}/:rest*`,
          destination: "/tr/products/car",
          permanent: true,
        },
      ]),
    ];
  },
};
export default nextConfig;
