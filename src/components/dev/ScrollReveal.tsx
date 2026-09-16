"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type RevealVariant =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-in"
  | "clip-reveal"
  | "clip-circle";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const variantMap: Record<RevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease },
    },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease },
    },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease },
    },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease },
    },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.7, ease },
    },
  },
  "clip-reveal": {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  },
  "clip-circle": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease },
    },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Flexible stagger container with custom params
export function createStagger(stagger = 0.08, delay = 0.05): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };
}

interface ScrollRevealProps {
  variant?: RevealVariant;
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "a" | "span" | "h2" | "p";
  delay?: number;
  /** Viewport margin for triggering */
  margin?: string;
  /** Whether to animate only once */
  once?: boolean;
  /** Use as stagger parent */
  stagger?: boolean;
  staggerDelay?: number;
  style?: React.CSSProperties;
  id?: string;
  [key: string]: unknown;
}

export function ScrollReveal({
  variant = "fade-up",
  children,
  className,
  as = "div",
  delay = 0,
  margin = "-20px",
  once = true,
  stagger = false,
  staggerDelay = 0.08,
  style,
  id,
  ...rest
}: ScrollRevealProps) {
  const Component = motion[as] as React.ComponentType<any>;

  const itemVariants = variantMap[variant];
  const delayedVariants: Variants = delay
    ? {
        ...itemVariants,
        visible: {
          ...(itemVariants.visible as object),
          transition: {
            ...((itemVariants.visible as any)?.transition || {}),
            delay,
          },
        },
      }
    : itemVariants;

  const containerVariants = stagger
    ? createStagger(staggerDelay)
    : delayedVariants;

  return (
    <Component
      id={id}
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** A child item for use inside a stagger parent */
interface ScrollRevealItemProps {
  variant?: RevealVariant;
  children: React.ReactNode;
  className?: string;
  as?: "div" | "a" | "span";
  style?: React.CSSProperties;
  [key: string]: unknown;
}

export function ScrollRevealItem({
  variant = "fade-up",
  children,
  className,
  as = "div",
  style,
  ...rest
}: ScrollRevealItemProps) {
  const Component = motion[as] as React.ComponentType<any>;

  return (
    <Component
      className={className}
      style={style}
      variants={variantMap[variant]}
      {...rest}
    >
      {children}
    </Component>
  );
}
