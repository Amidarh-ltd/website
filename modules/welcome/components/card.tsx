"use client";

import { Card } from "@/components/ui/card";

export const WelcomeCard = ({
  description,
  title,
  Icon,
}: {
  description: string;
  title: string;
  Icon: React.ElementType;
}) => {
  return (
    <div className="mt-6">
      <Card className="p-6 border-gray-200 w-full max-w-[400px] cursor-pointer transition-transform duration-200 hover:animate-shake hover:scale-105  bg-white-600 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 no-underline">
        <Icon size={30} className="text-gray-500" />
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </Card>
      <style jsx global>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-5px);
          }
          40% {
            transform: translateX(5px);
          }
          60% {
            transform: translateX(-5px);
          }
          80% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .hover\\:animate-shake:hover {
          animation: shake 0.4s;
        }
      `}</style>
    </div>
  );
};
