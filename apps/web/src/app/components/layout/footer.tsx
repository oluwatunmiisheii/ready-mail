import React from "react";
import { Section } from "../section/section";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary-900 py-12">
      <Section className="!py-0">
        <nav className="flex justify-between items-center text-neutral-400 text-sm">
          <h1>logo</h1>
          <ul className="flex space-x-8">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of Use</Link>
            </li>
          </ul>
        </nav>
      </Section>
      <hr className="my-6 border-t border-neutral-800 h-px" />
      <Section className="!py-0">
        <div className="text-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Ready Mail. All rights
          </p>
        </div>
      </Section>
    </footer>
  );
};
