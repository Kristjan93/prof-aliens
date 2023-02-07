export const TailwindScreenDebug = () => (
  <div className="fixed bottom-0 left-0 flex gap-6 bg-[#222] px-4 py-1 text-[#fff]">
    <div className="sm:hidden">xs</div>
    <div className="hidden sm:block md:hidden">sm</div>
    <div className="hidden md:block lg:hidden">md</div>
    <div className="hidden lg:block xl:hidden">lg</div>
    <div className="hidden xl:block 2xl:hidden">xl</div>
    <div className="hidden 2xl:block">2xl</div>
  </div>
)

export default TailwindScreenDebug
