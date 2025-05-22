import ContactForm from '@/components/ContactForm'
import ContactMethods from '@/components/ContactMethods'
import PageHeader from '@/components/PageHeader'

const ContactPage = () => {
  return (
    <main className="w-full flex flex-col px-4 py-5 md:pt-20 md:pb-6 md:px-40">

      <PageHeader
        title="Get in touch"
        description="I'm always open to exploring new collaborations and exciting opportunities. Whether it's a project idea, a job opportunity, or simply a chance to connect, feel free to reach out!"
      />

      <div className="w-full px-1 flex flex-col gap-10 md:flex-row md:justify-between md:items-end mt-6">
        <div className="w-full md:w-[45%]">
          <ContactForm />
        </div>
        <div className="w-full md:w-[30%]">
          <ContactMethods />
        </div>
      </div>
    </main>
  )
}

export default ContactPage
