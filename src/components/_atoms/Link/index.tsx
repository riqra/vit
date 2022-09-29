import { AnchorHTMLAttributes } from "react";

const Link = ({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (!props.href) {
    return (<>{children}</>)
  }

  return (
    <a {...props}>
      {children}
    </a>
  )
}

export default Link;
