import Link from "next/link";

import { siteConfig } from "@/app/site-config";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileDropdown } from "@/components/mobile-nav";
import { AnswerOverflowLogo } from "./answer-overflow-logo";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="items-center flex h-9">
          <Link
            href="/"
            className="items-center space-x-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring ring-offset-background flex h-9"
          >
            <Icons.chart className="h-6 w-6 stroke-red" />
            <span className="font-bold text-lg">typecharts</span>
          </Link>
          <Link
            href="https://www.answeroverflow.com/about"
            target="_blank"
            className="items-center space-x-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring ring-offset-background flex h-9"
          >
            <span className="font-bold text-base hidden md:block">
              &nbsp;by&nbsp;
            </span>
            <AnswerOverflowLogo width={120} className="hidden md:block " />
          </Link>
        </div>

        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <MobileDropdown
              items={{ main: siteConfig.mainNav, docs: siteConfig.sidebarNav }}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
