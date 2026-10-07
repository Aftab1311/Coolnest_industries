export default function SectionLabel({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return <div className={`section-label${centered ? " section-label--centered" : ""}`}>{children}<span aria-hidden="true" /></div>;
}
