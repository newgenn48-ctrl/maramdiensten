const services = [
  {
    title: "Spoedkoeriers",
    description:
      "Dringende zendingen die dezelfde dag nog moeten aankomen? Onze spoedkoeriers staan 24/7 klaar om uw pakket razendsnel te bezorgen.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["24/7 beschikbaar", "Binnen 2 uur ophalen", "Real-time tracking"],
  },
  {
    title: "Same-day Delivery",
    description:
      "Vandaag besteld, vandaag bezorgd. Ideaal voor e-commerce en bedrijven die snelle levering willen garanderen aan hun klanten.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ["Gegarandeerd dezelfde dag", "Breed tijdvenster", "Bevestiging per SMS"],
  },
  {
    title: "Zakelijke Koeriersdiensten",
    description:
      "Op maat gemaakte koeriersoplossingen voor bedrijven. Regelmatige routes, vaste tarieven en een betrouwbare partner.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["Vaste contracten", "Maandelijkse facturatie", "Dedicated accountmanager"],
  },
  {
    title: "Regionaal & Nationaal",
    description:
      "Van korte ritten in de regio tot leveringen door heel Nederland. Wij zorgen dat uw zending aankomt, waar dan ook.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    features: ["Heel Nederland", "Flexibele routes", "Meerdere stops mogelijk"],
  },
];

export default function Services() {
  return (
    <section id="diensten" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Onze Diensten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete koeriersoplossingen
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Van spoedzendingen tot dagelijkse leveringen - wij bieden een complete range aan
            koeriersdiensten voor al uw transportbehoeften.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
