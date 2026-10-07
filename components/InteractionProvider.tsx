"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { products } from "@/lib/products";
import "./dialogs.css";

type Action = "quote" | "contact" | "product";
type OpenProduct = (productId: string) => void;

const ProductContext = createContext<OpenProduct | null>(null);

export function ActionButton({
  action,
  productId,
  className,
  children,
}: {
  action: Action;
  productId?: string;
  className?: string;
  children: ReactNode;
}) {
  const openProduct = useContext(ProductContext);

  if (action !== "product") {
    const query = productId ? `?product=${encodeURIComponent(productId)}` : "";
    return <Link className={className} href={`/contact${query}#quote-form`}>{children}</Link>;
  }

  if (!openProduct || !productId) {
    throw new Error("Product details require a product ID and InteractionProvider.");
  }

  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={() => openProduct(productId)}
    >
      {children}
    </button>
  );
}

export function InteractionProvider({ children }: { children: ReactNode }) {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const product = products.find((item) => item.id === activeProductId);

  const openProduct: OpenProduct = (productId) => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    setActiveProductId(productId);
  };

  useEffect(() => {
    if (!product) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    dialog.querySelector<HTMLElement>("#dialog-title")?.focus({ preventScroll: true });

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus({ preventScroll: true });
    };
  }, [product]);

  return (
    <ProductContext.Provider value={openProduct}>
      {children}
      <dialog
        ref={dialogRef}
        className="dialog-panel dialog-panel--product"
        aria-labelledby="dialog-title"
        aria-describedby="detail-summary"
        onClose={() => setActiveProductId(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom
          ) {
            setActiveProductId(null);
          }
        }}
      >
        {product && (
          <>
            <button
              type="button"
              className="dialog-close"
              aria-label="Close product details"
              onClick={() => setActiveProductId(null)}
            >
              <X size={21} aria-hidden="true" />
            </button>
            <div className="detail-content">
              <div className="detail-image">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={700}
                  height={410}
                  sizes="(max-width: 640px) 90vw, 580px"
                />
              </div>
              <div className="detail-copy">
                <p className="dialog-eyebrow">OUR PRODUCTS</p>
                <h2 id="dialog-title" tabIndex={-1}>{product.name}</h2>
                <p id="detail-summary">{product.description}</p>
                <ul className="detail-features">
                  {product.details.map((detail) => (
                    <li key={detail}><Check size={16} aria-hidden="true" /><span>{detail}</span></li>
                  ))}
                </ul>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.id)}#quote-form`}
                  className="enquiry-submit"
                  onClick={() => setActiveProductId(null)}
                >
                  Request a Quote <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </>
        )}
      </dialog>
    </ProductContext.Provider>
  );
}
