import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoVista",
  description: "One place dashboard for eco information",
};

export default function RootLayout({
  aqi,
  temperature,
  wind,
  weather,
  children,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="background "
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
