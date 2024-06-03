import { cn } from "@/lib/tailwind-utils"
import PropTypes from "prop-types"

export default function AuthLayout({ children, className }) {
  return (
    <main
      className={cn(
        className,
        "w-full lg:grid lg:min-h-[600px] overflow-hidden lg:grid-cols-2 ",
      )}>
      {children}
    </main>
  )
}

AuthLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
