// import { MainImage } from "@/app/components/MainImage"
// import { Projects } from "@/app/components/Projects"
// import { Title } from "@/app/components/Title"


export default function Cartlayout ({ children }: {
    children: React.ReactNode
})  {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col">
      {/* <Title /> */}
      {/* <MainImage/> */}
      <div>
        
      </div>
      </div>
         
         
        <div className="px-0 sm:px-0">
            {children}
        </div>

       
     
    </main>
  )
}
