import Image from "next/image";
import note from "@/public/images/note.png";

export default function AmidarhNote() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="flex flex-col items-center justify-center w-full">
        <Image
          src={note}
          alt="Amidarh Note"
          className="w-full h-full object-cover max-w-[1300px] rounded-2xl shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}
