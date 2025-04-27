import Image from "next/image";


import { Title } from "../components/Title";
import { MainImage } from "../components/MainImage";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">

     
      <section className="">
        <div>
        <MainImage />
          <div className="absolute -bottom-15 left-0 w-full h-96 bg-gradient-to-b from-indigo-900/35 to-transparent z-10" />
        </div>
      </section>

      <section className="flex justify-center z-20">
        <Projects />

      </section>

     
    </div>
  );
}
