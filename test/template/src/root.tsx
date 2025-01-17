// @refresh reload
import { Routes } from "@solidjs/router";
import { Suspense } from "solid-js";
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Scripts } from "solid-start";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />,
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
