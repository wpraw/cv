import { Link } from 'react-router'
import LaserFlow from '~/components/LaserFlow'
import { LogoLoop } from '~/components/LogoLoop'
import TextType from '~/components/TextType'
import { carouselLogos } from '~/lib/carouselLogos'
import personPlaceholder from '~/assets/person placeholder.png'
import '@lib/styles/buttons.css'

export const HomePage = () => {
  return (
    <div className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <nav className="container absolute mx-auto px-6 py-6 flex justify-between items-end-safe w-full z-20">
        <div className="flex gap-6">
          <Link to="/kontakt" className="hover:text-purple-400 transition-colors cursor-pointer p-2">
            Kontakt
          </Link>
          <Link to="/playground" className="hover:text-purple-400 transition-colors cursor-pointer p-2">
            Playground
          </Link>
        </div>
      </nav>

      <section className="container max-w-5xl mx-auto px-6 text-center">
        <LaserFlow verticalBeamOffset={-0.5} />
        <div className="max-w-5xl mx-auto border-3 rounded-4xl border-(--laser-flow-color) px-10 py-20 bg-[linear-gradient(to_right,rgba(30,41,59,0.9)_0%,rgba(51,65,85,0.95)_50%,rgba(30,41,59,0.9)_100%)] backdrop-blur-sm shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] flex items-center justify-center">
          <img src={personPlaceholder} alt="Wojciech Prawdzik" className="w-64 h-64 rounded-full" />
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Wojciech Prawdzik
            </h1>
            {/* <div className="flex gap-4 flex-1"> */}
            <div className="flex items-center justify-center flex-1">
              <TextType
                text={['Frontend Developer', 'Software Engineer', 'Tech enthusiast', 'Team player']}
                className="text-2xl md:text-3xl font-semibold mb-8 text-purple-300 "
                as={'h2'}
              />
            </div>
            {/* </div> */}
            {/* <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-300">
            Frontend Developer
          </h2> */}
            {/* <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Tworzę nowoczesne aplikacje webowe z naciskiem na jakość kodu,
            wydajność i doświadczenie użytkownika. Pasjonuję się rozwiązywaniem
            złożonych problemów technicznych i budowaniem skalowalnych
            rozwiązań.
          </p> */}

            {/* <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/kontakt"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-purple-500/50"
              >
                Skontaktuj się
              </Link>
              <a
                href="https://github.com/wojciechprawdzik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-colors border border-slate-700"
              >
                GitHub
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technologie</h2>
        <LogoLoop logos={carouselLogos} className="mx-auto" />
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Doświadczenie</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">Full Stack Developer</h3>
            <p className="text-gray-400 mb-4">2020 - obecnie</p>
            <p className="text-gray-300 leading-relaxed">
              Rozwijam aplikacje webowe wykorzystując najnowsze technologie. Specjalizuję się w tworzeniu responsywnych
              interfejsów użytkownika oraz skalowalnych backendów.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">Projekty Open Source</h3>
            <p className="text-gray-400 mb-4">Aktywny kontrybutor</p>
            <p className="text-gray-300 leading-relaxed">
              Wspieram społeczność programistów poprzez udział w projektach open source i dzielenie się wiedzą.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto bg-linear-to-r from-purple-600/20 to-pink-600/20 p-12 rounded-2xl border border-purple-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Chcesz współpracować?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Jestem otwarty na nowe projekty i możliwości współpracy. Skontaktuj się ze mną!
          </p>
          <Link
            to="/kontakt"
            // className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-purple-500/50"
            className='gradient-button'
          >
            Napisz do mnie
          </Link>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-8 border-t border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© {new Date().getFullYear()} Wojciech Prawdzik</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/wojciechprawdzik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
            <Link to="/kontakt" className="text-gray-400 hover:text-purple-400 transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
