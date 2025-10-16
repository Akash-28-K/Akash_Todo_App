import Link from "next/link";
import ReduxProvider from "./provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <nav  >
            <Link href="/"  >Home</Link>
            <Link href="/about"  >About</Link>
            <Link href="/products"  >Products</Link>
            <Link href="/contact"  >Contact</Link>
            <Link href="/todo"  >Todos</Link>
          </nav>
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
