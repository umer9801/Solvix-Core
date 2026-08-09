import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { FloatingActions, Loader, ReadingProgress } from "@/components/site/Chrome";
import { Blobs } from "@/components/site/primitives";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <Blobs />
      <div className="max-w-xl text-center">
        <p className="font-display text-[9rem] leading-none tracking-tighter md:text-[14rem]">404</p>
        <h1 className="display-md mt-2">This page took a different route.</h1>
        <p className="mt-4 text-muted-foreground">
          The link may be retired, or the page moved during a redesign. Everything else is still
          where you left it.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background"
          >
            Back home
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-md">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Solvix Core — AI Solutions, Web Development & Automation | Serving Globally" },
      {
        name: "description",
        content:
          "Solvix Core delivers AI solutions, web development, automation, Shopify stores and app development for businesses worldwide. Affordable pricing starting from $299 USD. Serving Canada, UK, Pakistan and globally.",
      },
      { name: "author", content: "Solvix Core" },
      { name: "keywords", content: "AI solutions, web development, automation, Shopify development, n8n automation, LangChain, OpenAI integration, mobile app development, SEO services, digital marketing, affordable web design, cheap web development, web developer Canada, web developer UK, web developer Pakistan, AI agency, automation agency, Solvix Core" },
      { property: "og:title", content: "Solvix Core — AI Solutions, Web Development & Automation" },
      {
        property: "og:description",
        content:
          "Premium AI, automation, web development and e-commerce solutions for businesses worldwide. Starting from $299 USD.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo.png" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:site_name", content: "Solvix Core" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Solvix Core — AI Solutions & Web Development" },
      { name: "twitter:description", content: "Affordable AI, web development and automation services globally. From $299 USD." },
      { name: "twitter:image", content: "/logo.png" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "theme-color", content: "#2563eb" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { name: "rating", content: "general" },
      { name: "geo.region", content: "CA-ON, GB-LND, PK-PB" },
      { name: "geo.placename", content: "Ottawa, London, Lahore" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Manrope:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "shortcut icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Loader />
      <ReadingProgress />
      <Nav />
      <main className="pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
