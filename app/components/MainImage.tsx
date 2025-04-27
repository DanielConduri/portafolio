import Image from "next/image"
import { Title } from "./Title"
export const MainImage = () => {
  return (
    <div className="relative w-full max-h-svh overflow-hidden">

      <div className="absolute inset-0 bg-black/1 backdrop-blur-sm z-10" />
      {/* <div className="fixed top-0 left-0 w-full h-[500px] z-10  bg-slate-800 opacity-20" />

      <div className="fade-in fixed top-0 left-0 w-full h-[500px] z-10 backdrop-filter backdrop-blur-sm"></div>
 */}

      <Image
        //className="dark:invert"
        src="/imgs/setupg.jpg"
        alt="Next.js logo"
        width={1980}
        height={1080}
      
        priority
        className="w-full h-auto object-contain opacity-70 rounded rounded-sm"
        quality={100}
        sizes="100vw"

      />

      {/* <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Título Sobre la Imagen</h1>
      </div> */}


      <div className="absolute inset-0 flex items-center justify-center z-20">
      <Title />
      </div>
     


    </div>
  )
}
