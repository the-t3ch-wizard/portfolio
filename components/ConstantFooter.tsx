
const ConstantFooter = ({ className } : {
  className?: string;
}) => {
  return (
    <div className={`w-full flex justify-center text-primary/40 pt-7 ${className}`}>
      <p className="text-sm">
        &copy; 2025 Ayush Kumar Maurya
      </p>
    </div>
  )
}

export default ConstantFooter
