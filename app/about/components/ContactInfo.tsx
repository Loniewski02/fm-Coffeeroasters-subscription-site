import Wrapper from "@/app/components/layout/Wrapper"
import Canada from '@/public/assets/about/general/illustration-canada.svg'
import Uk from '@/public/assets/about/general/illustration-uk.svg'
import Australia from '@/public/assets/about/general/illustration-australia.svg'
import ContactInfoItem from "./ContactInfoItem"

const DUMMY_DATA=[
    {country: 'United Kingdom', icon:<Uk/>, data:['68  Asfordby Rd','Alcaston','SY6 1YA','+44 1241 918425']},
    {country: 'Canada', icon:<Canada/>, data:['1528  Eglinton Avenue','Toronto','Ontario M4P 1A6','+1 416 485 2997']},
    {country: 'Australia', icon:<Australia/>, data:['36 Swanston Street','Kewell','Victoria','+61 4 9928 3629']},
]

const ContactInfo = () => {
    return <section className="sectionX sectionY">
        <Wrapper className="lg:section-inner-x">
            <h2 className="text-2xl text-Grey mb-18 text-center md:text-left">Our headquarters</h2>
            <div className="flex flex-col gap-6 items-center md:flex-row md:gap-7 lg:gap-12 xl:gap-24">
                {DUMMY_DATA.map(item=><ContactInfoItem key={item.country} country={item.country} data={item.data}>{item.icon}</ContactInfoItem>)}
            </div>
        </Wrapper>
    </section>
}

export default ContactInfo