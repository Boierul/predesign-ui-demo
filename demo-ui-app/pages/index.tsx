import Head from "next/head"
import Link from "next/link"
import React from "react"

import {siteConfig} from "@/config/site"
import {Layout} from "@/components/layout"
import {Button, buttonVariants} from "@/components/ui/button"
import {useToast} from "@/hooks/use-toast"

import {DropdownMenuCheckboxItemProps} from "@radix-ui/react-dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function IndexPage() {
  const {toast} = useToast()

  // Dropdown menu state
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <Layout>
      <Head>
        <title>Demo | Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-6">

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl transition-all hover:text-violet-300 group transition-all duration-1000">
            Beautifully designed components <br className="hidden sm:inline"/>
            built with Radix UI and Tailwind CSS.
          </h1>

          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>

        </div>
        <div className="flex gap-12">
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
        </div>

        {/*<div className="flex gap-4">*/}
        {/*  <Link target="_blank"*/}
        {/*        rel="noreferrer"*/}
        {/*        className={buttonVariants({ size: "sm" })} href="">*/}
        {/*    Button*/}
        {/*  </Link>*/}
        {/*</div>*/}

        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
              })
            }}
          >
            Show Toast
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="flex gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex gap-4 justify-center flex-col p-7">
                      <NavigationMenuLink>Introduction</NavigationMenuLink>
                      <NavigationMenuLink>Courses</NavigationMenuLink>
                      <NavigationMenuLink>Browse Projects</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </section>
    </Layout>
  )
}
