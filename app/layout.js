import "./globals.css";
import localFont from "next/font/local";
import NavigationHeader from "./(components)/NavigationHeader";
import NavigationFooter from "./(components)/NavigationFooter";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/EudoxusSans-Regular.woff2", // from /public
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/EudoxusSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Etieka Foundation",
  description: "Empowering Communities, Building Futures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased min-h-screen flex flex-col w-full`}
      >
        <NavigationHeader />
        <main className="flex-1 w-full">{children}</main>
        <NavigationFooter />
      </body>
    </html>
  );
}
