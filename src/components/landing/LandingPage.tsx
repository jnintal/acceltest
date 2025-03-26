import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold tracking-wider">ACCEL</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Business banking for International Businesses
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A modern banking platform, powered by stablecoins and backed by U.S. Treasuries, to make global finance faster, seamless, and secure.
          </p>
          <div className="flex justify-center pt-6">
            <Button asChild className="bg-white text-black hover:bg-gray-100 rounded-md px-8 py-6 text-base">
              <Link href="/dashboard">Join waitlist</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-10 px-4 md:px-6 text-center">
        <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
          Accel is a financial technology company, not a bank. Banking services are provided through global bank partners. U.S. partners are FDIC members.
        </p>
      </footer>
    </div>
  );
}
