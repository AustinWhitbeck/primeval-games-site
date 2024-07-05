import { ReactNode } from "react"

const ContentWrapper = ({ children }: { children: ReactNode}) => {
  return (
    <div className="flex-1">
      <div className="max-w-screen-lg bg-green-100">
        {children}
      </div>
    </div>
  )
}

export default ContentWrapper