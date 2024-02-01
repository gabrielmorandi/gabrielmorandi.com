import Image from "next/image"
import Link from "next/link"
import ButtonBlend from "./ButtonBlend"

export default function PortfolioCard({
  src,
  type,
  title,
  tags,
  websiteUrl,
  githubUrl,
}) {
  return (
    <div className="flex flex-col w-full rounded-sm border shadow opacity-0 border-zinc-950 fade-up-card [&>div>img]:hover:scale-[1.1] md:even:mt-8 md:odd:mb-8">
      <div className="flex overflow-hidden rounded-sm">
        <Image
          src={src}
          width={1440}
          height={1056}
          alt="Project image"
          className="object-cover w-full transition-all rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-2 p-4 bg-zinc-950">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex flex-wrap">
          <h3 className="text-sm font-medium leading-none text-white">
            {type}|
          </h3>
          {tags.map((tag, index) => (
            <p
              key={index}
              className="mr-1 text-sm font-medium leading-none text-white"
            >
              {tag}
              {index < tags.length - 1 ? "," : "."}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between mt-2">
          <div className="flex h-9">
            <Link
              href={githubUrl}
              className="flex px-4 py-2.5 leading-none font-medium transition-colors bg-transparent rounded-md text-md text-white hover:bg-zinc-800"
            >
              Github
            </Link>
          </div>
          <div className="flex h-10">
            <ButtonBlend text="Visitar Website" url={websiteUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}
