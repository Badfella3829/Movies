import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Film, Tv, Star, Users, Globe, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - TechVyro',
  description: 'Learn about TechVyro - Your ultimate destination for discovering movies and TV shows. Explore our mission, features, and the team behind the platform.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-24 md:pb-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">About TechVyro</h1>
        <p className="text-muted-foreground mb-8 text-sm">Your Ultimate Entertainment Discovery Platform</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Who We Are</h2>
            <p>
              <strong className="text-foreground">TechVyro</strong> is a modern entertainment discovery platform designed to help you find your next favorite movie or TV show. 
              We aggregate information from trusted sources to provide you with comprehensive details about films, series, ratings, trailers, and more — all in one beautifully designed interface.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Our Mission</h2>
            <p>
              Our mission is simple: to make entertainment discovery effortless and enjoyable. With thousands of movies and TV shows available across various platforms, 
              finding what to watch next can be overwhelming. TechVyro cuts through the noise by presenting curated content, trending titles, and personalized recommendations 
              to help you make informed viewing decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">What We Offer</h2>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <Film className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Extensive Movie Database</h3>
                  <p className="text-sm">Browse thousands of movies across all genres, from latest releases to timeless classics.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <Tv className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">TV Shows & Series</h3>
                  <p className="text-sm">Discover trending series, explore seasons, and keep track of episodes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <Star className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Ratings & Reviews</h3>
                  <p className="text-sm">See aggregated ratings to help you decide what&apos;s worth your time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <Users className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Cast & Crew Info</h3>
                  <p className="text-sm">Explore detailed information about actors, directors, and production teams.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Data Source</h2>
            <p>
              TechVyro uses data from <strong className="text-foreground">The Movie Database (TMDB)</strong> API to provide accurate and up-to-date information about movies and TV shows. 
              TMDB is a community-built database with millions of entries and is trusted by entertainment apps worldwide.
            </p>
            <p className="mt-2 text-sm">
              This product uses the TMDB API but is not endorsed or certified by TMDB.{' '}
              <a href="https://www.themoviedb.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Visit TMDB
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Why Choose TechVyro?</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-foreground">Fast & Responsive:</strong> Built with modern web technologies for a smooth experience on any device.</li>
              <li><strong className="text-foreground">Beautiful Design:</strong> A Netflix-inspired dark theme that&apos;s easy on the eyes.</li>
              <li><strong className="text-foreground">No Registration Required:</strong> Browse freely without creating an account.</li>
              <li><strong className="text-foreground">Watch Trailers:</strong> Preview content before you commit to watching.</li>
              <li><strong className="text-foreground">Personal Watchlist:</strong> Save movies and shows to watch later (stored locally).</li>
              <li><strong className="text-foreground">Regular Updates:</strong> New content added automatically from TMDB.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Our Values</h2>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
              <Heart className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p>
                  We believe in providing a <strong className="text-foreground">free, accessible, and ad-supported</strong> platform for entertainment discovery. 
                  Our advertising partnerships help us keep the service running while ensuring you get the best experience without subscription fees.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Get In Touch</h2>
            <p>
              Have questions, feedback, or suggestions? We&apos;d love to hear from you!
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <a href="/contact" className="text-primary hover:underline">Contact Us</a>
            </div>
            <div className="mt-2">
              <p>
                <strong className="text-foreground">Email:</strong>{' '}
                <a href="mailto:techvyro@gmail.com" className="text-primary hover:underline">
                  techvyro@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section className="border-t border-border/50 pt-6">
            <p className="text-sm text-center">
              Thank you for choosing <strong className="text-foreground">TechVyro</strong> as your entertainment companion.
            </p>
          </section>

        </div>
      </main>
    </>
  )
}
