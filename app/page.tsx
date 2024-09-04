import Counters_Section from "@/app/counters-section/counters-section";
import Hero from "./Hero/page";
import Work from "./Work/page";
import CityRestaurants from "./city-restaurants/page";
import Your_Yavorite_Food from "./your-favorite-food/page";

import Join_Bartnership from "./join-partnership/page";
import Container from "./container/page";
import Subscribe_Section from "./subscribe-section/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <CityRestaurants />
      <Your_Yavorite_Food />
      <Counters_Section />

      <Join_Bartnership />
      <Container />
      <Subscribe_Section />
      <Footer />
    </>
  );
}
