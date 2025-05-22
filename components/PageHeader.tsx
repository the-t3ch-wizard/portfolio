interface PageHeaderProps {
  title: string
  description: string
  icon?: string
}

export default function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="">
      <h1 className="text-5xl md:text-6xl font-medium flex items-center gap-2">
        {icon && <span className="text-4xl">{icon}</span>}
        {title}
      </h1>
      <p className="leading-5.5 mt-3 md:text-xl md:leading-7">{description}</p>
    </div>
  )
}
