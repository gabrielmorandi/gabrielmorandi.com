import { Noto_Sans } from "next/font/google"
import "./globals.css"

const noto = Noto_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Gabriel Morandi | Portifólio",
  description:
    "Eu me chamo Gabriel Morandi de Mello, sou um Web Developer e este é o meu portfólio.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  )
}
