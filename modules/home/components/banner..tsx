import Link from "next/link"

export default function Banner({ text, product }: { text: string, product: string }) {
  return (
    <div className="relative w-full overflow-hidden my-8 flex justify-center items-center px-4 lg:px-10">
      {/* Angled background */}
      <div className="bg-blue-600 transform -skew-y-2 inset-0 scale-110 w-full max-w-7xl rounded-3xl">
        {/* Content */}
        <div className="relative z-10 py-16 px-4 flex flex-col items-center text-center text-white max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unleash the power of{" "}
            <span className="relative inline-block">
                {text}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
            </span>
            </h1>

            <p className="text-lg md:text-xl mb-8">Join millions using {product}</p>

            <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
            Get started for free
            </Link>
        </div>
      </div>

    </div>
  )
}

