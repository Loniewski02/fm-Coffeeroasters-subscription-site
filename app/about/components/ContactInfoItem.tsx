type Props ={
    country:string
    data:string[]
    children:React.ReactNode
}

const ContactInfoItem:React.FC<Props> = ({country, data, children}) => {
    return <div className="flex flex-col items-center md:items-start gap-6 text-DarkGreyBlue min-w-max w-full max-w-[285px] ">
        {children}
        <h3 className="mt-6 text-xxl lg:text-[32px] text-center md:text-left">{country}</h3>
        <ul className="text-center md:text-left text-lm lg:text-base">{data.map(item=><li key={item} className="text-lm">{item}</li>)}</ul> 
    </div>
}

export default ContactInfoItem