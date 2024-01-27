"use client";
import { Provider } from "react-redux";

import { store } from "./../app/store";
import "./../app/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";

//  use Google font
// const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

// or use localFont
const vazirmatn = localFont({
  src: [
    {
      path: "./../public/fonts/webfonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/webfonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={vazirmatn.className}>
        <Provider store={store}>{children}</Provider>
        <ToastContainer position='bottom-right' autoClose={5000} theme='colored' rtl />
      </body>
    </html>
  );
}
