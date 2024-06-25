//this is a reusable layout that wraps all the child pages.

import { Foooter } from "./footer";
import { Header } from "./header";

type Props = {
    children: React.ReactNode
}

const MarketingLayout = ({children}: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col justify-center items-center">
            {children}
        </main>
        <Foooter />
        
    </div>
  )
}

export default MarketingLayout;