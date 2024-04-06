"use client";
import { useRouter } from "next/navigation";

import Benefits from "./home/components/Benefits";
import Collection from "./home/components/Colection";
import Header from "./components/layout/Header";
import SectionHow from "./home/components/HowItWorks";
import Button from "./components/UI/Button";

export default function Home() {
  const router = useRouter();

  const nawigateSubscribePage = () => {
    router.push("/subscribe");
  };

  return (
    <main>
      <Header
        font="big"
        bgClass="bg-[url('../public/assets/home/mobile/image-hero-coffeepress.jpg')] md:bg-[url('../public/assets/home/tablet/image-hero-coffeepress.jpg')] lg:bg-[url('../public/assets/home/desktop/image-hero-coffeepress.jpg')] lg:min-h-[550px] xl:min-h-[600px]"
        title="Great coffee made simple."
        desc="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
      >
        <Button
          type="button"
          className="mt-10 lg:mt-14"
          onClick={nawigateSubscribePage}
        >
          Create your plan
        </Button>
      </Header>
      <Collection />
      <Benefits />
      <SectionHow />
    </main>
  );
}
