import { Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const jetBrains = JetBrains_Mono({
  weight: ['400'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Abner Ferreira | Dev Front-end",
  description: "Portfólio de Abner Rodrigues Ferreira, desenvolvedor front-end especializado em ReactJS, NextJS. Experiência em e-commerces, UX/UI, acessibilidade e performance web com foco em boas práticas e design system. Portfolio of Abner Rodrigues Ferreira, front-end developer specialized in ReactJS, NextJS. Experienced in e-commerce, UX/UI, accessibility, and web performance with a strong focus on best practices and design systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className} min-h-screen`}>
      <Header />
        {children}
      </body>
    </html>
  );
}
