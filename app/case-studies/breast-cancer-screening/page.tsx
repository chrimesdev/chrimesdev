import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Building,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BreastCancerScreeningCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className="border-b border-gray-200 bg-white sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <span
                role="img"
                aria-label="CHRIMES.DEV - Website Design and Development"
              >
                CHRIMES.DEV
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="mailto:adam@chrimes.dev"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-colors duration-200 text-lg"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-emerald-600" />
                <span className="font-medium text-emerald-600">
                  NHS England
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Senior Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Developing a service to allow people to manage their breast cancer
              screening appointments at NHS England
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Senior Developer on a new service to allow patients to manage
              their breast screening appointments through a web service using
              NHS Login.
            </p>
          </header>

          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src="/images/MAYS.png"
              alt="NHS Breast Cancer Screening Service Dashboard"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The problem
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  On the Manage your screening team (MAYS) we were working to
                  make screening easier to understand, easier to access, and
                  easier to manage.
                </p>
                <p>
                  Currently the experience can feel confusing or disconnected,
                  especially if you're taking part in more than one screening
                  programme. Our goal was to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Replace outdated systems that make things harder than they
                    need to be
                  </li>
                  <li>
                    Create one simple, consistent journey—no matter which
                    screening you're invited to
                  </li>
                  <li>
                    Build a service that can adapt as your needs, or the NHS's
                    needs, change over time
                  </li>
                  <li>
                    Have a standalone service; but also integrate with the NHS
                    App
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The solution
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  An open-source web application was developed using Next.js
                  using the NHS Design System to allow users to log in using NHS
                  Login OAuth. Appointment data was retrieved from the SQL
                  database using an API in Azure functions. Automated tests for
                  the user interface were written using Jest and Playwright
                  (using BDD with Cucumber).
                </p>
              </div>
            </section>

            {/* Screenshots */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Screenshots
              </h2>
              <div className="grid gap-8">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/MAYS.png"
                      alt="NHS Service Homepage"
                      width={800}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Service homepage with clear navigation and user-friendly
                        interface
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/MAYS-login.png"
                      alt="NHS Login Email Page"
                      width={800}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        NHS Login integration for secure user authentication
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/MAYS-Dashboard.png"
                      alt="NHS Screening Dashboard"
                      width={800}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Screening appointment management dashboard
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Repository Link */}
            <section className="mb-12">
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Open Source Repository
                      </h3>
                      <p className="text-gray-600 mb-4">
                        The project is open source and available on GitHub. You
                        can explore the codebase, architecture, and
                        implementation details.
                      </p>
                      <a
                        href="https://github.com/NHSDigital/dtos-participant-manager"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200"
                      >
                        View on GitHub
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Technologies Used */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technologies used
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Frontend
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Next.js</li>
                      <li>• TypeScript</li>
                      <li>• NHS Design System</li>
                      <li>• NHS Login</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Testing
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Jest</li>
                      <li>• Playwright</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Interested in working together?
                </h2>
                <a
                  href="mailto:adam@chrimes.dev"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-colors duration-200 text-lg"
                >
                  Get in touch
                </a>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white" role="contentinfo">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">CHRIMES.DEV</div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Chrimes Limited</p>
              <p className="mt-2 text-sm">Registered Company No. 14979835</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
