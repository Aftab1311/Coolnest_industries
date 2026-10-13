import Image from "next/image";
import Link from "next/link";

export default function Logo({ footer = false }: { footer?: boolean }) {
  return <Link href="/" aria-label="Coolnest Industries home" className={`brand${footer ? " brand--footer" : ""}`}>
    <Image
      src="/images/mainlogo-optimized.webp"
      alt="Coolnest Industries"
      width={1668}
      height={943}
      loading={footer ? "lazy" : "eager"}
      fetchPriority={footer ? "auto" : "high"}
      sizes={footer ? "(max-width: 900px) 205px, 235px" : "(max-width: 900px) 165px, 205px"}
    />
  </Link>;
}
