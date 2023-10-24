"use client";
import Image from "next/image";

import { GITHUB_URL } from "@/lib/config/CONSTANTS";
import { useSupabase } from "@/lib/context/SupabaseProvider";

const Footer = (): JSX.Element => {
  const { session } = useSupabase();

  if (session?.user !== undefined) {
    return <div />;
  }

  return (
    <footer className="bg-white dark:bg-black border-t dark:border-white/10 mt-auto py-4">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Hecho con ♥ por B0rrA
          <a href="https://github.com/michael-m-hunt"></a>
        </p>
        <div className="border-l border-gray-300 dark:border-gray-600 h-8 w-1" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Con tecnología de Quivr
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quivr GitHub"
        >
          <Image
            className="h-8 w-auto dark:invert"
            src="/github.svg"
            alt="GitHub"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
