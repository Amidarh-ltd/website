import Image from "next/image";
import note from "@/public/images/flow.png";

export default function AmidarhNote() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="flex flex-col items-center justify-center w-full">
        <Image
          src={note}
          alt="Amidarh Flow"
          className="w-full h-full object-cover max-w-[1300px] rounded-2xl shadow-lg mx-auto z-10"
        />
      </div>
    </div>
  );
}
