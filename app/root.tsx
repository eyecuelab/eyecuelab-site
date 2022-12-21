import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css"
import logo from "../public/favicon.ico";


export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", href: logo}
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "EyeCueLab",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}