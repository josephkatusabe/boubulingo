import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Foooter = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/flags/bi.svg" 
                        height={32} 
                        width={40} 
                        alt="Burundian" 
                        className="mr-4 rounded-md" 
                    />
                    Kirundi
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/flags/ke.svg" 
                        height={32} 
                        width={40} 
                        alt="Kenyan" 
                        className="mr-4 rounded-md" 
                    />
                    Swahili
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/flags/ug.svg" 
                        height={32} 
                        width={40} 
                        alt="Ugandan" 
                        className="mr-4 rounded-md" 
                    />
                    Luganda
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/flags/fr.svg" 
                        height={32} 
                        width={40} 
                        alt="French" 
                        className="mr-4 rounded-md" 
                    />
                    French
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/flags/us.svg" 
                        height={32} 
                        width={40} 
                        alt="US English" 
                        className="mr-4 rounded-md" 
                    />
                    English
                </Button>
            </div>
        </footer>
    )
}