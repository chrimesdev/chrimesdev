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
  Trophy,
  Target,
  Calendar,
  MapPin,
  ExternalLink,
  Handshake,
  Heart,
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
      {/* Navigation */}
      <nav
        className="backdrop-blur-md bg-white/80 border-b border-gray-100 sticky top-0 z-50 shadow-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with gradient and animation */}
            <div className="group cursor-pointer">
              <h1 className="text-2xl font-bold text-gray-900 hover:text-emerald-600 transition-all duration-300 ease-in-out">
                <span
                  role="img"
                  aria-label="CHRIMES.DEV - Website Design and Development"
                  className="relative"
                >
                  CHRIMES.DEV
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                </span>
              </h1>
            </div>

            {/* Navigation Menu - Hidden on Mobile */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                <a
                  href="#services"
                  className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-emerald-50"
                >
                  <span className="relative z-10">Services</span>
                  <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#case-studies"
                  className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-emerald-50"
                >
                  <span className="relative z-10">Work</span>
                  <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-purple-600 group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-purple-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#about"
                  className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-emerald-50"
                >
                  <span className="relative z-10">About</span>
                  <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-orange-500 group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Enhanced CTA Button */}
              <div className="relative group">
                <a
                  aria-describedby="email-description"
                  href="mailto:adam@chrimes.dev"
                  className="relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-all duration-300 text-base transform hover:scale-105 overflow-hidden group/button"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 animate-shimmer"></span>
                  <Mail className="h-4 w-4 transition-all duration-300 group-hover/button:rotate-12 group-hover/button:scale-110" />
                  <span className="relative font-medium">adam@chrimes.dev</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 to-blue-400/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
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
          className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8 order-2 lg:order-1">
                {/* Badge/Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full border border-emerald-200/50 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-emerald-700">
                    Website Design &amp; Development
                  </span>
                </div>

                {/* Main Heading with Gradient Text */}
                <div className="space-y-4">
                  <h1
                    id="hero-heading"
                    className="text-4xl lg:text-6xl font-bold leading-tight"
                  >
                    <span className="text-gray-900">A trusted</span>{" "}
                    <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                      digital services
                    </span>{" "}
                    <span className="text-gray-900">partner</span>
                    <br />
                    <span className="text-gray-700 text-3xl lg:text-4xl font-medium">
                      designing with empathy and building for impact
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  We partner with organisations to create{" "}
                  <span className="font-semibold text-emerald-700">
                    user-centered websites
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-blue-700">services</span>{" "}
                  that make a{" "}
                  <span className="relative">
                    difference
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-2"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,8 Q50,0 100,8"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-purple-400/60"
                      />
                    </svg>
                  </span>{" "}
                  to people.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* Primary CTA */}
                  <div className="relative group">
                    <a
                      aria-describedby="start-project-description"
                      href="mailto:adam@chrimes.dev"
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-all duration-300 text-lg transform hover:scale-105 overflow-hidden group/button"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
                      <Mail className="h-5 w-5 transition-all duration-300 group-hover/button:rotate-12 group-hover/button:scale-110" />
                      <span className="relative font-medium">
                        adam@chrimes.dev
                      </span>
                      <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover/button:translate-x-1" />
                    </a>
                  </div>

                  {/* Secondary CTA */}
                  <a
                    href="#case-studies"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-300 text-lg group"
                  >
                    <span>View our work</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

                <span id="start-project-description" className="sr-only">
                  Begin your website development project with our team
                </span>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative order-1 lg:order-2 h-64 sm:h-80 lg:h-[600px] flex items-center justify-center mb-8 lg:mb-0">
                {/* Main Visual Container */}
                <div className="relative w-full max-w-lg h-full">
                  {/* Floating Cards - Hidden on mobile, visible on larger screens */}
                  <div className="hidden lg:block absolute inset-0 space-y-4">
                    {/* Card 1 */}
                    <div className="absolute top-0 left-4 w-64 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 transform rotate-3 hover:rotate-6 transition-transform duration-300 animate-float">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Web Development
                          </h3>
                          <p className="text-xs text-gray-500">Modern & Fast</p>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full animate-progress"></div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="absolute top-32 right-0 w-56 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 transform -rotate-2 hover:-rotate-6 transition-transform duration-300 animate-float delay-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Palette className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            UI/UX Design
                          </h3>
                          <p className="text-xs text-gray-500">User-Centered</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 100}ms` }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="absolute bottom-16 left-8 w-60 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 transform rotate-1 hover:rotate-3 transition-transform duration-300 animate-float delay-600">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Code className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Custom Solutions
                          </h3>
                          <p className="text-xs text-gray-500">
                            Tailored to You
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-8 gap-1">
                        {[...Array(24)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-sm ${
                              i % 3 === 0
                                ? "bg-purple-500"
                                : i % 3 === 1
                                ? "bg-purple-300"
                                : "bg-gray-200"
                            } animate-pulse`}
                            style={{ animationDelay: `${i * 50}ms` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile/Tablet Visual - Simple centered design */}
                  <div className="lg:hidden flex items-center justify-center h-full">
                    <div className="relative w-80 h-80 max-w-full">
                      {/* Central gradient circle */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-blue-400/30 to-purple-400/30 rounded-full animate-pulse"></div>

                      {/* Service icons arranged in a circle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          {/* Center icon */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                            <Code className="h-8 w-8 text-white" />
                          </div>

                          {/* Floating service icons */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-float">
                            <Globe className="h-6 w-6 text-emerald-600" />
                          </div>
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-float delay-300">
                            <Palette className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-float delay-600">
                            <Smartphone className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-float delay-900">
                            <Star className="h-6 w-6 text-orange-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central Glow Effect - Desktop only */}
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section
          className="py-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden"
          aria-labelledby="clients-heading"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-4 right-8 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            <div className="absolute -bottom-4 left-12 w-64 h-64 bg-gradient-to-tr from-purple-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse delay-1500"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full border border-blue-200/50 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">
                  Trusted by leading organisations
                </span>
              </div>

              <h2
                id="clients-heading"
                className="text-3xl lg:text-4xl font-bold mb-4"
              >
                <span className="text-gray-900">Companies we've</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent">
                  worked with
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From healthcare to government, we've partnered with
                organisations that prioritise{" "}
                <span className="font-semibold text-emerald-700">
                  user experience
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-700">
                  digital innovation
                </span>
                .
              </p>
            </div>

            {/* Clients Grid */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center"
              role="list"
              aria-label="Client organisations"
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative flex items-center justify-center h-20 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
                  role="listitem"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    width={120}
                    height={60}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-emerald-50/30 relative overflow-hidden"
          aria-labelledby="services-heading"
          id="services"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-8 left-8 w-56 h-56 bg-gradient-to-br from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-purple-400/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-purple-100 rounded-full border border-emerald-200/50 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-700">
                  Our expertise
                </span>
              </div>

              <h2
                id="services-heading"
                className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="text-gray-900">What we</span>{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  do best
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine technical expertise with creative design to deliver{" "}
                <span className="relative">
                  exceptional
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-emerald-400/60"
                    />
                  </svg>
                </span>{" "}
                digital experiences that users love and businesses trust.
              </p>
            </div>

            {/* Services Grid */}
            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              role="list"
            >
              {[
                {
                  icon: Globe,
                  title: "Web Development",
                  description:
                    "Custom websites built with modern technologies for optimal performance.",
                  gradient: "from-emerald-500 to-emerald-600",
                  bgGradient: "from-emerald-50 to-emerald-100",
                  features: [
                    "Next.js & React",
                    "TypeScript",
                    "Responsive Design",
                  ],
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  description:
                    "Beautiful, intuitive designs that engage users and drive conversions.",
                  gradient: "from-blue-500 to-blue-600",
                  bgGradient: "from-blue-50 to-blue-100",
                  features: ["User Research", "Wireframing", "Prototyping"],
                },
                {
                  icon: Smartphone,
                  title: "Mobile First",
                  description:
                    "Responsive designs that work flawlessly on all devices.",
                  gradient: "from-purple-500 to-purple-600",
                  bgGradient: "from-purple-50 to-purple-100",
                  features: [
                    "PWA Development",
                    "Mobile Optimization",
                    "Touch Interfaces",
                  ],
                },
                {
                  icon: Code,
                  title: "Custom Solutions",
                  description:
                    "Bespoke digital solutions tailored to your specific requirements.",
                  gradient: "from-orange-500 to-orange-600",
                  bgGradient: "from-orange-50 to-orange-100",
                  features: [
                    "API Integration",
                    "Database Design",
                    "Cloud Deployment",
                  ],
                },
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="group relative border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                    role="listitem"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-current rounded-full opacity-20 animate-float"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + i * 10}%`,
                            animationDelay: `${i * 500}ms`,
                            animationDuration: `${3000 + i * 1000}ms`,
                          }}
                        ></div>
                      ))}
                    </div>

                    <CardContent className="p-8 text-center relative z-10">
                      {/* Icon with animated glow */}
                      <div className="relative mb-6 flex justify-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div
                          className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                        ></div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full border border-gray-200/50 group-hover:border-gray-300/70 transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Animated progress bar */}
                      <div className="mt-6 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${service.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section
          className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50/20 to-blue-50/30 relative overflow-hidden"
          aria-labelledby="case-studies-heading"
          id="case-studies"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-8 right-16 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse delay-300"></div>
            <div className="absolute bottom-8 -left-16 w-80 h-80 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1200"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-purple-400/8 to-emerald-400/8 rounded-full blur-2xl animate-pulse delay-2400"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200/50 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-700">
                  Our work
                </span>
              </div>

              <h2
                id="case-studies-heading"
                className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="text-gray-900">Real</span>{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  case studies
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped organizations transform their digital
                presence and{" "}
                <span className="relative">
                  improve
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-blue-400/60"
                    />
                  </svg>
                </span>{" "}
                user experiences for millions of people.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card
                  key={study.id}
                  className="group relative border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating elements */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-30 animate-float transition-opacity duration-500"
                        style={{
                          left: `${10 + i * 12}%`,
                          top: `${15 + i * 8}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: `${4000 + i * 500}ms`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Image with overlay effects */}
                    <div className="relative h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={`Screenshot of ${study.title}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-lg">
                          <span className="text-xs font-semibold text-emerald-700">
                            {study.organisation}
                          </span>
                        </div>
                      </div>

                      {/* Animated corner accent */}
                      <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-gradient-to-br from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <CardContent className="p-8">
                      {/* Meta information */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <Users className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-medium text-emerald-600">
                            {study.role}
                          </span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Star className="h-3 w-3 text-white" />
                          </div>
                          <span>{study.date}</span>
                        </div>
                      </div>

                      {/* Title with enhanced typography */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                        {study.title}
                      </h3>

                      {/* Description with highlight */}
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {study.id === "breast-cancer-screening" ? (
                          <>
                            Senior Developer on a new service to allow patients
                            to manage their{" "}
                            <span className="font-semibold text-emerald-700">
                              breast screening appointments
                            </span>{" "}
                            through a web service using{" "}
                            <span className="font-semibold text-blue-700">
                              NHS Login
                            </span>
                            .
                          </>
                        ) : (
                          <>
                            Senior Developer on a new service to help screening
                            staff identify and correct{" "}
                            <span className="font-semibold text-purple-700">
                              demographic details
                            </span>{" "}
                            for eligible participants using{" "}
                            <span className="font-semibold text-emerald-700">
                              NHS CIS2 authentication
                            </span>
                            .
                          </>
                        )}
                      </p>

                      {/* Enhanced CTA */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="group/link inline-flex items-center gap-3 text-emerald-600 hover:text-emerald-700 font-semibold transition-all duration-300"
                        >
                          <span className="relative">
                            Read full case study
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover/link:w-full transition-all duration-300"></span>
                          </span>
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>

                        {/* Tech stack indicators */}
                        <div className="flex gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-emerald-100 group-hover:to-emerald-200 transition-colors duration-300">
                            <Code className="h-4 w-4 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300" />
                          </div>
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                            <Smartphone className="h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-20 bg-gradient-to-br from-white via-emerald-50/20 to-blue-50/20 relative overflow-hidden"
          aria-labelledby="about-heading"
          id="about"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 -left-8 w-72 h-72 bg-gradient-to-br from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-16 right-16 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-400/8 to-purple-400/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full border border-emerald-200/50 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-700">
                  Why choose us
                </span>
              </div>

              <h2
                id="about-heading"
                className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="text-gray-900">Why choose</span>{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  chrimes.dev?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're not just developers – we're your digital partners,
                committed to creating{" "}
                <span className="relative">
                  exceptional
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-emerald-400/60"
                    />
                  </svg>
                </span>{" "}
                experiences that drive real results.
              </p>
            </div>

            {/* Features Grid */}
            <div
              className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
              role="list"
            >
              {/* Left column */}
              <div className="space-y-8">
                {[
                  {
                    icon: Users,
                    title: "Personal approach",
                    description:
                      "We listen first, then build. Every project is tailored to your needs, not a one-size-fits-all template.",
                    gradient: "from-emerald-500 to-emerald-600",
                    bgGradient: "from-emerald-50 to-emerald-100",
                  },
                  {
                    icon: Award,
                    title: "Proven results",
                    description:
                      "From healthcare to the arts, our work helps organisations connect with their communities and achieve real impact.",
                    gradient: "from-blue-500 to-blue-600",
                    bgGradient: "from-blue-50 to-blue-100",
                  },
                  {
                    icon: CheckCircle,
                    title: "Clear communication",
                    description:
                      "No jargon, no confusion. We keep you informed and involved at every step.",
                    gradient: "from-purple-500 to-purple-600",
                    bgGradient: "from-purple-50 to-purple-100",
                  },
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-500 transform hover:scale-[1.02]"
                      role="listitem"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Animated background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                      ></div>

                      {/* Icon with glow effect */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl relative z-10`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div
                          className={`absolute inset-0 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Animated progress indicator */}
                        <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right column */}
              <div className="space-y-8">
                {[
                  {
                    icon: Code,
                    title: "Modern technology",
                    description:
                      "We use the latest tools and best practices, so your website is fast, secure, and ready for the future.",
                    gradient: "from-orange-500 to-orange-600",
                    bgGradient: "from-orange-50 to-orange-100",
                  },
                  {
                    icon: Star,
                    title: "Long-term support",
                    description:
                      "We're here for you beyond launch, offering advice and support as your needs evolve.",
                    gradient: "from-pink-500 to-pink-600",
                    bgGradient: "from-pink-50 to-pink-100",
                  },
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-500 transform hover:scale-[1.02]"
                      role="listitem"
                      style={{ animationDelay: `${(index + 3) * 200}ms` }}
                    >
                      {/* Animated background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                      ></div>

                      {/* Icon with glow effect */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl relative z-10`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div
                          className={`absolute inset-0 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Animated progress indicator */}
                        <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorships Section */}
        <section
          className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-blue-50/30 relative overflow-hidden"
          aria-labelledby="sponsorships-heading"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-purple-400/8 to-emerald-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full border border-emerald-200/50 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-700">
                  Community Support
                </span>
              </div>

              <h2
                id="sponsorships-heading"
                className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="text-gray-900">Community</span>{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sponsorships
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're proud to support local{" "}
                <span className="relative">
                  communities
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-emerald-400/60"
                    />
                  </svg>
                </span>{" "}
                and organisations that make a real difference in people's lives.
              </p>
            </div>

            {/* Featured Sponsorship */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01] relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 animate-float"
                      style={{
                        left: `${5 + i * 4.5}%`,
                        top: `${10 + (i % 6) * 15}%`,
                        animationDelay: `${i * 300}ms`,
                        animationDuration: `${4000 + i * 500}ms`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="p-8 lg:p-12 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      {/* Logo placeholder with enhanced styling */}

                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Meanwood Cricket Club
                      </h3>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Supporting grassroots cricket in our local community.
                        Providing opportunities for players of all ages and
                        abilities to develop their skills and passion for the
                        game.
                      </p>

                      <a
                        href="https://www.meanwoodcc.com/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Visit Meanwood Cricket Club
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Visual element */}
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl overflow-hidden relative">
                        {/* Main cricket club image */}
                        <div className="absolute inset-0">
                          <Image
                            src="/images/IMG_0220.jpg"
                            alt="Meanwood Cricket Club team and facilities"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {/* Overlay gradient for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                          <Trophy className="h-7 w-7 text-emerald-600" />
                        </div>
                        <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                          <div className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
                            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                              2025
                            </div>
                            <div className="text-sm font-semibold text-gray-700">
                              Ground Sponsor
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden"
          aria-labelledby="contact-heading"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 -left-16 w-80 h-80 bg-gradient-to-br from-emerald-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-16 right-16 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-30 animate-float"
                style={{
                  left: `${3 + i * 3.8}%`,
                  top: `${5 + (i % 8) * 12}%`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: `${4000 + i * 300}ms`,
                }}
              ></div>
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-400">
                  Let's Connect
                </span>
              </div>

              <h2
                id="contact-heading"
                className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">Fancy a</span>{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  chat?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how we can help bring your{" "}
                <span className="relative">
                  digital vision
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-emerald-400/60"
                    />
                  </svg>
                </span>{" "}
                to life. Get in touch for a free consultation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Main Contact Card */}
                <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      Ready to start your project?
                    </h3>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      Drop us a line and let's discuss your requirements. We'll
                      get back to you within 24 hours.
                    </p>

                    {/* Feature list */}
                    <div className="space-y-3 mb-8">
                      {[
                        "Free initial consultation",
                        "No-obligation project quote",
                        "Honest advice & recommendations",
                        "Flexible engagement options",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-400" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      aria-describedby="email-description"
                      href="mailto:adam@chrimes.dev"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:from-emerald-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-105 w-full justify-center"
                    >
                      <Mail className="h-5 w-5" aria-hidden="true" />
                      <span className="text-lg">adam@chrimes.dev</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Info Card */}
                <div className="space-y-8">
                  {/* Response time card */}
                  <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Star className="h-6 w-6 text-white" />
                      </div>

                      <h4 className="text-xl font-bold text-white mb-3">
                        Quick Response
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        We typically respond to new enquiries within{" "}
                        <span className="text-emerald-400 font-semibold">
                          24 hours
                        </span>
                        , often much sooner.
                      </p>
                    </div>
                  </div>

                  {/* Process card */}
                  <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-6 w-6 text-white" />
                      </div>

                      <h4 className="text-xl font-bold text-white mb-3">
                        Personal Approach
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Every project starts with a conversation. We listen
                        first, then propose solutions that fit your needs.
                      </p>
                    </div>
                  </div>

                  {/* Location card */}
                  <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>

                      <h4 className="text-xl font-bold text-white mb-3">
                        Based in Leeds
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        We're a Yorkshire-based team, working with clients
                        locally and remotely across the UK.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden"
        role="contentinfo"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 left-8 w-48 h-48 bg-gradient-to-br from-emerald-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 right-8 w-64 h-64 bg-gradient-to-tr from-purple-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="group cursor-default">
                <div className="text-3xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-emerald-400 group-hover:to-blue-400 transition-all duration-500">
                    CHRIMES.DEV
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="hidden md:flex items-center gap-8 mb-8 md:mb-0">
              {[
                { label: "Services", href: "#services" },
                { label: "Work", href: "#case-studies" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Company Info */}
            <div className="text-gray-400 text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <p className="font-semibold text-white">
                  &copy; 2025 Chrimes Limited
                </p>
              </div>
              <p className="text-sm mb-2">Registered Company No. 14979835</p>
              <div className="flex items-center justify-center md:justify-end gap-2 text-xs">
                <MapPin className="h-3 w-3" />
                <span>Leeds, Yorkshire</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
