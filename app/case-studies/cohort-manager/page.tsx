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

export default function CohortManagerCaseStudy() {
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
              Developing a service to ensure the right people are selected for
              invitation to screening at NHS England
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Senior Developer on a new service to allow breast screening staff
              to help identify, receive and correct the demographic details for
              eligible participants of a screening service, so they are
              correctly selected for invitation through a website service using
              NHS CIS2 authentication.
            </p>
          </header>

          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src="/images/CM-Dashboard.png"
              alt="NHS Cohort Manager Service Dashboard"
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
                  To begin, imagine a person whose NHS record has been selected
                  as being eligible for routine breast screening.
                </p>
                <p>
                  If their record contains even small errors or missing
                  information, a data exception will be generated, meaning their
                  screening invitation could be delayed while staff work hard to
                  manually investigate and fix the problem.
                </p>
                <p>
                  To support this process and ensure that errors are picked up
                  early and quickly resolved, cohort manager will apply a series
                  of validation rules to each record entering the screening
                  pathway.
                </p>
                <p>
                  It automatically identifies invalid or missing information
                  (data exceptions) and can resolve many data issues, such as
                  transformations, without staff intervention.
                </p>
                <p>
                  For cases that need manual intervention by staff, the system
                  provides an interface that visualises the data exception and
                  enables users to quickly direct it to the appropriate team for
                  resolution.
                </p>
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
                  CIS2 Authentication OAuth. Patient data and exception details
                  was retrieved from the SQL database using an API in Azure
                  functions. Automated tests for the user interface were written
                  using Jest and Playwright (using BDD with Cucumber).
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
                      src="/images/CM-Login.png"
                      alt="NHS CIS2 Login Page"
                      width={800}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        NHS CIS2 authentication login page for secure staff
                        access
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/CM-Dashboard.png"
                      alt="Cohort Manager Overview Page"
                      width={800}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Overview dashboard showing data exceptions and screening
                        cohort status
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/CM-Information.png"
                      alt="Exception Information Page"
                      width={800}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        Detailed exception information page for manual data
                        correction
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
                        href="https://github.com/NHSDigital/dtos-cohort-manager"
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
                      <li>• NHS CIS2 Authentication</li>
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
                      <li>• Cucumber (BDD)</li>
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
