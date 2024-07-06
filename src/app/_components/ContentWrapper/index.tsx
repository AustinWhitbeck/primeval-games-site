import { ReactNode } from "react"

const ContentWrapper = ({ children }: { children: ReactNode}) => {
  return (
    <div className="flex-1 flex justify-center overflow-y-scroll">
      <div className="w-full max-w-screen-lg pt-5 pr-2 pb-5 pl-2">
          {children}
      </div>
    </div>
  )
}

export default ContentWrapper