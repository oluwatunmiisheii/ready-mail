import React from "react";
import type { Collection } from "@ready-mail/types";
import { VscSparkleFilled } from "react-icons/vsc";
import Link from "next/link";

const templates = [
  "Welcome Email",
  "Password Reset",
  "Magic Link",
  "Email Verification",
  "Invide User",
  "Login",
  "Forgot Password",
  "Password Changed",
];

export const Collections = ({ collections }: { collections: Collection[] }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {collections.map((collection) => (
        <Link
          href="/"
          className="relative p-4 rounded-lg bg-primary-50 min-h-[350px] border border-primary-200 w-full"
          key={collection.slug}
        >
          <h3 className="text-lg font-bold text-neutral-900">
            {collection.name}
          </h3>
          <div className="bg-neutral-400 h-[80%] bottom-0 absolute w-[80%] right-4 rounded-t-lg z-20 overflow-hidden">
            <div className="m-4 rounded-t-lg mb-0 h-full">
              <div className="bg-white w-full h-full p-2">
                <p className="text-sm text-neutral-800 border-b pb-2">
                  {collection.shortDescription}
                </p>
                <ul className="mt-4 space-y-2 text-neutral-800 text-sm">
                  {templates.slice(0, 5).map((template) => (
                    <li
                      key={template}
                      className="flex items-center space-x-1.5"
                    >
                      <VscSparkleFilled size={18} />
                      <span>{template}</span>
                    </li>
                  ))}
                  {templates.length > 5 && (
                    <li>+{templates.length - 5} more templates</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-neutral-600 h-[80%] bottom-0 absolute w-20 right-0 rounded-b-lg -z-[1px]" />
        </Link>
      ))}
    </div>
  );
};
