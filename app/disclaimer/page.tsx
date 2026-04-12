import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Disclaimer - TechVyro',
  description: 'Disclaimer for TechVyro - Important information about our content sources, third-party data, and limitations.',
}

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-24 md:pb-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Disclaimer</h1>
        <p className="text-muted-foreground mb-8 text-sm">Last updated: March 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mt-0.5 shrink-0" />
              <p className="text-foreground">
                Please read this disclaimer carefully before using TechVyro. By accessing our website, you acknowledge that you have read, 
                understood, and agree to the terms outlined below.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Content Information</h2>
            <p>
              <strong className="text-foreground">TechVyro</strong> is an entertainment discovery and information platform. We provide details 
              about movies and TV shows including synopses, cast information, ratings, release dates, and trailers. All content displayed on 
              TechVyro is for <strong className="text-foreground">informational and entertainment purposes only</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. No Streaming or Hosting</h2>
            <p>
              <strong className="text-foreground">TechVyro does not host, stream, or provide any copyrighted video content.</strong> We do not 
              store any movies, TV shows, or other media files on our servers. The &quot;Play&quot; functionality on our platform is designed to help 
              users find legitimate streaming services where content may be available.
            </p>
            <p className="mt-2">
              Trailers displayed on TechVyro are embedded from YouTube and are subject to YouTube&apos;s Terms of Service. We do not have control 
              over the availability of these trailers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Third-Party Data Sources</h2>
            <p>
              All movie and TV show information displayed on TechVyro is sourced from <strong className="text-foreground">The Movie Database (TMDB)</strong>. 
              While we strive to display accurate information, we cannot guarantee the accuracy, completeness, or timeliness of the data provided by TMDB.
            </p>
            <div className="mt-3 p-4 rounded-lg bg-muted/30 border border-border/50">
              <p className="text-sm">
                <strong className="text-foreground">TMDB Attribution:</strong> This product uses the TMDB API but is not endorsed or certified by TMDB. 
                All movie data, TV show data, and images are provided by TMDB and belong to their respective copyright holders.
              </p>
              <p className="text-sm mt-2">
                <a href="https://www.themoviedb.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Visit The Movie Database (TMDB)
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p>
              All movie titles, TV show titles, character names, images, posters, logos, and related media displayed on TechVyro are 
              trademarks and copyrights of their respective studios, production companies, and distributors. TechVyro does not claim 
              ownership of any third-party content.
            </p>
            <p className="mt-2">
              The use of such content on TechVyro is for informational purposes and falls under fair use for commentary and criticism.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Accuracy of Information</h2>
            <p>
              While we make reasonable efforts to ensure the information displayed is accurate, TechVyro makes no representations or 
              warranties about the accuracy, reliability, or completeness of any information on this website. Information such as ratings, 
              release dates, and cast details may change without notice.
            </p>
            <p className="mt-2">
              Users are encouraged to verify information from official sources before making decisions based on content displayed on TechVyro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. External Links</h2>
            <p>
              TechVyro may contain links to external websites and services. We are not responsible for the content, privacy practices, 
              or availability of these external sites. Clicking on external links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. User-Generated Features</h2>
            <p>
              Features such as watchlists and viewing history are stored locally in your browser (localStorage). TechVyro does not have 
              access to this data, and it is not backed up on our servers. Clearing your browser data will remove this information permanently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Advertisements</h2>
            <p>
              TechVyro displays advertisements through Google AdSense and potentially other advertising networks. We do not control the 
              content of these advertisements. If you encounter inappropriate ads, please report them to us or directly to the advertising network.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Age Recommendations</h2>
            <p>
              Movie and TV show ratings (G, PG, PG-13, R, etc.) are provided by certification boards and are displayed for informational 
              purposes. Parents and guardians should use their own judgment when allowing minors to access content information on TechVyro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Limitation of Liability</h2>
            <p>
              TechVyro and its operators shall not be held liable for any damages arising from the use of this website, including but not 
              limited to direct, indirect, incidental, or consequential damages. Use of TechVyro is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to This Disclaimer</h2>
            <p>
              We reserve the right to modify this disclaimer at any time. Changes will be posted on this page with an updated date. 
              Continued use of TechVyro after changes constitutes acceptance of the modified disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact</h2>
            <p>
              If you have questions about this disclaimer or believe content on TechVyro infringes your rights, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p>
                <strong className="text-foreground">Email:</strong>{' '}
                <a href="mailto:techvyro@gmail.com" className="text-primary hover:underline">
                  techvyro@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
