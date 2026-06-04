import Image from "next/image";
import { cn } from "@/lib/utils";

type MarketingImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  fit?: "cover" | "contain";
};

export function MarketingImage({
  src,
  alt,
  priority = false,
  className,
  containerClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fit = "cover",
}: MarketingImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted",
        containerClassName,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          fit === "contain" ? "object-contain object-center p-4" : "object-cover",
          className,
        )}
      />
    </div>
  );
}
