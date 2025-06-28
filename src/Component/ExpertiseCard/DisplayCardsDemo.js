import DisplayCards from "./DisplayCards";

export function DisplayCardsDemo() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-4 py-20 flex flex-col items-center justify-start space-y-12 overflow-x-hidden">
      <div className="text-center w-full">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
          My Expertise
        </h1>
      </div>

      <div className="w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <DisplayCards />
      </div>
    </div>
  );
}
