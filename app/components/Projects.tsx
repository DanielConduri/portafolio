import Image from "next/image"

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 max-w-5xl gap-5">
      {/* <div className="flex justify-center items-center">
        <Image
          src="/projects/screen-tecnodaniel.png"
          alt="tecnodaniel"
          width={1980}
          height={1080}
          quality={100}
          priority
          className="w-full h-auto object-contain rounded-xl"
          sizes="100vw"
        />
      </div> */}

      <div className="m-2 justify-center items-center">
      <Image
          //className="dark:invert"
          src="/projects/inventario-espoch.png"
          alt="Next.js logo"
          // width={1980}
          // height={1080}
          width={1980}
          height={1080}
          quality={100}
          priority
          className="w-full h-auto object-contain rounded-xl"
          sizes="100vw"

        />
     
       
      </div>

      <div className="flex justify-center items-center m-2">
        <Image
          src="/projects/tecnodaniel-ec.png"
          alt="tecnodaniel"
          width={1980}
          height={1080}
          //fill
          quality={100}
          priority
          className="w-full h-auto object-contain rounded-xl"
          sizes="100vw"
        />
      </div>
      
      
      <div className="">

      </div>



    </div>
  )
}
