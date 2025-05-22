import ConstantFooter from '@/components/ConstantFooter'

const ContactPageLayout = ({ children } : {
  children: React.ReactElement
}) => {
  return (
    <div className="pt-[5.5rem]">
      {children}

      <ConstantFooter className="mb-6" />
    </div>
  )
}

export default ContactPageLayout
