import React from "react";
import { Section } from "../section/section";
import Link from "next/link";
import { Github } from "lucide-react";
import { siteConfig } from "../../../lib/site-config";

export const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <Section className="py-0">
        <nav className="grid grid-cols-1 lg:grid-cols-12 text-gray-700 gap-[60px]">
          <div className="lg:col-span-6 text-center md:text-left">
            <h1 className="text-2xl">logo</h1>
            <p className="text-gray-500 mt-4 font-normal">
              You need not worry about designing email templates anymore, you
              can focus on core fetures of your applications. Pick from our
              collection of stunning email templates and get started.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:col-span-6 lg:justify-items-end gap-8">
            <ul className="col-span-2 md:col-span-1 place-items-center md:place-items-start space-y-2.5">
              <li className="text-gray-900">Resources</li>
              <li>
                <Link
                  href={siteConfig.baseLinks.blog}
                  className="text-gray-500 font-normal"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.baseLinks.templates}
                  className="text-gray-500 font-normal"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.baseLinks.collections}
                  className="text-gray-500 font-normal"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.baseLinks.changelog}
                  className="text-gray-500 font-normal"
                >
                  Changelog
                </Link>
              </li>
            </ul>
            <ul className="col-span-2 md:col-span-1 place-items-center md:place-items-start space-y-2.5">
              <li className="text-gray-900">Legal</li>
              <li>
                <Link href="#" className="text-gray-500 font-normal">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 font-normal">
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Section>
      <hr className="my-6 border-t border-gray-50 h-px" />
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-700 text-sm gap-4 text-center md:text-left">
          <div className="col-span-1 text-gray-700">
            <span> © </span>
            <span> {new Date().getFullYear()} </span>
            <span>Made with</span>
            <span className="px-1">❤️</span>
            <span> by </span>
            <span className="cursor-pointer text-gray-900">
              <Link
                aria-label="Logo"
                className="font-bold"
                href="https://github.com/oluwatunmiisheii"
                target="_blank"
              >
                Wilson Adenuga {""}
              </Link>
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-end col-span-1 gap-4">
            <div className="flex items-center gap-1">
              <Github size={20} />
              Github
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                className="inline-block size-5 fill-current"
              >
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
              Twitter
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};
