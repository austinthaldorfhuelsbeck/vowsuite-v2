import { PropsWithChildren } from "react"

const AuthLayout = (props: PropsWithChildren) => {
  return (
    <div className="h-full flex items-center justify-center">{props.children}</div>
  )
}

export default AuthLayout