'use client'
import * as React from "react"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Stat = ({ title, content, footer }: { title: string, content: string, footer: string }) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <Separator orientation="horizontal" />

            </CardHeader>
            <CardContent>
                {content}
            </CardContent>

            <CardFooter className="flex justify-between">
                {footer}
            </CardFooter>
        </Card>
    )
}

export default Stat;
