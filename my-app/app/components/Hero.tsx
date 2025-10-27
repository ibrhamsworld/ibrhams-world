import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-gray-900 dark:to-black w-full py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Transforming Spaces with <span className="text-blue-600">Color & Style</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          At Ibrhams World, we bring your dream space to life — from painting, decorating to paint production, all done professionally.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Get a Free Quote
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <Image
          src="/p.jpg"
          alt="Painting illustration"
          width={450}
          height={450}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
