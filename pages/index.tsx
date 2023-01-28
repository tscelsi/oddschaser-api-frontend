import Header from "../components/Header"

export default function IndexPage() {
  return (
    <div className="font-averta h-screen flex flex-col">
      <Header />
      <main className="grow bg-black">
        <div className="lg:ml-32 md:ml-24 ml-20 mt-32 flex flex-col gap-6">
          <p className="text-whyte font-black text-4xl">Australia's first aggregated sports betting API.</p>
          <p className="text-whyte w-1/2">The OddsChaser API allows you to easily retrieve sports odds in near real-time from 12 Australian bookies (and increasing!)</p>
        </div>
      </main>
    </div>
  )
}
