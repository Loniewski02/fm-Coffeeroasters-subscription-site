import Wrapper from "../../components/layout/Wrapper";
import CoollectionItem from "./CollectionItem";

import espressoPng from "../../../public/assets/home/general/image-gran-espresso.png";
import planaltoPng from "../../../public/assets/home/general/image-planalto.png";
import piccolloPng from "../../../public/assets/home/general/image-piccollo.png";
import danchePng from "../../../public/assets/home/general/image-danche.png";

const COLLECTION_DATA = [
  {
    id: "c1",
    image: espressoPng.src,
    name: "Gran Espresso",
    desc: "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    id: "c2",
    image: planaltoPng.src,
    name: "Planalto",
    desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    id: "c3",
    image: piccolloPng.src,
    name: "Piccollo",
    desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
  },
  {
    id: "c4",
    image: danchePng.src,
    name: "Danche",
    desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

const Collection = () => {
  return (
    <section className="sectionY sectionX">
      <h2 className="text-gradient lg:text- mb-6 text-center text-[40px] md:-mb-13 md:text-[90px] lg:-mb-18 lg:text-[124px] xl:-mb-24 xl:text-[154px]">
        our collection
      </h2>
      <Wrapper className="md:section-inner-x">
        <div className="flex flex-col gap-12 md:items-center md:gap-8 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-7">
          {COLLECTION_DATA.map((item) => (
            <CoollectionItem
              key={item.id}
              img={item.image}
              name={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Collection;
