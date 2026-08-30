import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutSchool } from "@/components/about-school";
import { Coaches } from "@/components/coaches";
import { Directions } from "@/components/directions";
import { Schedule } from "@/components/schedule";
import { Instagram } from "@/components/instagram";
import { Footer } from "@/components/footer";
import styles from "./home-page.module.css";

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <AboutSchool />
      <Coaches />
      <Directions />
      <Schedule />
      <Instagram />
      <Footer />
    </div>
  );
};
