import LegalPage from "../components/LegalPage";
import { site } from "../lib/site";

export const metadata = {
  title: `Datenschutzerklärung – ${site.name}`,
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          {site.legalName}, {site.address.street}, {site.address.zip} {site.address.city} · {site.email}
        </p>
      </section>
      <section>
        <h2>2. Hosting & Server-Logfiles</h2>
        <p>
          [Hosting-Anbieter, Serverstandort, Speicherdauer der Logfiles, Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO]
        </p>
      </section>
      <section>
        <h2>3. Anfrageformular (Kostenlose Analyse)</h2>
        <p>
          Wenn Sie unser Anfrageformular nutzen, verarbeiten wir Ihre Angaben (Name, Unternehmen, E-Mail, Telefon sowie
          Ihre Antworten zu Bedarf, Unternehmensgröße und Kosten) zur Bearbeitung Ihrer Anfrage und zur Anbahnung eines
          Vertrags (Art. 6 Abs. 1 lit. b DSGVO). [Empfänger/Auftragsverarbeiter, z. B. CRM- oder Automatisierungsdienst,
          Speicherdauer]
        </p>
      </section>
      <section>
        <h2>4. Terminbuchung</h2>
        <p>[Falls Calendly o. Ä. genutzt wird: Anbieter, Drittlandübermittlung, Rechtsgrundlage]</p>
      </section>
      <section>
        <h2>5. Schriftarten</h2>
        <p>
          Die verwendeten Schriftarten werden lokal von unserem Server ausgeliefert. Es findet keine Verbindung zu
          Google statt.
        </p>
      </section>
      <section>
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
          und Widerspruch sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde. [Zuständige Behörde]
        </p>
      </section>
    </LegalPage>
  );
}
