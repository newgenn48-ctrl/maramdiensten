import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Lees ons privacybeleid en ontdek hoe Maram Diensten omgaat met uw persoonsgegevens conform de AVG.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Privacybeleid
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Wij respecteren uw privacy en beschermen uw persoonsgegevens conform de AVG.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <p className="text-gray-500 mb-10 text-sm">
              Laatst bijgewerkt: december 2024
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  1. Inleiding
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Maram Diensten respecteert uw privacy en zet zich in voor de
                  bescherming van uw persoonsgegevens. Dit privacybeleid informeert
                  u over hoe wij omgaan met uw persoonsgegevens wanneer u onze
                  website bezoekt en vertelt u over uw privacyrechten en hoe de wet
                  u beschermt.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  2. Gegevensverwerkingsverantwoordelijke
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Maram Diensten is de verwerkingsverantwoordelijke voor de
                  persoonsgegevens die via deze website worden verzameld. Voor
                  vragen over dit privacybeleid of over uw persoonsgegevens kunt u
                  contact met ons opnemen via:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>E-mail: info@maramdiensten.nl</li>
                  <li>Telefoon: 06-12345678</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  3. Welke gegevens verzamelen wij?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wij kunnen de volgende persoonsgegevens verzamelen:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    <strong>Identiteitsgegevens:</strong> naam, bedrijfsnaam
                  </li>
                  <li>
                    <strong>Contactgegevens:</strong> e-mailadres, telefoonnummer
                  </li>
                  <li>
                    <strong>Communicatiegegevens:</strong> berichten die u via het
                    contactformulier verstuurt
                  </li>
                  <li>
                    <strong>Technische gegevens:</strong> IP-adres, browsertype,
                    apparaatinformatie (anoniem)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  4. Doeleinden van verwerking
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Beantwoorden van uw vragen en verzoeken via het contactformulier</li>
                  <li>Het opstellen en versturen van offertes</li>
                  <li>Uitvoering van koeriersdiensten</li>
                  <li>Facturering en administratie</li>
                  <li>Verbetering van onze website en dienstverlening</li>
                  <li>Nakomen van wettelijke verplichtingen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  5. Rechtsgrond voor verwerking
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wij verwerken uw persoonsgegevens op basis van:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    <strong>Toestemming:</strong> wanneer u het contactformulier invult
                  </li>
                  <li>
                    <strong>Uitvoering van een overeenkomst:</strong> voor het
                    leveren van onze koeriersdiensten
                  </li>
                  <li>
                    <strong>Wettelijke verplichting:</strong> voor fiscale en
                    administratieve doeleinden
                  </li>
                  <li>
                    <strong>Gerechtvaardigd belang:</strong> voor het verbeteren van
                    onze dienstverlening
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  6. Bewaartermijn
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor
                  de doeleinden waarvoor zij zijn verzameld:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Contactformulier-gegevens: maximaal 1 jaar na laatste contact</li>
                  <li>Klantgegevens: 7 jaar na beëindiging dienstverlening (wettelijke verplichting)</li>
                  <li>Factuurgegevens: 7 jaar (fiscale bewaarplicht)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  7. Uw rechten
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u de
                  volgende rechten:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    <strong>Recht op inzage:</strong> u kunt opvragen welke gegevens
                    wij van u verwerken
                  </li>
                  <li>
                    <strong>Recht op rectificatie:</strong> u kunt onjuiste gegevens
                    laten corrigeren
                  </li>
                  <li>
                    <strong>Recht op vergetelheid:</strong> u kunt verzoeken uw
                    gegevens te wissen
                  </li>
                  <li>
                    <strong>Recht op beperking:</strong> u kunt de verwerking laten
                    beperken
                  </li>
                  <li>
                    <strong>Recht op overdraagbaarheid:</strong> u kunt uw gegevens
                    opvragen in een gangbaar formaat
                  </li>
                  <li>
                    <strong>Recht van bezwaar:</strong> u kunt bezwaar maken tegen
                    verwerking
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Om een van deze rechten uit te oefenen, neem contact met ons op
                  via info@maramdiensten.nl.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  8. Beveiliging
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Wij nemen passende technische en organisatorische maatregelen om
                  uw persoonsgegevens te beschermen tegen ongeoorloofde toegang,
                  verlies of diefstal. Onze website maakt gebruik van SSL-encryptie
                  voor veilige gegevensoverdracht.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  9. Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Onze website maakt alleen gebruik van strikt noodzakelijke cookies
                  voor het functioneren van de website. Wij gebruiken geen tracking-
                  of marketingcookies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  10. Wijzigingen
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Wij kunnen dit privacybeleid van tijd tot tijd wijzigen. De meest
                  recente versie is altijd beschikbaar op onze website. Bij
                  belangrijke wijzigingen zullen wij u hierover informeren.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  11. Klachten
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Indien u een klacht heeft over de verwerking van uw
                  persoonsgegevens, neem dan contact met ons op. U heeft ook het
                  recht om een klacht in te dienen bij de Autoriteit
                  Persoonsgegevens (www.autoriteitpersoonsgegevens.nl).
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
