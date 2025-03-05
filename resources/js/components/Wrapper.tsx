import clsx from 'clsx'
import React, { HtmlHTMLAttributes, PropsWithChildren } from 'react'
interface WrapperProps extends HtmlHTMLAttributes<HTMLDivElement>{}
export const Wrapper = ({children,className,...rest} : PropsWithChildren<WrapperProps>) => {
  return (
    <section className={clsx("relative mx-auto mt-16 min-h-[calc(100vh_-_128px)] w-full flex-col gap-8 p-4 text-foreground sm:gap-12",className,)}
    {...rest}>{children}</section>
  )
}
