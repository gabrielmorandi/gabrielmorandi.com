import PreLoader from "./components/PreLoarder"
import PortfolioCard from "./components/PortfolioCard"
import LinkHero from "./components/LinkHero"
import Footer from "./components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <PreLoader />
      <header className="sticky top-0 z-20 grid w-full py-5 bg-zinc-950 place-items-center drop-shadow-sm">
        <Link href="/" className="flex w-11/12 max-w-[1160px]">
          <h1 className="text-2xl font-bold leading-none text-white opacity-0 w-max fade-up">
            G<span>abriel</span> M<span>orandi</span>
          </h1>
        </Link>
      </header>
      <main className="grid w-full mt-4 place-items-center">
        <section className="flex flex-col w-11/12 max-w-[1160px] gap-2">
          <h2 className="text-4xl font-black tracking-tighter opacity-0 fade-up-stagger">
            Frontend Enginner.
          </h2>
          <h3 className="fade-up-stagger max-w-[600px] text-lg">
            Gosto de criar produtos front-end sólidos, responsivos e escaláveis
            ​​com ótimas experiências de usuário.
          </h3>
          <div className="flex flex-wrap gap-2">
            <LinkHero
              text="Github"
              href={"https://github.com/gabrielmorandi/"}
            />
            <LinkHero
              text="LinkedIn"
              href={"https://www.linkedin.com/in/gabrielmorandi/"}
            />
            <LinkHero
              text="Instagram"
              href={"https://www.instagram.com/morandi_gabriel/"}
            />
            <LinkHero
              text="WhatsApp"
              href={
                "https://api.whatsapp.com/send/?phone=5594992644225&text&type=phone_number&app_absent=0"
              }
            />
            <LinkHero type="email" />
          </div>
          <div className="flex py-4">
            <h2 className="text-4xl font-black tracking-tighter opacity-0 fade-up-stagger">
              Projetos
            </h2>
          </div>
        </section>
        <section className="flex flex-col w-11/12 max-w-[1160px] gap-6 md:grid md:grid-cols-2 mt-4">
          <PortfolioCard
            type="WebSite"
            websiteUrl="https://components.gabrielmorandi.com/"
            githubUrl="https://github.com/gabrielmorandi/components"
            title="Frontend Components"
            src="/Frontend Components.webp"
            tags={["Next.js", "TailwindCss"]}
          />
          <PortfolioCard
            type="WebSite"
            websiteUrl="https://morandi-dictionary-web-app.netlify.app/"
            githubUrl="https://github.com/gabrielmorandi/dictionary-app"
            title="Dicionário Web"
            src="/Dictionary Web.webp"
            tags={["React", "TypeScript", "Sass", "Api"]}
          />
          <PortfolioCard
            type="WebSite"
            websiteUrl="https://gabrielmorandi.github.io/exerciseFrontend/FrontendMentor/designo-multi-page-website/starter-code/"
            githubUrl="https://github.com/gabrielmorandi/exerciseFrontend/tree/main/FrontendMentor/designo-multi-page-website"
            title="Designo Website"
            src="/Designo Website.webp"
            tags={["Html", "JavaScript", "Sass"]}
          />
          <PortfolioCard
            type="WebSite"
            websiteUrl="https://gabrielmorandi.github.io/exerciseFrontend/FrontendMentor/product-feedback-app/starter-code/"
            githubUrl="https://github.com/gabrielmorandi/exerciseFrontend/tree/main/FrontendMentor/product-feedback-app"
            title="Feedback de Produto"
            src="/Product Feedback.webp"
            tags={["Html", "JavaScript", "Sass", "Api"]}
          />
          <PortfolioCard
            type="WebSite"
            websiteUrl="https://gabrielmorandi.github.io/exerciseFrontend/FrontendMentor/Typemaster%20pre-launch%20landing%20page/starter-code/"
            githubUrl="https://github.com/gabrielmorandi/exerciseFrontend/tree/main/FrontendMentor/Typemaster%20pre-launch%20landing%20page"
            title="Typemaster Pré-lançamento"
            src="/Typemaster Pre-launch Landing Page.webp"
            tags={["Html", "Sass"]}
          />
          <PortfolioCard
            type="WebSite"
            websiteUrl="https://cofeeroasters-morandi.netlify.app/"
            githubUrl="https://github.com/gabrielmorandi/exerciseFrontend/tree/main/FrontendMentor/Coffeeroasters-subscription-site"
            title="Coffeeroasters Website"
            src="/Coffeeroasters.webp"
            tags={["Next.js", "Sass"]}
          />
          <PortfolioCard
            type="WebSite"
            websiteUrl="https://morandi-quiz-app.netlify.app/"
            githubUrl="https://github.com/gabrielmorandi/Web-Quiz"
            title="Web Quiz"
            src="/Web Quiz.webp"
            tags={["Next.js", "TailwindCss"]}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}
