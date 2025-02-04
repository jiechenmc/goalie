export function TypographyH2({ text }: { text: string }) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {text}
        </h2>
    )
}

export function TypographyH1({ text }: { text: string }) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {text}
        </h1>
    )
}
