import Image from "next/image";
import { cn } from "@/lib/utils";

interface StakeholderProps {
  label: string;
  position: "top" | "right" | "bottom" | "left";
  featureLabel: string;
  featureSide: "left" | "right";
}

const Stakeholder = ({
  label,
  position,
  featureLabel,
  featureSide,
}: StakeholderProps) => {
  // Placeholder images for each stakeholder
  const imageSrc = `/placeholder.svg?height=120&width=120`;

  // Position classes
  const positionClasses = {
    top: "absolute -top-16 left-1/2 -translate-x-1/2",
    right: "absolute top-1/2 -right-16 -translate-y-1/2",
    bottom: "absolute -bottom-16 left-1/2 -translate-x-1/2",
    left: "absolute top-1/2 -left-16 -translate-y-1/2",
  };

  // Feature label position
  const featurePositionClasses = {
    top: {
      left: "absolute -top-8 -left-24",
      right: "absolute -top-8 -right-24",
    },
    right: {
      left: "absolute top-8 right-0",
      right: "absolute -top-8 right-0",
    },
    bottom: {
      left: "absolute bottom-8 -left-24",
      right: "absolute bottom-8 -right-24",
    },
    left: {
      left: "absolute -top-8 left-0",
      right: "absolute top-8 left-0",
    },
  };

  return (
    <div
      className={cn(
        "w-24 h-24 rounded-md overflow-hidden relative",
        positionClasses[position],
      )}
    >
      <div className="absolute inset-0 bg-teal-800 rounded-md overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-1 px-2 text-white text-xs text-center">
          {label}
        </div>
      </div>
      <div
        className={cn(
          "bg-lime-300 text-emerald-900 text-xs font-medium py-1 px-3 rounded-full",
          featurePositionClasses[position][featureSide],
        )}
      >
        {featureLabel}
      </div>
    </div>
  );
};

export default function UnifiedSolution() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-52 bg-white flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Hexagonal Diagram */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Connecting Lines - using pseudo-elements in CSS */}
              <div
                className="absolute inset-0 before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-1/2 before:bg-teal-700
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-1/2 after:bg-teal-700"
              ></div>
              <div
                className="absolute inset-0 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-1/2 before:bg-teal-700
                after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-2 after:w-1/2 after:bg-teal-700"
              ></div>

              {/* Center Logo */}
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>

              {/* Stakeholders */}
              <Stakeholder
                label="Educators"
                position="top"
                featureLabel="Development"
                featureSide="left"
              />
              <Stakeholder
                label="Students"
                position="right"
                featureLabel="Attendance"
                featureSide="right"
              />
              <Stakeholder
                label="Families"
                position="bottom"
                featureLabel="Engagement"
                featureSide="right"
              />
              <Stakeholder
                label="Superintendent"
                position="left"
                featureLabel="Analytics"
                featureSide="left"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              One Unified Platform
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-md">
              With our integrated communication, attendance, and educator
              success tools, your learning community will stay engaged,
              informed, and connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
