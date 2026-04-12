import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Terms of Service - TechVyro',
  description: 'Terms of Service for TechVyro - Read our terms and conditions for using the platform.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-24 md:pb-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8 text-sm">Last updated: March 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong className="text-foreground">TechVyro</strong> (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). 
              If you do not agree to these Terms, please do not use the Service. We reserve the right to modify these Terms at any time, and your continued use of the Service 
              constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
            <p>
              TechVyro is an entertainment discovery platform that provides information about movies and TV shows, including details such as ratings, cast information, 
              trailers, and more. We aggregate data from third-party sources, primarily The Movie Database (TMDB), to display this information.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Important:</strong> TechVyro does not host, stream, or provide any copyrighted video content. We only display metadata 
              and embed trailers from YouTube. For actual streaming, users are directed to legitimate platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. User Conduct</h2>
            <p className="mb-3">By using TechVyro, you agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Use automated systems (bots, scrapers) to access the Service without permission</li>
              <li>Copy, modify, or distribute any content from the Service without authorization</li>
              <li>Circumvent any security measures implemented on the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p>
              The TechVyro name, logo, and website design are our intellectual property. Movie and TV show metadata, images, and related content are provided by 
              TMDB and remain the property of their respective owners. Trailers embedded on our site are hosted by YouTube and are subject to YouTube&apos;s Terms of Service.
            </p>
            <p className="mt-2">
              This product uses the TMDB API but is not endorsed or certified by TMDB. All movie/TV data and images are property of their respective studios and distributors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
            <p className="mb-3">TechVyro integrates with the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-foreground">TMDB API:</strong> For movie and TV show data. Subject to{' '}
                <a href="https://www.themoviedb.org/terms-of-use" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  TMDB Terms of Use
                </a>
              </li>
              <li>
                <strong className="text-foreground">YouTube:</strong> For trailer embeds. Subject to{' '}
                <a href="https://www.youtube.com/t/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  YouTube Terms of Service
                </a>
              </li>
              <li>
                <strong className="text-foreground">Google AdSense:</strong> For advertisements. Subject to{' '}
                <a href="https://policies.google.com/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google Terms of Service
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Advertisements</h2>
            <p>
              TechVyro is an ad-supported service. We display advertisements through Google AdSense and other advertising networks. 
              These ads help us maintain and improve the Service at no cost to users. By using TechVyro, you consent to the display of advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
              We do not guarantee that the Service will be uninterrupted, secure, or error-free. Information displayed on TechVyro is sourced from 
              third parties and may not always be accurate or up-to-date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TECHVYRO AND ITS OPERATORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE. This includes, but is not limited to, damages for loss of 
              profits, data, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. DMCA / Copyright Complaints</h2>
            <p>
              TechVyro respects intellectual property rights. If you believe any content on our platform infringes your copyright, please contact us at{' '}
              <a href="mailto:techvyro@gmail.com" className="text-primary hover:underline">techvyro@gmail.com</a> with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>The URL where the allegedly infringing material is located</li>
              <li>Your contact information</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement under penalty of perjury that the information is accurate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to the Service at any time, without prior notice, for any reason, 
              including violation of these Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. 
              Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. The updated version will be indicated by an updated &quot;Last updated&quot; date at the top of this page. 
              Continued use of the Service after any changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">13. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p>
                <strong className="text-foreground">Email:</strong>{' '}
                <a href="mailto:techvyro@gmail.com" className="text-primary hover:underline">
                  techvyro@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-foreground">Website:</strong>{' '}
                <a href="https://www.techvyro.in" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  www.techvyro.in
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
