import { Metadata } from "next";
import { LegalLayout } from "@/modules/legal/layout";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions that govern your use of Amidarh's products and services, including Flow and Trupper.",
  alternates: {
    canonical: "https://amidarh.com/terms",
  },
  openGraph: {
    title: "Terms and Conditions | Amidarh",
    description:
      "Read the terms and conditions that govern your use of Amidarh's products and services, including Flow and Trupper.",
    url: "https://amidarh.com/terms",
    siteName: "Amidarh",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="July 13, 2026">
      <section>
        <p>
          Welcome to Amidarh. These Terms and Conditions (&quot;Terms&quot;)
          govern your access to and use of the website at amidarh.com and all
          products and services operated by Amidarh Technologies
          (&quot;Amidarh,&quot; &quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;), including <strong>Flow</strong> and{" "}
          <strong>Trupper</strong> (collectively, the &quot;Services&quot;).
        </p>
        <p className="mt-4">
          By creating an account or using our Services, you agree to be bound by
          these Terms. If you do not agree, you must not access or use our
          Services.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          1. Definitions
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>&quot;Flow&quot;</strong> refers to Amidarh&apos;s
            AI-powered learning platform for individuals, offering course
            generation, flashcards, quizzes, and progress tracking.
          </li>
          <li>
            <strong>&quot;Trupper&quot;</strong> refers to Amidarh&apos;s
            learning management platform for schools, online tutors, and
            companies.
          </li>
          <li>
            <strong>&quot;User,&quot; &quot;you,&quot;</strong> or{" "}
            <strong>&quot;your&quot;</strong> refers to any individual or entity
            that accesses or uses our Services.
          </li>
          <li>
            <strong>&quot;Institution&quot;</strong> refers to a school, company,
            or organization that uses Trupper to manage learners, courses, and
            assessments.
          </li>
          <li>
            <strong>&quot;Content&quot;</strong> refers to any text, images,
            audio, video, courses, exams, questions, or other materials uploaded,
            created, or shared through our Services.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          2. Eligibility
        </h2>
        <p className="mt-3">
          You must be at least 13 years old to use our Services. If you are
          under the age of 18, you may only use our Services with the consent
          and supervision of a parent, guardian, or authorized educational
          institution.
        </p>
        <p className="mt-3">
          By using our Services, you represent that you meet these eligibility
          requirements and have the legal capacity to enter into these Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          3. Account Registration
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            You must provide accurate, current, and complete information when
            creating an account.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activity that occurs under your
            account.
          </li>
          <li>
            You must notify us immediately at{" "}
            <a
              href="mailto:contact@amidarh.com"
              className="text-trupper hover:underline"
            >
              contact@amidarh.com
            </a>{" "}
            if you suspect unauthorized access to your account.
          </li>
          <li>
            We reserve the right to suspend or terminate accounts that violate
            these Terms or are inactive for an extended period.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          4. Use of Services
        </h2>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          4.1 Permitted Use
        </h3>
        <p className="mt-3">
          You may use our Services only for lawful purposes and in accordance
          with these Terms. Our Services are intended for educational and
          institutional management purposes.
        </p>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          4.2 Prohibited Conduct
        </h3>
        <p className="mt-3">You agree not to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Use the Services for any illegal, fraudulent, or unauthorized
            purpose
          </li>
          <li>
            Upload or transmit malicious code, viruses, or harmful content
          </li>
          <li>
            Attempt to gain unauthorized access to our systems, other user
            accounts, or data
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of our
            Services
          </li>
          <li>
            Scrape, crawl, or use automated tools to extract data from our
            Services without permission
          </li>
          <li>
            Impersonate another person or entity, or misrepresent your
            affiliation with any person or entity
          </li>
          <li>
            Use AI-generated content from Flow to misrepresent it as original
            academic work where academic integrity policies prohibit such use
          </li>
          <li>
            Share, resell, or redistribute access to paid features or
            subscription plans
          </li>
          <li>
            Harass, bully, or engage in abusive behavior toward other users
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          5. Content Ownership and Licenses
        </h2>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          5.1 Your Content
        </h3>
        <p className="mt-3">
          You retain ownership of all Content you create, upload, or share
          through our Services. By using our Services, you grant Amidarh a
          non-exclusive, worldwide, royalty-free license to host, store,
          display, and process your Content solely for the purpose of providing
          and improving our Services.
        </p>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          5.2 AI-Generated Content (Flow)
        </h3>
        <p className="mt-3">
          Content generated by Flow&apos;s AI features (including courses,
          flashcards, and quizzes) is provided for your personal educational
          use. While you may use this content freely for learning, Amidarh does
          not guarantee its accuracy, completeness, or suitability for any
          particular purpose. You are responsible for verifying AI-generated
          content before relying on it.
        </p>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          5.3 Institution Content (Trupper)
        </h3>
        <p className="mt-3">
          Content uploaded by an institution (courses, exams, grades, and
          administrative data) belongs to that institution. Amidarh processes
          this content on behalf of the institution and does not claim ownership
          over it.
        </p>

        <h3 className="mt-6 font-display text-xl font-semibold text-ink">
          5.4 Amidarh Content
        </h3>
        <p className="mt-3">
          All intellectual property rights in our Services, including software,
          design, logos, trademarks, documentation, and proprietary content,
          belong to Amidarh Technologies. You may not copy, modify, distribute,
          or create derivative works from our proprietary content without our
          prior written consent.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          6. Subscriptions and Payments
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Some features of our Services require a paid subscription. Pricing,
            billing cycles, and plan details are displayed on our pricing pages.
          </li>
          <li>
            Subscription fees are billed in advance on a recurring basis (monthly
            or annually, as selected). All fees are non-refundable except as
            required by applicable law or as explicitly stated in our refund
            policy.
          </li>
          <li>
            We reserve the right to change our pricing with at least 30
            days&apos; notice before the change takes effect for your next
            billing cycle.
          </li>
          <li>
            If your payment fails, we may suspend access to paid features until
            payment is resolved.
          </li>
          <li>
            You may cancel your subscription at any time. Cancellation takes
            effect at the end of your current billing period.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          7. Institutions and Administrators (Trupper)
        </h2>
        <p className="mt-3">
          If you register an institution on Trupper:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            You represent that you have the authority to act on behalf of the
            institution and bind it to these Terms.
          </li>
          <li>
            You are responsible for managing your institution&apos;s users,
            data, and compliance with applicable laws, including educational
            privacy regulations.
          </li>
          <li>
            You are responsible for obtaining any necessary consents from
            students, parents, or staff before enrolling them on the platform.
          </li>
          <li>
            Amidarh acts as a data processor for institution data. The
            institution remains the data controller and is responsible for how
            learner data is collected and used.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          8. Availability and Modifications
        </h2>
        <p className="mt-3">
          We strive to keep our Services available and reliable, but we do not
          guarantee uninterrupted access. We may:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Perform scheduled or unscheduled maintenance that may temporarily
            affect availability
          </li>
          <li>
            Modify, update, or discontinue features of our Services at any time
          </li>
          <li>
            Introduce new features, products, or services under these Terms or
            supplemental terms
          </li>
        </ul>
        <p className="mt-3">
          We will provide reasonable notice for material changes that
          significantly affect your use of the Services.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          9. Termination
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            You may terminate your account at any time by contacting us or using
            the account deletion feature in your settings.
          </li>
          <li>
            We may suspend or terminate your access to our Services immediately,
            without prior notice, if you violate these Terms or engage in
            conduct that we determine is harmful to other users, our Services,
            or third parties.
          </li>
          <li>
            Upon termination, your right to use the Services ceases immediately.
            We may delete your data in accordance with our Privacy Policy and
            data retention practices.
          </li>
          <li>
            Provisions that by their nature should survive termination will
            survive, including ownership, warranty disclaimers, indemnity, and
            limitations of liability.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          10. Disclaimers
        </h2>
        <p className="mt-3">
          Our Services are provided on an &quot;as is&quot; and &quot;as
          available&quot; basis, without warranties of any kind, either express
          or implied, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement.
        </p>
        <p className="mt-3">Without limiting the foregoing, Amidarh does not warrant that:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>The Services will be uninterrupted, timely, secure, or error-free</li>
          <li>
            AI-generated content on Flow will be accurate, complete, or
            suitable for academic or professional purposes
          </li>
          <li>
            The results obtained from using the Services will meet your
            requirements
          </li>
          <li>
            Any errors or defects in the Services will be corrected
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          11. Limitation of Liability
        </h2>
        <p className="mt-3">
          To the maximum extent permitted by applicable law, Amidarh
          Technologies, its directors, employees, partners, agents, suppliers,
          and affiliates shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, including but not limited
          to loss of profits, data, use, goodwill, or other intangible losses,
          resulting from:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Your access to, use of, or inability to use the Services</li>
          <li>Any conduct or content of any third party on the Services</li>
          <li>Any content obtained from the Services, including AI-generated content</li>
          <li>Unauthorized access, use, or alteration of your data or content</li>
        </ul>
        <p className="mt-3">
          In no event shall Amidarh&apos;s total aggregate liability exceed the
          amount you have paid to Amidarh in the twelve (12) months preceding
          the claim, or one hundred US dollars ($100), whichever is greater.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          12. Indemnification
        </h2>
        <p className="mt-3">
          You agree to indemnify, defend, and hold harmless Amidarh
          Technologies and its officers, directors, employees, and agents from
          and against any claims, liabilities, damages, losses, costs, or
          expenses (including reasonable legal fees) arising out of or related
          to:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Your use of or access to the Services</li>
          <li>Your violation of these Terms</li>
          <li>
            Your violation of any rights of another person or entity
          </li>
          <li>
            Content you upload, create, or share through the Services
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          13. Governing Law and Dispute Resolution
        </h2>
        <p className="mt-3">
          These Terms shall be governed by and construed in accordance with the
          laws of the United States, without regard to conflict of law
          principles.
        </p>
        <p className="mt-3">
          Any disputes arising under these Terms shall first be resolved through
          good-faith negotiation. If a dispute cannot be resolved through
          negotiation within 30 days, it may be submitted to binding arbitration
          or resolved in the courts of competent jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          14. Severability
        </h2>
        <p className="mt-3">
          If any provision of these Terms is found to be unenforceable or
          invalid, that provision will be limited or eliminated to the minimum
          extent necessary, and the remaining provisions will remain in full
          force and effect.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          15. Entire Agreement
        </h2>
        <p className="mt-3">
          These Terms, together with our{" "}
          <a href="/privacy" className="text-trupper hover:underline">
            Privacy Policy
          </a>
          , constitute the entire agreement between you and Amidarh regarding
          your use of our Services and supersede any prior agreements or
          understandings.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          16. Changes to These Terms
        </h2>
        <p className="mt-3">
          We reserve the right to modify these Terms at any time. When we make
          material changes, we will update the &quot;Last updated&quot; date at
          the top of this page and notify you through our Services or via email.
        </p>
        <p className="mt-3">
          Your continued use of our Services after the effective date of any
          changes constitutes your acceptance of the updated Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          17. Contact Us
        </h2>
        <p className="mt-3">
          If you have any questions about these Terms, please contact us:
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
