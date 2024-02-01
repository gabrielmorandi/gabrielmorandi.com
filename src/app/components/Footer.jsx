import Link from "next/link"

export default function Footer() {
  return (
    <footer className="grid w-full py-4 mt-6 opacity-0 place-items-center bg-zinc-950 fade-up">
      <div className="flex w-11/12 max-w-[1160px]">
        <Link href="/" className="flex">
          <h2 className="font-bold leading-none text-white text-1xl md:text-2xl w-max">
            © 2024, G<span>abriel</span> M<span>orandi</span>
          </h2>
        </Link>
      </div>
    </footer>
  )
}
