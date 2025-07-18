import { motion } from "framer-motion"

export default function Stats() {
  const stats = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      value: "1K+",
      label: "Users",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      value: "10+",
      label: "Schools and institutions",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12L20 12M20 12L14 6M20 12L14 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      value: "3",
      label: "Products",
    },
  ]

  return (
    <section className="py-5 text-white md:py-6 border bg-primary">
      <div className="container px-4 mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Our Stats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              {/* <div className="text-[#E2FF6F] mb-4">{stat.icon}</div> */}
              <div className="text-5xl font-bold mb-2 text-primary-main">{stat.value}</div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

