import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div data-reveal className="w-full">
      <div className="catalog-meta mb-8 w-full">
        <span>{eyebrow}</span>
        <span>Portfolio Index</span>
      </div>
      <div
        className={cn(
          "max-w-5xl",
          align === "center" && "mx-auto text-center",
        )}
      >
        <h2 className="text-balance text-4xl font-medium leading-none text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        <p className="body-copy mt-6 max-w-3xl">{description}</p>
      </div>
    </div>
  );
}
