import Image from "next/image";

export default function PageBanner({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-8 bg-[#1a1b3a]">
      <div className="relative h-44 sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="1200px"
          priority
        />
        <div className="absolute inset-0 bg-[#1a1b3a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b3a]/80 via-[#1a1b3a]/40 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center px-8 sm:px-10">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
            {title}
          </h1>
          {subtitle && (
            <p className="font-ui text-[14px] sm:text-[15px] text-white/70 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
