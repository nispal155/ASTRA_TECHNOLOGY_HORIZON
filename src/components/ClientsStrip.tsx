import Image from "next/image";
import clientData from "@content/clients.json";

/** "Trusted by" strip — shows a logo when one is set in content/clients.json, otherwise the client name. */
export default function ClientsStrip() {
  const { clients } = clientData;
  if (!clients.length) return null;

  return (
    <ul aria-label="Selected clients" className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-12">
      {clients.map((c) => (
        <li key={c.name}>
          <a href={c.url} target="_blank" rel="noopener noreferrer" className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            {c.logo ? (
              <Image src={c.logo} alt={c.name} width={140} height={48} className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition" />
            ) : (
              <span className="text-lg font-bold tracking-tight text-brand-text-secondary hover:text-brand-accent">{c.name}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
