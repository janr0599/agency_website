import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
  delay?: number
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  delay = 0,
  ...props
}: BentoCardProps) => (
  <FadeIn delay={delay} className={className}>
    <div
      key={name}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl",
        "border border-border bg-card transition-colors duration-300",
        className
      )}
      {...props}
    >
      <div>{background}</div>
      <div className="p-4">
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300">
          <Icon className="h-12 w-12 origin-left transform-gpu text-primary ease-in-out" />
          <h3 className="text-base lg:text-xl font-semibold text-primary dark:text-neutral-300">
            {name}
          </h3>
          <p className="max-w-lg text-muted-foreground text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  </FadeIn>
)

export { BentoCard, BentoGrid }
