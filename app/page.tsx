import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Script from "next/script";
import { Comp_Route } from "@/app/dashboard/hmm";
// import { Main } from "@/app/dashboard/main-component"
import { Main } from "@/app/dashboard/main-component"
import { Footer } from "@/app/ui";
import { Nav } from "@/app/ui";


export default function Page() {

  return (
    <>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  )
}
