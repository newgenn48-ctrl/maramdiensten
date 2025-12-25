import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description:
    "Lees de algemene voorwaarden van Maram Diensten. Hier vindt u informatie over onze dienstverlening, aansprakelijkheid en betalingsvoorwaarden.",
};

export default function VoorwaardenPage() {
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
              Algemene Voorwaarden
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Onze voorwaarden voor een transparante en eerlijke samenwerking.
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
                  Artikel 1 - Definities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">In deze voorwaarden wordt verstaan onder:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    <strong>Maram Diensten:</strong> de eenmanszaak Maram Diensten, gevestigd in Nederland
                  </li>
                  <li>
                    <strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat met Maram Diensten
                  </li>
                  <li>
                    <strong>Zending:</strong> het pakket, document of goed dat door Maram Diensten wordt vervoerd
                  </li>
                  <li>
                    <strong>Overeenkomst:</strong> de afspraak tussen Maram Diensten en Opdrachtgever voor het verrichten van koeriersdiensten
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 2 - Toepasselijkheid
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Maram Diensten en Opdrachtgever.
                  </li>
                  <li>
                    Afwijkingen van deze voorwaarden zijn alleen geldig indien schriftelijk overeengekomen.
                  </li>
                  <li>
                    De toepasselijkheid van eventuele inkoop- of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 3 - Offertes en overeenkomsten
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.
                  </li>
                  <li>
                    Een overeenkomst komt tot stand op het moment dat de Opdrachtgever de offerte accepteert of wanneer Maram Diensten een opdracht bevestigt.
                  </li>
                  <li>
                    Mondelinge afspraken binden Maram Diensten pas na schriftelijke bevestiging.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 4 - Uitvoering van de diensten
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    Maram Diensten zal de opdracht naar beste inzicht en vermogen uitvoeren.
                  </li>
                  <li>
                    Opgegeven levertijden zijn indicatief en gelden nooit als fatale termijn, tenzij uitdrukkelijk schriftelijk anders overeengekomen.
                  </li>
                  <li>
                    Maram Diensten is gerechtigd derden in te schakelen voor de uitvoering van de opdracht.
                  </li>
                  <li>
                    De Opdrachtgever zorgt ervoor dat de zending op het afgesproken tijdstip en adres klaarstaat voor ophaling.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 5 - Verplichtingen van de Opdrachtgever
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    De Opdrachtgever dient de zending deugdelijk te verpakken en te voorzien van correcte adresgegevens.
                  </li>
                  <li>
                    De Opdrachtgever garandeert dat de zending geen verboden, gevaarlijke of illegale goederen bevat.
                  </li>
                  <li>
                    De Opdrachtgever is verantwoordelijk voor de juistheid van de verstrekte informatie.
                  </li>
                  <li>
                    Bij breekbare of waardevolle zendingen dient de Opdrachtgever dit vooraf te melden.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 6 - Prijzen en betaling
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    Alle prijzen zijn in euro&apos;s en exclusief BTW, tenzij anders vermeld.
                  </li>
                  <li>
                    Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.
                  </li>
                  <li>
                    Bij niet-tijdige betaling is de Opdrachtgever van rechtswege in verzuim en is Maram Diensten gerechtigd wettelijke rente en incassokosten in rekening te brengen.
                  </li>
                  <li>
                    Maram Diensten behoudt zich het recht voor prijzen te wijzigen. Prijswijzigingen worden vooraf gecommuniceerd.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 7 - Aansprakelijkheid
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    De aansprakelijkheid van Maram Diensten is beperkt tot het bedrag dat door de aansprakelijkheidsverzekering wordt uitgekeerd, met een maximum van de factuurwaarde van de betreffende opdracht.
                  </li>
                  <li>
                    Maram Diensten is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
                  </li>
                  <li>
                    Maram Diensten is niet aansprakelijk voor schade veroorzaakt door ondeugdelijke verpakking door de Opdrachtgever.
                  </li>
                  <li>
                    Schade aan of verlies van zendingen dient binnen 24 uur na bezorging schriftelijk te worden gemeld.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 8 - Overmacht
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    In geval van overmacht is Maram Diensten gerechtigd de uitvoering van de opdracht op te schorten of te annuleren zonder schadeplichtig te zijn.
                  </li>
                  <li>
                    Onder overmacht wordt verstaan: extreme weersomstandigheden, stakingen, verkeersopstoppingen, pandemieën, overheidsmaatregelen en andere omstandigheden buiten de macht van Maram Diensten.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 9 - Annulering
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    Annulering door de Opdrachtgever dient schriftelijk te geschieden.
                  </li>
                  <li>
                    Bij annulering minder dan 2 uur voor de geplande ophaling kunnen annuleringskosten in rekening worden gebracht.
                  </li>
                  <li>
                    Indien Maram Diensten reeds werkzaamheden heeft verricht, worden deze in rekening gebracht.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 10 - Klachten
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    Klachten dienen binnen 48 uur na uitvoering van de opdracht schriftelijk te worden ingediend.
                  </li>
                  <li>
                    Het indienen van een klacht schort de betalingsverplichting niet op.
                  </li>
                  <li>
                    Maram Diensten zal klachten binnen 14 dagen in behandeling nemen.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 11 - Geheimhouding
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst hebben verkregen. Deze verplichting geldt ook na beëindiging van de overeenkomst.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 12 - Toepasselijk recht en geschillen
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    Op alle overeenkomsten is Nederlands recht van toepassing.
                  </li>
                  <li>
                    Geschillen zullen in eerste instantie worden voorgelegd aan de bevoegde rechter in het arrondissement waar Maram Diensten is gevestigd.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 13 - Wijzigingen
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Maram Diensten behoudt zich het recht voor deze algemene voorwaarden te wijzigen. Gewijzigde voorwaarden worden van kracht 30 dagen na bekendmaking. De meest recente versie is altijd beschikbaar op onze website.
                </p>
              </section>

              <section className="pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Contact
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Voor vragen over deze algemene voorwaarden kunt u contact opnemen met:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>E-mail: info@maramdiensten.nl</li>
                  <li>Telefoon: 06-12345678</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
