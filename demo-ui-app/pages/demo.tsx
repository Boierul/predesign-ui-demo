import React from 'react';
import Link from "next/link";
import {siteConfig} from "@/config/site";
import {buttonVariants} from "@/components/ui/button";

function Demo(props) {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({size: "lg"})}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({variant: "outline", size: "lg"})}
          >
            GitHub
          </Link>
    </section>
  );
}

export default Demo;
