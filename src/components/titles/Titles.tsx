'use client';

export default function Titles({ title }: { title: string }) {
  return (
    <h1 className="text-4xl uppercase text-center font-extrabold mt-10 mb-20 px-6 py-3 rounded-xl bg-[var(--backgroundFooter)] text-[var(--yellow)] border border-[var(--yellow)] shadow-[0_0_10px_var(--yellow)] w-fit mx-auto">
      {title}
    </h1>
  );
}
