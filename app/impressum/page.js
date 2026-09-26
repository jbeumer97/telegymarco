import LegalPage from "../components/LegalPage";
import { site } from "../lib/site";

export const metadata = {
  title: `Impressum – ${site.name}`,
  robots: { index: false },
};

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {site.legalName} [Rechtsform]
          <br />
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
        </p>
      </section>
      <section>
        <h2>Vertreten durch</h2>
        <p>[Name der vertretungsberechtigten Person]</p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: {site.phone.display}
          <br />
          E-Mail: {site.email}
        </p>
      </section>
      <section>
        <h2>Registereintrag & Umsatzsteuer</h2>
        <p>
          Registergericht: [Amtsgericht] · Registernummer: [HRB …]
          <br />
          Umsatzsteuer-ID gemäß § 27a UStG: [DE …]
        </p>
      </section>
      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>[Name, Anschrift]</p>
      </section>
    </LegalPage>
  );
}
