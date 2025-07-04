import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Globe,
  Users,
  Award,
  Mail,
  Star,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ModernChrimesLanding() {
  const clients = [
    {
      name: "NHS England",
      logo: "/images/NHS_England_logo.svg.png",
    },
    {
      name: "Strat7",
      logo: "/images/STRAT7-logo.svg",
    },
    {
      name: "Royal Shakespeare Company",
      logo: "/images/RSC-logo.png",
    },
    {
      name: "Ministry of Justice",
      logo: "/images/MoJ-logo.jpg",
    },
    {
      name: "Kry/Livi",
      logo: "/images/KRY-logo.avif",
    },
    {
      name: "NHS Digital",
      logo: "/images/images.png",
    },
    {
      name: "Kirklees Council",
      logo: "/images/open-graphic-protocol-logo.jpg",
    },
  ];

  const caseStudies = [
    {
      id: "breast-cancer-screening",
      title:
        "Developing a service to allow people to manage their breast cancer screening appointments",
      organisation: "NHS England",
      role: "Senior Developer",
      date: "2025",
      image: "/images/MAYS.png",
      slug: "breast-cancer-screening",
    },
    {
      id: "cohort-manager",
      title:
        "Developing a service to ensure the right people are selected for invitation to screening",
      organisation: "NHS England",
      role: "Senior Developer",
      date: "2025",
      image: "/images/CM-Dashboard.png",
      slug: "cohort-manager",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className="border-b border-gray-200 bg-white sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              <span
                role="img"
                aria-label="CHRIMES.DEV - Website Design and Development"
              >
                CHRIMES.DEV
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                aria-describedby="email-description"
                href="mailto:adam@chrimes.dev"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-colors duration-200 text-lg "
              >
                Get in touch
              </a>
              <span id="contact-description" className="sr-only">
                Contact us to discuss your project requirements
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section
          className="py-16 bg-white relative"
          aria-labelledby="hero-heading"
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  id="hero-heading"
                  className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  A trusted digital services partner, designing with empathy and
                  building for impact
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We partner with organisations to create user-centered websites
                  and services that make a difference to people.
                </p>
                <a
                  aria-describedby="email-description"
                  href="mailto:adam@chrimes.dev"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-colors duration-200 text-lg mt-4"
                >
                  Get in touch to start your project
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <span id="start-project-description" className="sr-only">
                  Begin your website development project with our team
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section - Dark Background */}
        <section className="py-12 bg-white" aria-labelledby="clients-heading">
          <div className="container mx-auto px-6">
            <h2
              id="clients-heading"
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
            >
              Companies we've worked with
            </h2>
            <div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center"
              role="list"
              aria-label="Client organisations"
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-16 transition-opacity duration-30"
                  role="listitem"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    width={120}
                    height={60}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white" aria-labelledby="services-heading">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="services-heading"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                What we do
              </h2>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              role="list"
            >
              <Card
                className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 group"
                role="listitem"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <Globe className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Web Development
                  </h3>
                  <p className="text-sm text-gray-600">
                    Custom websites built with modern technologies for optimal
                    performance.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 group"
                role="listitem"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <Palette className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    UI/UX Design
                  </h3>
                  <p className="text-sm text-gray-600">
                    Beautiful, intuitive designs that engage users and drive
                    conversions.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 group"
                role="listitem"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <Smartphone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Mobile First
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsive designs that work flawlessly on all devices.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 group"
                role="listitem"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <Code className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bespoke digital solutions tailored to your specific
                    requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section
          className="py-16 bg-gray-50"
          aria-labelledby="case-studies-heading"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="case-studies-heading"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Case studies
              </h2>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study) => (
                <Card
                  key={study.id}
                  className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-0">
                    <div className="relative h-64">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={`Screenshot of ${study.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <span className="font-medium text-emerald-600">
                            {study.organisation}
                          </span>
                          <span>•</span>
                          <span>{study.role}</span>
                          <span>•</span>
                          <span>{study.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {study.id === "breast-cancer-screening"
                            ? "Senior Developer on a new service to allow patients to manage their breast screening appointments through a web service using NHS Login."
                            : "Senior Developer on a new service to help screening staff identify and correct demographic details for eligible participants using NHS CIS2 authentication."}
                        </p>
                      </div>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200"
                      >
                        Read case study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white" aria-labelledby="about-heading">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-1 gap-12 items-center">
              <div>
                <h2
                  id="about-heading"
                  className="text-3xl font-bold text-gray-900 mb-6"
                >
                  Why choose chrimes.dev?
                </h2>
                <div className="grid lg:grid-cols-2 gap-8" role="list">
                  {/* Left column: 3 points */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4" role="listitem">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Personal approach
                        </h3>
                        <p className="text-gray-600">
                          We listen first, then build. Every project is tailored
                          to your needs, not a one-size-fits-all template.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4" role="listitem">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Award className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Proven results
                        </h3>
                        <p className="text-gray-600">
                          From healthcare to the arts, our work helps
                          organisations connect with their communities and
                          achieve real impact.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4" role="listitem">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Clear communication
                        </h3>
                        <p className="text-gray-600">
                          No jargon, no confusion. We keep you informed and
                          involved at every step.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Right column: 2 points */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4" role="listitem">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Code className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Modern technology
                        </h3>
                        <p className="text-gray-600">
                          We use the latest tools and best practices, so your
                          website is fast, secure, and ready for the future.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4" role="listitem">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Long-term support
                        </h3>
                        <p className="text-gray-600">
                          We're here for you beyond launch, offering advice and
                          support as your needs evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorships Section */}
        <section
          className="py-16 bg-gray-50"
          aria-labelledby="sponsorships-heading"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="sponsorships-heading"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Community sponsorships
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're proud to support local communities and organisations.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border border-gray-200 bg-gradient-to-r from-emerald-50 to-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <Image
                        src="https://images.squarespace-cdn.com/content/v1/63b820360042a12abd6fa1bd/774a7c76-3c24-4456-818c-b552f74bfeb8/Badge+Name.png?format=1500w"
                        width={125}
                        height={40}
                        alt=""
                        className="mb-4"
                        aria-hidden="true"
                      />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Meanwood Cricket Club
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Supporting grassroots cricket in our local community.
                        Providing opportunities for players of all ages and
                        abilities.
                      </p>
                      <a
                        href="https://www.meanwoodcc.com/"
                        className="text-emerald-600 hover:underline"
                      >
                        Visit the Meanwood Cricket Club website
                      </a>
                    </div>

                    {/* <div className="relative">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <Image
                          src="/placeholder.svg?height=200&width=280&text=Meanwood+Cricket+Club+Logo"
                          width={280}
                          height={200}
                          alt="Meanwood Cricket Club logo"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-16 bg-slate-800 text-white"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="contact-heading" className="text-3xl font-bold mb-6">
                Fancy a chat?
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                Let's discuss how we can help bring your digital vision to life.
              </p>
              <p className="text-lg text-gray-300 mb-2">
                Get in touch for a free consultation.
              </p>
              <a
                aria-describedby="email-description"
                href="mailto:adam@chrimes.dev"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-colors duration-200 text-lg mt-4"
              >
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                adam@chrimes.dev
              </a>
            </div>
          </div>
        </section>
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
