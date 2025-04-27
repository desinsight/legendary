import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Legendary
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Discover, Collect, and Trade Unique Digital Assets
          </p>
          <div className="flex gap-4">
            <Link 
              href="/collection"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-colors"
            >
              Explore Collection
            </Link>
            <Link 
              href="/auction"
              className="px-8 py-3 border border-purple-600 hover:bg-purple-600/20 rounded-full font-semibold transition-colors"
            >
              View Auctions
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Discover</h3>
            <p className="text-gray-400">Explore unique digital assets from talented creators around the world.</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Collect</h3>
            <p className="text-gray-400">Build your collection of rare and valuable digital items.</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Trade</h3>
            <p className="text-gray-400">Buy, sell, and trade your digital assets in our secure marketplace.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 Legendary. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
