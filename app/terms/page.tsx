import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Solvix Core",
  description: "Terms of Service for Solvix Core - Learn about our terms and conditions for using our services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Solvix Core's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                Solvix Core provides digital solutions including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>AI automation and machine learning solutions</li>
                <li>Web development and application development</li>
                <li>Digital marketing and SEO services</li>
                <li>Graphic design and video editing</li>
                <li>E-commerce solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>50% deposit required to start projects</li>
                <li>Final payment due upon project completion</li>
                <li>Payment plans available for larger projects</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, clients receive full ownership of custom-developed solutions. Solvix Core retains rights to general methodologies and frameworks.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Solvix Core's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <ul className="list-none text-gray-700">
                <li><strong>Email:</strong> info@solvixcore.com</li>
                <li><strong>Phone:</strong> +1 (431) 533-5035</li>
                <li><strong>Website:</strong> solvixcore.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}