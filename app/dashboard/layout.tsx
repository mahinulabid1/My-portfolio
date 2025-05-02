import { Nav as Navigation, Footer } from "@/app/ui";

 export default function Layout({children}:{children:React.ReactNode}) {

  return (
    <>
      <Navigation />
        {children}
      <Footer />
    </>
  )
 }
