import { Metadata } from "next";
import { LegalLayout } from "@/modules/legal/layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Amidarh collects, uses, and protects your personal information across our products including Flow and Trupper.",
  alternates: {
    canonical: "https://amidarh.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Amidarh",
    description:
      "Learn how Amidarh collects, uses, and protects your personal information across our products including Flow and Trupper.",
    url: "https://amidarh.com/privacy",
    siteName: "Amidarh",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 13, 2026">
      <section>
        <p>
          At Amidarh Technologies (&quot;Amidarh,&quot; &quot;we,&quot;
          &quot;our,&quot; or &quot;us&quot;), we are committed to protecting
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our website
          (amidarh.com) and our products, including{" "}
          <strong>Flow</strong> and <strong>Trupper</strong> (collectively, the
          &quot;Services&quot;).
        </p>
        <p className="mt-4">
          By accessing or using our Services, you agree to this Privacy Policy.
          If you do not agree, please do not use our Services.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          1. Information We Collect
        </h2>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          1.1 Information You Provide
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Account Information:</strong> When you create an account, we
            collect your name, email address, and password. If you sign up via
            Google OAuth, we receive your name, email, and profile picture from
            Google.
          </li>
          <li>
            <strong>Profile Information:</strong> Any additional information you
            add to your profile, such as your institution name, role, or profile
            photo.
          </li>
          <li>
            <strong>Institution Data (Trupper):</strong> If you register an
            institution on Trupper, we collect institution details such as name,
            type, address, and administrative contacts.
          </li>
          <li>
            <strong>Learning Content:</strong> Courses, exams, questions, grades,
            and other educational materials you create or interact with on our
            platforms.
          </li>
          <li>
            <strong>Communications:</strong> When you contact us for support or
            provide feedback, we collect the content of your messages and any
            contact information you provide.
          </li>
          <li>
            <strong>Payment Information:</strong> If you subscribe to a paid
            plan, payment details are processed by our third-party payment
            processors. We do not store your full credit card or bank account
            numbers.
          </li>
        </ul>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          1.2 Information Collected Automatically
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Usage Data:</strong> Pages visited, features used, time
            spent on our Services, and interaction patterns.
          </li>
          <li>
            <strong>Device Information:</strong> Browser type, operating system,
            device type, screen resolution, and unique device identifiers.
          </li>
          <li>
            <strong>Log Data:</strong> IP address, access times, referring URLs,
            and error logs.
          </li>
          <li>
            <strong>Cookies and Similar Technologies:</strong> We use cookies,
            local storage, and similar technologies to maintain your session,
            remember your preferences, and improve our Services.
          </li>
        </ul>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          1.3 Information from Third Parties
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Google OAuth:</strong> If you sign in using Google, we
            receive basic profile information as authorized by your Google
            account settings.
          </li>
          <li>
            <strong>Analytics Providers:</strong> We may receive aggregated
            analytics data from third-party services that help us understand how
            our Services are used.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          2. How We Use Your Information
        </h2>
        <p className="mt-3">We use the information we collect to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Provide, operate, and maintain our Services</li>
          <li>
            Create and manage your account, and authenticate your identity
          </li>
          <li>
            Process transactions and send related notifications (receipts,
            confirmations, subscription updates)
          </li>
          <li>
            Personalize your learning experience on Flow and institutional
            management on Trupper
          </li>
          <li>
            Generate AI-powered content such as courses, flashcards, and quizzes
            on Flow
          </li>
          <li>
            Facilitate exam creation, delivery, grading, and analytics on
            Trupper
          </li>
          <li>
            Send administrative communications including security alerts,
            updates, and support messages
          </li>
          <li>
            Analyze usage trends to improve and develop new features for our
            Services
          </li>
          <li>
            Detect, prevent, and address fraud, abuse, and security issues
          </li>
          <li>Comply with legal obligations and enforce our Terms of Service</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          3. How We Share Your Information
        </h2>
        <p className="mt-3">
          We do not sell your personal information. We may share your information
          in the following circumstances:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Within Your Institution (Trupper):</strong> If you are part
            of an institution on Trupper, your profile information, enrollment
            status, grades, and course activity may be visible to administrators,
            instructors, and other authorized members of that institution as
            required for the platform to function.
          </li>
          <li>
            <strong>Service Providers:</strong> We share information with
            trusted third-party vendors who help us operate our Services (e.g.,
            hosting, payment processing, email delivery, analytics). These
            providers are contractually obligated to protect your data and use it
            only for the services they provide to us.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required by law, legal process, or governmental
            request, or to protect the rights, property, or safety of Amidarh,
            our users, or others.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, reorganization, or sale of assets, your information may
            be transferred as part of that transaction. We will notify you of any
            such change.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information
            for other purposes when you give us explicit consent.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          4. Data Retention
        </h2>
        <p className="mt-3">
          We retain your personal information for as long as your account is
          active or as needed to provide you with our Services. We may also
          retain certain information as necessary to comply with legal
          obligations, resolve disputes, enforce our agreements, and for
          legitimate business purposes.
        </p>
        <p className="mt-3">
          When you delete your account, we will delete or anonymize your
          personal information within 90 days, except where retention is required
          by law or for legitimate business purposes (such as fraud prevention).
        </p>
        <p className="mt-3">
          <strong>Institution Data (Trupper):</strong> Educational records
          associated with an institution may be retained as directed by the
          institution administrator in accordance with applicable educational
          record-keeping requirements.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          5. Data Security
        </h2>
        <p className="mt-3">
          We implement industry-standard technical and organizational measures
          to protect your information, including:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Encryption of data in transit (TLS/SSL) and at rest</li>
          <li>Secure authentication with hashed passwords and token-based sessions</li>
          <li>Regular security assessments and monitoring</li>
          <li>Access controls limiting employee access to personal data</li>
          <li>Secure infrastructure with reputable cloud service providers</li>
        </ul>
        <p className="mt-3">
          While we strive to protect your data, no method of electronic
          transmission or storage is 100% secure. We cannot guarantee absolute
          security.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          6. Your Rights and Choices
        </h2>
        <p className="mt-3">
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Access:</strong> Request a copy of the personal information
            we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> Request that we correct inaccurate or
            incomplete information.
          </li>
          <li>
            <strong>Deletion:</strong> Request that we delete your personal
            information, subject to certain legal exceptions.
          </li>
          <li>
            <strong>Data Portability:</strong> Request your data in a structured,
            commonly used, and machine-readable format.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> Where processing is based on
            consent, you may withdraw it at any time without affecting the
            lawfulness of prior processing.
          </li>
          <li>
            <strong>Opt Out of Marketing:</strong> You can unsubscribe from
            marketing emails at any time by clicking the unsubscribe link in the
            email or contacting us.
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:contact@amidarh.com"
            className="text-trupper hover:underline"
          >
            contact@amidarh.com
          </a>
          . We will respond to your request within 30 days.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          7. Cookies and Tracking Technologies
        </h2>
        <p className="mt-3">We use the following types of cookies:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Essential Cookies:</strong> Required for core functionality
            such as authentication, session management, and security.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences (e.g.,
            theme, language) to enhance your experience.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how our
            Services are used so we can improve them.
          </li>
        </ul>
        <p className="mt-3">
          You can manage cookie preferences through your browser settings. Note
          that disabling essential cookies may affect the functionality of our
          Services.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          8. Children&apos;s Privacy
        </h2>
        <p className="mt-3">
          Our Services are not directed to children under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          we learn that we have collected information from a child under 13, we
          will take steps to delete it promptly.
        </p>
        <p className="mt-3">
          <strong>For Educational Institutions:</strong> Where Trupper is used by
          schools that enroll students under 13, the institution is responsible
          for obtaining necessary parental consent and ensuring compliance with
          applicable children&apos;s privacy laws (such as COPPA). In such
          cases, Amidarh processes student data as a service provider on behalf
          of the institution.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          9. International Data Transfers
        </h2>
        <p className="mt-3">
          Your information may be transferred to and processed in countries
          other than your country of residence. These countries may have
          different data protection laws. When we transfer data internationally,
          we take appropriate safeguards to ensure your information remains
          protected in accordance with this Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          10. Third-Party Links
        </h2>
        <p className="mt-3">
          Our Services may contain links to third-party websites, services, or
          applications. This Privacy Policy does not apply to those third
          parties. We encourage you to review the privacy policies of any
          third-party services you access through our platform.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          11. Changes to This Privacy Policy
        </h2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. When we make
          material changes, we will notify you by posting the updated policy on
          our website with a revised &quot;Last updated&quot; date and, where
          appropriate, through email or in-app notification.
        </p>
        <p className="mt-3">
          Your continued use of our Services after any changes constitutes your
          acceptance of the updated Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          12. Contact Us
        </h2>
        <p className="mt-3">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us:
        </p>
        <ul className="mt-3 list-none space-y-1">
          <li>
            <strong>Email:</strong>{" "}
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
