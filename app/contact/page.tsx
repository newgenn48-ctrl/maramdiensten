import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Maram Diensten voor al uw koeriersvragen. Bel ons, mail ons of vul het contactformulier in voor een snelle reactie.",
  openGraph: {
    title: "Contact | Maram Diensten",
    description:
      "Neem contact op met Maram Diensten voor al uw koeriersvragen.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2232"
          alt="Klantenservice medewerker"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Neem contact op
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Heeft u een vraag of wilt u een offerte aanvragen? Wij staan voor u klaar
              en reageren binnen 24 uur.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone Card */}
              <a
                href="tel:+31612345678"
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all group"
              >
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">Telefoon</h2>
                <p className="text-primary-600 font-medium">06-12345678</p>
                <p className="text-sm text-gray-500 mt-2">Direct contact voor spoedvragen</p>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@maramdiensten.nl"
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all group"
              >
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">E-mail</h2>
                <p className="text-primary-600 font-medium">info@maramdiensten.nl</p>
                <p className="text-sm text-gray-500 mt-2">Antwoord binnen 24 uur</p>
              </a>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">Openingstijden</h2>
                <p className="text-gray-600">Maandag - Vrijdag</p>
                <p className="text-primary-600 font-medium">07:00 - 18:00</p>
                <p className="text-sm text-gray-500 mt-2">Spoedservice 24/7 beschikbaar</p>
              </div>

              {/* Map/Location placeholder */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074"
                  alt="Locatie kaart"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-medium">Heel Nederland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Stuur ons een bericht
                </h2>
                <p className="text-gray-600 mb-8">
                  Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
