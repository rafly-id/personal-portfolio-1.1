"use client";

import React, { forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useTransition } from "./TransitionProvider";

export interface TransitionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>,
    NextLinkProps {
  children?: React.ReactNode;
}

export const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, onClick, children, ...props }, ref) => {
    const { navigate } = useTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e);
      }

      if (e.defaultPrevented) return;

      const hrefStr = href.toString();

      // Check for external links or target="_blank"
      const isExternal = hrefStr.startsWith("http") || hrefStr.startsWith("//");
      if (isExternal || props.target === "_blank") {
        return;
      }

      e.preventDefault();
      navigate(hrefStr);
    };

    return (
      <NextLink ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </NextLink>
    );
  }
);

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;
