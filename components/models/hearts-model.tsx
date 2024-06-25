"use client"

import { useHeartsModel } from "@/store/use-hearts-model";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

export const HeartsModel = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false)
    const {isOpen, close} = useHeartsModel()

    useEffect(() => setIsClient(true), [])

    const onClick = () => {
        close();
        router.push("/store")
    }

    if (!isClient) {
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                        // change to mascot bad
                            src="/sad.svg"
                            alt="Sad face"
                            height={80}
                            width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        You ran out of hearts!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Purchase more in the store or get pro version for unlimited Learning.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button variant="primary" className="w-full" size="lg" onClick={onClick}>
                            Get Unlimited Hearts
                        </Button>
                        <Button variant="primaryOutline" className="w-full" size="lg" onClick={close}>
                            No thanks
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}