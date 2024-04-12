"use client";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../hooks/hooks";

import Header from "../components/layout/Header";
import HowItWorks from "./components/HowItWorks";
import Modal from "./components/Modal";
import Questions from "./components/questions/Questions";

const Subscribe = () => {
  const isModalShown = useAppSelector(
    (state) => state.subscription.isModalShown,
  );

  useEffect(() => {
    isModalShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isModalShown]);

  return (
    <main className="overflow-hidden">
      <Header
        font="big"
        title="Create a plan"
        desc="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
        bgClass="bg-[url('../public/assets/plan/mobile/image-hero-blackcup.jpg')] md:bg-[url('../public/assets/plan/tablet/image-hero-blackcup.jpg')] lg:bg-[url('../public/assets/plan/desktop/image-hero-blackcup.jpg')]"
      />
      <HowItWorks />
      <Questions />
      <AnimatePresence>{isModalShown && <Modal />}</AnimatePresence>
    </main>
  );
};

export default Subscribe;
