import { Metadata } from "next";
import { LegalLayout } from "@/modules/legal/layout";

export const metadata: Metadata = {
  title: "NDPR Compliance",
  description:
    "Learn how Amidarh complies with the Nigeria Data Protection Regulation (NDPR) and protects the personal data of Nigerian users.",
  alternates: {
    canonical: "https://amidarh.com/ndpr",
  },
  openGraph: {
    title: "NDPR Compliance | Amidarh",
    description:
      "Learn how Amidarh complies with the Nigeria Data Protection Regulation (NDPR) and protects the personal data of Nigerian users.",
    url: "https://amidarh.com/ndpr",
    siteName: "Amidarh",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NDPRCompliancePage() {
  return (
    <LegalLayout title="NDPR Compliance" lastUpdated="September 18, 2026">
      <section>
        <p>
          Amidarh Technologies (&quot;Amidarh,&quot; &quot;we,&quot;
          &quot;our,&quot; or &quot;us&quot;) is committed to complying with
          the Nigeria Data Protection Regulation (NDPR) 2019 and the Nigeria
          Data Protection Act (NDP Act) 2023. This page outlines how we
          protect the personal data of individuals in Nigeria and uphold the
          principles of the NDPR across our products, including{" "}
          <strong>Flow</strong> and <strong>Trupper</strong>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          1. Our Role as a Data Controller and Data Processor
        </h2>
        <p className="mt-3">
          <strong>As a Data Controller:</strong> When we collect and process
          personal data directly from users who create accounts, subscribe to
          plans, or interact with our platform, we act as the data controller
          and are responsible for determining the purposes and means of
          processing.
        </p>
        <p className="mt-3">
          <strong>As a Data Processor:</strong> When educational institutions
          use Trupper to manage student data, we act as a data processor on
          behalf of the institution (the data controller). We process such data
          strictly in accordance with the institution&apos;s instructions and
          applicable data protection agreements.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          2. Lawful Basis for Processing
        </h2>
        <p className="mt-3">
          In accordance with the NDPR, we process personal data only when we
          have a lawful basis to do so. The bases we rely on include:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Consent:</strong> We obtain clear, informed consent before
            collecting and processing your personal data. You may withdraw
            consent at any time without affecting the lawfulness of processing
            carried out before withdrawal.
          </li>
          <li>
            <strong>Performance of a Contract:</strong> Processing necessary to
            fulfil our obligations under the terms of service you agreed to
            when creating an account or subscribing to our Services.
          </li>
          <li>
            <strong>Legitimate Interest:</strong> Processing necessary for our
            legitimate business interests, such as improving our Services,
            preventing fraud, and ensuring platform security, provided these
            interests do not override your fundamental rights.
          </li>
          <li>
            <strong>Legal Obligation:</strong> Processing necessary to comply
            with applicable Nigerian laws and regulations.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          3. Data Subject Rights Under the NDPR
        </h2>
        <p className="mt-3">
          As a data subject under the NDPR, you have the following rights:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Right to Information:</strong> You have the right to be
            informed about how your personal data is collected, used, stored,
            and shared.
          </li>
          <li>
            <strong>Right of Access:</strong> You may request access to the
            personal data we hold about you and obtain a copy in a commonly
            used, machine-readable format.
          </li>
          <li>
            <strong>Right to Rectification:</strong> You may request correction
            of any inaccurate or incomplete personal data we hold about you.
          </li>
          <li>
            <strong>Right to Deletion:</strong> You may request that we delete
            your personal data where it is no longer necessary for the purpose
            it was collected, or where you withdraw consent, subject to legal
            retention requirements.
          </li>
          <li>
            <strong>Right to Restriction of Processing:</strong> You may
            request that we restrict the processing of your personal data in
            certain circumstances, such as when you contest its accuracy.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> You may request that
            your personal data be provided to you or transferred to another
            controller in a structured, commonly used, and machine-readable
            format.
          </li>
          <li>
            <strong>Right to Object:</strong> You may object to the processing
            of your personal data for direct marketing or where processing is
            based on legitimate interests.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Where processing is
            based on consent, you have the right to withdraw consent at any
            time.
          </li>
          <li>
            <strong>Right to Lodge a Complaint:</strong> You have the right to
            lodge a complaint with the Nigeria Data Protection Commission
            (NDPC) if you believe your data protection rights have been
            violated.
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:privacy@amidarh.com"
            className="text-trupper hover:underline"
          >
            privacy@amidarh.com
          </a>
          . We will respond to your request within 30 days.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          4. Consent Mechanisms
        </h2>
        <p className="mt-3">
          We implement the following consent mechanisms as required by the NDPR:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Clear and prominent privacy notices are presented at the point of
            data collection (e.g., during account registration).
          </li>
          <li>
            Consent is obtained through affirmative action (opt-in), not
            pre-checked boxes or inactivity.
          </li>
          <li>
            Users can withdraw consent at any time through their account
            settings or by contacting us.
          </li>
          <li>
            Separate consent is obtained for distinct processing activities
            (e.g., marketing communications are separate from account
            creation).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          5. Data Protection Measures
        </h2>
        <p className="mt-3">
          In compliance with the NDPR&apos;s security requirements, we
          implement appropriate technical and organizational measures to
          protect personal data, including:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Encryption:</strong> All data in transit is encrypted using
            TLS/SSL. Data at rest is encrypted using industry-standard
            encryption algorithms.
          </li>
          <li>
            <strong>Access Controls:</strong> Role-based access controls ensure
            that only authorized personnel can access personal data, on a
            need-to-know basis.
          </li>
          <li>
            <strong>Secure Authentication:</strong> Passwords are securely
            hashed. We support OAuth-based authentication and enforce strong
            password policies.
          </li>
          <li>
            <strong>Regular Audits:</strong> We conduct periodic security
            assessments and vulnerability testing to identify and address
            potential risks.
          </li>
          <li>
            <strong>Incident Response:</strong> We maintain an incident
            response plan to detect, report, and respond to data breaches in a
            timely manner.
          </li>
          <li>
            <strong>Employee Training:</strong> Our team members undergo
            regular data protection awareness training.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          6. Data Breach Notification
        </h2>
        <p className="mt-3">
          In the event of a personal data breach that is likely to result in a
          risk to the rights and freedoms of data subjects, we will:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Notify the Nigeria Data Protection Commission (NDPC) within 72
            hours of becoming aware of the breach.
          </li>
          <li>
            Notify affected data subjects without undue delay where the breach
            is likely to result in a high risk to their rights and freedoms.
          </li>
          <li>
            Document the breach, including the facts, its effects, and the
            remedial actions taken.
          </li>
          <li>
            Where Amidarh acts as a data processor (e.g., for Trupper
            institutional data), notify the data controller (the institution)
            without undue delay upon becoming aware of a breach.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          7. International Data Transfers
        </h2>
        <p className="mt-3">
          Where personal data of Nigerian users is transferred outside Nigeria,
          we ensure that adequate safeguards are in place as required by the
          NDPR and NDP Act, including:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Ensuring the recipient country provides an adequate level of data
            protection, or implementing appropriate contractual safeguards
            (such as standard contractual clauses).
          </li>
          <li>
            Obtaining the explicit consent of the data subject where required.
          </li>
          <li>
            Conducting transfer impact assessments where necessary to evaluate
            the risks of the transfer.
          </li>
        </ul>
        <p className="mt-3">
          Our primary infrastructure providers maintain data centres with
          robust security certifications. We ensure all third-party processors
          handling Nigerian user data are bound by data processing agreements
          that meet NDPR requirements.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          8. Data Protection Impact Assessment (DPIA)
        </h2>
        <p className="mt-3">
          We conduct Data Protection Impact Assessments for processing
          activities that are likely to result in a high risk to the rights and
          freedoms of data subjects. This includes assessments for:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            AI-powered features on Flow that process personal data to generate
            personalized learning content.
          </li>
          <li>
            Large-scale processing of student records and examination data on
            Trupper.
          </li>
          <li>Introduction of new features that involve new types of data processing.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          9. Third-Party Data Processors
        </h2>
        <p className="mt-3">
          We engage third-party service providers to help deliver our Services.
          In compliance with the NDPR, we ensure that:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            All third-party processors are bound by written data processing
            agreements that specify the scope, nature, and purpose of
            processing.
          </li>
          <li>
            Third-party processors implement appropriate technical and
            organizational security measures.
          </li>
          <li>
            We conduct due diligence on third-party processors before
            engagement and periodically review their compliance.
          </li>
          <li>
            Third-party processors do not engage sub-processors without our
            prior authorization.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          10. Data Retention
        </h2>
        <p className="mt-3">
          We retain personal data only for as long as necessary to fulfil the
          purposes for which it was collected, as outlined in our{" "}
          <a href="/privacy" className="text-trupper hover:underline">
            Privacy Policy
          </a>
          . Specific retention periods include:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Account Data:</strong> Retained for the duration of your
            account and deleted or anonymized within 90 days of account
            deletion.
          </li>
          <li>
            <strong>Transaction Records:</strong> Retained for up to 6 years
            as required by Nigerian tax and financial regulations.
          </li>
          <li>
            <strong>Institutional Records (Trupper):</strong> Retained as
            directed by the institution, in accordance with applicable
            educational record-keeping requirements.
          </li>
          <li>
            <strong>Usage and Log Data:</strong> Retained for up to 12 months
            for security, analytics, and service improvement purposes.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          11. Complaints and Regulatory Contact
        </h2>
        <p className="mt-3">
          If you believe that your data protection rights have been violated,
          you have the right to lodge a complaint with the Nigeria Data
          Protection Commission (NDPC):
        </p>
        <ul className="mt-4 list-none space-y-1">
          <li>
            <strong>Nigeria Data Protection Commission (NDPC)</strong>
          </li>
          <li>
            Website:{" "}
            <a
              href="https://ndpc.gov.ng"
              className="text-trupper hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ndpc.gov.ng
            </a>
          </li>
        </ul>
        <p className="mt-4">
          We encourage you to contact us first so we can attempt to resolve
          your concern directly.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          12. Updates to This Page
        </h2>
        <p className="mt-3">
          We may update this NDPR compliance page from time to time to reflect
          changes in our practices or in applicable law. When we make material
          changes, we will update the &quot;Last updated&quot; date at the top
          of this page.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          13. Contact Us
        </h2>
        <p className="mt-3">
          For any questions or concerns about our NDPR compliance or to
          exercise your data protection rights, please contact us:
        </p>
        <ul className="mt-3 list-none space-y-1">
          <li>
            <strong>Data Protection Officer Email:</strong>{" "}
            <a
              href="mailto:privacy@amidarh.com"
              className="text-trupper hover:underline"
            >
              privacy@amidarh.com
            </a>
          </li>
          <li>
            <strong>General Enquiries:</strong>{" "}
            <a
              href="mailto:contact@amidarh.com"
              className="text-trupper hover:underline"
            >
              contact@amidarh.com
            </a>
          </li>
          <li>
            <strong>Company:</strong> Amidarh Technologies
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a
              href="https://amidarh.com"
              className="text-trupper hover:underline"
            >
              amidarh.com
            </a>
          </li>
        </ul>
      </section>
    </LegalLayout>
  );
}
