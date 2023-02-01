import Link from "next/link"
import Button from "../components/atoms/Button"
import Header from "../components/molecules/Header"

export default function IndexPage() {
  return (
    <div className="font-averta h-screen flex flex-col">
      <Header />
      <main className="grow bg-black flex justify-center items-center">
        <div className="max-w-3xl mb-32 lg:p-0 p-1 flex flex-col justify-center items-center gap-6">
          <p className="text-whyte text-center font-black text-4xl lg:text-6xl">Australia's first multi-site sporting odds API.</p>
          <div className="w-3/5 my-4 bg-gradient-to-r from-[#68E3F9] via-[#F55A9B] to-[#6F6FDD] h-px"></div>
          <p className="text-whyte text-center font-light">The OddsChaser API allows you to easily retrieve odds for sporting events in near real-time from 12 Australian bookies (and increasing!)</p>
          <div className="flex gap-x-4">
            <Link href="/docs/overview">
              <Button size="large">Read the docs</Button>
            </Link>
          </div>
        </div>
      </main >
    </div >
  )
}
