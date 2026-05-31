import type { Metadata } from 'next'
import { CONTACT } from '@/lib/constants'
import EnquiryForm from '@/components/contact/enquiry-form'

export const metadata: Metadata = {
  title: 'Contact — Submit an Enquiry',
  description:
    'Contact Rampart Defence Engineering. All enquiries are handled with full confidentiality. Response within two working days.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ background: 'var(--bg-black)', paddingBottom: '60px' }}>
        <div className="section-inner" style={{ paddingTop: 'var(--space-80)' }}>
          <h1 className="type-headline text-[var(--text-white)] mb-4">Get in touch.</h1>
          <p className="type-body text-[var(--text-secondary)] max-w-[440px]">
            Our team responds within two working days.
            All enquiries are treated with strict confidentiality.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="section" style={{ background: 'var(--bg-near-black)' }}>
        <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Contact details */}
          <div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="type-label text-[var(--text-tertiary)] mb-2">Phone</p>
                <a href={`tel:${CONTACT.phone}`} className="type-body text-[var(--text-white)] hover:text-[var(--accent-dark-bg)] transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className="type-label text-[var(--text-tertiary)] mb-2">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="type-body text-[var(--text-white)] hover:text-[var(--accent-dark-bg)] transition-colors">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="type-label text-[var(--text-tertiary)] mb-2">WhatsApp</p>
                <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`} className="type-body text-[var(--text-white)] hover:text-[var(--accent-dark-bg)] transition-colors">
                  {CONTACT.whatsapp}
                </a>
              </div>
              <div>
                <p className="type-label text-[var(--text-tertiary)] mb-2">Address</p>
                <p className="type-body text-[var(--text-white)]">{CONTACT.address}</p>
              </div>
              <div>
                <p className="type-label text-[var(--text-tertiary)] mb-2">Office Hours</p>
                <p className="type-body text-[var(--text-white)]">{CONTACT.hours}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
