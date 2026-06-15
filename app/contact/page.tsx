import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../site-data";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] px-5 py-28 text-[#151B22] md:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8A45D]">
          Contact
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-[#0D3B66] md:text-7xl">
          Start a project conversation with Charismak.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
          Contact us for building construction, civil engineering, renovation,
          steel fabrication, project management, facility maintenance, and
          finishing works.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#0D3B66] p-8 text-white md:p-10">
          <h2 className="text-3xl font-semibold">Corporate Enquiries</h2>

          <div className="mt-8 space-y-6">
            <p className="flex gap-4">
              <Mail className="h-6 w-6 shrink-0 text-[#C8A45D]" />
              <span>{company.email}</span>
            </p>

            {company.phones.map((phone) => (
              <p key={phone} className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 text-[#C8A45D]" />
                <span>{phone}</span>
              </p>
            ))}

            {company.addresses.map((address) => (
              <p key={address} className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-[#C8A45D]" />
                <span>{address}</span>
              </p>
            ))}
          </div>
        </div>

        <form className="bg-white p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-[#0D3B66]">
            Project Enquiry Form
          </h2>

          <div className="mt-8 grid gap-5">
            <input
              placeholder="Full name / Company name"
              className="border border-[#0D3B66]/10 bg-[#F5F7FA] px-5 py-4 outline-none"
            />

            <input
              placeholder="Phone number"
              className="border border-[#0D3B66]/10 bg-[#F5F7FA] px-5 py-4 outline-none"
            />

            <input
              placeholder="Email address"
              className="border border-[#0D3B66]/10 bg-[#F5F7FA] px-5 py-4 outline-none"
            />

            <select className="border border-[#0D3B66]/10 bg-[#F5F7FA] px-5 py-4 outline-none">
              <option>Select service</option>
              <option>Building Construction</option>
              <option>Civil Engineering</option>
              <option>Renovation & Interior Design</option>
              <option>Steel Fabrication</option>
              <option>Project Management</option>
              <option>Facility Maintenance</option>
            </select>

            <textarea
              placeholder="Briefly describe your project"
              rows={6}
              className="border border-[#0D3B66]/10 bg-[#F5F7FA] px-5 py-4 outline-none"
            />

            <button
              type="button"
              className="inline-flex items-center justify-center gap-3 bg-[#8B1E00] px-7 py-4 font-bold text-white"
            >
              Submit Enquiry <ArrowRight className="h-5 w-5" />
            </button>

            <p className="text-sm leading-6 text-black/50">
              Note: This form is currently a visual enquiry form. We can connect
              it to email, WhatsApp, or a database before final deployment.
            </p>
          </div>
        </form>
      </section>

      <section className="mx-auto mt-24 max-w-7xl bg-[#0D3B66] p-8 text-white md:p-12">
        <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Need a faster response?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Reach out directly by phone or email for urgent construction,
          renovation, or project management enquiries.
        </p>

        <Link
          href={`mailto:${company.email}`}
          className="mt-10 inline-flex items-center gap-3 bg-[#8B1E00] px-7 py-4 font-bold text-white"
        >
          Send Email <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </main>
  );
}