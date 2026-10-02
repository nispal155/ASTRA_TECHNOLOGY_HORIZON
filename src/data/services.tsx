import React from "react";
import { Code, Megaphone, LineChart, Cloud, Search, Smartphone, type LucideIcon } from "lucide-react";
import services from "@content/services.json";

const icons: Record<string, LucideIcon> = { Code, Megaphone, LineChart, Cloud, Search, Smartphone };

export type Service = Omit<(typeof services)[number], "icon"> & { icon: React.ReactNode };

/** Services are edited in content/services.json; `icon` names a lucide-react icon. */
export const servicesData: Service[] = services.map((s) => {
  const Icon = icons[s.icon] ?? Code;
  return { ...s, icon: <Icon className="w-5 h-5 text-brand-accent" aria-hidden="true" /> };
});
