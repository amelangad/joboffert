import Nav from './Nav'

export default async function Header() {
  return  <>
  <main className ="relative">
  <Nav/>
  <div className ="h-[50vh] lg:h-[100vh] w-full flex flex-col justify-center items-center p-0 gap-5">
    <h1 className ="text-3xl lg:text-7xl text-amber-400">Jobber</h1>
    <p className ="text-xl lg:text-5xl">Find your favourite job</p>
    </div>
  </main>
</>
}