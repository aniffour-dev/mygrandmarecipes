import HeroSection from "@/app/components/Static/HeroSection"
import Block2 from "@/app/components/Dynamic/Home/Block2"
import Newsletter from "@/app/components/Static/Home/Newsletter"
import Block3 from "@/app/components/Dynamic/Home/Block3"
import Block4 from "@/app/components/Dynamic/Home/Block4"
// import Block5 from "@/app/components/Dynamic/Home/Block5"
// import Slider from "./components/Static/Home/Slider"
import About from "./components/Dynamic/Home/About"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Block2 />
      <About />
      <Block3 />
      <Newsletter />
      {/* <Slider /> */}
      <Block4 />
      {/* <Block5 /> */}
    </>
  );
}
