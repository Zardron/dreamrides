export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.32em] text-gold-200">{title}</p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {description}
      </p>
    </div>
  );
}
