import Commitment from "./components/Commitment";
import ContactInfo from "./components/ContactInfo";
import Header from "../components/layout/Header";
import Quality from "./components/Quality";

const About = () => {
  return (
    <main className="overflow-hidden">
      <Header
        font="small"
        bgClass="bg-[url('../public/assets/about/mobile/image-hero-whitecup.jpg')] md:bg-[url('../public/assets/about/tablet/image-hero-whitecup.jpg')] lg:bg-[url('../public/assets/about/desktop/image-hero-whitecup.jpg')]"
        title="About Us"
        desc="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      />
      <Commitment />
      <Quality />
      <ContactInfo />
    </main>
  );
};

export default About;
