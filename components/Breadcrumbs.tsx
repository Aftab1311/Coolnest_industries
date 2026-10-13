import Link from "next/link";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

export type BreadcrumbItem = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <>
    <BreadcrumbStructuredData items={items} />
    <nav className="breadcrumbs page-container" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.path}>
            {index < items.length - 1
              ? <Link href={item.path}>{item.name}</Link>
              : <span aria-current="page">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  </>;
}
