import { ReactNode } from "react";
import "./globals.css";

type RootLayoutType = {
  children: ReactNode;
};
const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <html>
      <head>
        <title>JeetMaterials</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="JeetMaterials - All Competitive study materials at one place"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
