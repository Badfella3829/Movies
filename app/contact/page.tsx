import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Mail, Globe, MessageSquare, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - TechVyro',
  description: 'Get in touch with TechVyro. Contact us for questions, feedback, support, or business inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-24 md:pb-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8 text-sm">We&apos;d love to hear from you</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <p className="text-lg">
              Have questions, feedback, or need assistance? We&apos;re here to help! Choose the most appropriate way to reach us below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a 
                href="mailto:techvyro@gmail.com" 
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors no-underline"
              >
                <Mail className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Email Us</h3>
                  <p className="text-sm text-primary">techvyro@gmail.com</p>
                  <p className="text-xs mt-1">Best for detailed inquiries</p>
                </div>
              </a>
              <a 
                href="https://www.techvyro.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors no-underline"
              >
                <Globe className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Website</h3>
                  <p className="text-sm text-primary">www.techvyro.in</p>
                  <p className="text-xs mt-1">Visit our main website</p>
                </div>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">What Can We Help You With?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <MessageSquare className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">General Inquiries</h3>
                  <p className="text-sm">Questions about TechVyro, how it works, or feature requests.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <Shield className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Report Issues</h3>
                  <p className="text-sm">Found a bug, broken link, or incorrect information? Let us know and we&apos;ll fix it.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Business & Partnerships</h3>
                  <p className="text-sm">Interested in advertising or partnership opportunities? Reach out!</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <Shield className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Copyright / DMCA</h3>
                  <p className="text-sm">
                    If you believe content on our site infringes your copyright, please email us with details. 
                    See our <a href="/terms" className="text-primary hover:underline">Terms of Service</a> for the full DMCA process.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Response Time</h2>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
              <Clock className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p>
                  We typically respond to emails within <strong className="text-foreground">24-48 hours</strong>. 
                  For urgent matters, please include &quot;URGENT&quot; in your email subject line.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Before You Contact Us</h2>
            <p className="mb-3">You might find answers to common questions in these pages:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <a href="/about" className="text-primary hover:underline">About Us</a> — Learn about TechVyro and what we offer
              </li>
              <li>
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> — How we handle your data
              </li>
              <li>
                <a href="/terms" className="text-primary hover:underline">Terms of Service</a> — Rules for using our platform
              </li>
              <li>
                <a href="/disclaimer" className="text-primary hover:underline">Disclaimer</a> — Important notices about our content
              </li>
            </ul>
          </section>

          <section className="border-t border-border/50 pt-6">
            <p className="text-sm text-center">
              Thank you for reaching out to <strong className="text-foreground">TechVyro</strong>. We appreciate your feedback!
            </p>
          </section>

        </div>
      </main>
    </>
  )
}
