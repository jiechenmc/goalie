"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

const chartData = [
    { month: "January", user: 18680 },
    { month: "February", user: 305200 },
    { month: "March", user: 237120 },
    { month: "April", user: 73190 },
    { month: "May", user: 209130 },
    { month: "June", user: 214140 },
    { month: "July", user: 214140 },
    { month: "August", user: 214140 },
    { month: "September", user: 214 },
]

const chartConfig = {
    user: {
        label: "User",
        color: "#2563eb",
    },
} satisfies ChartConfig

const CustomLineChart = () => {
    return <ChartContainer config={chartConfig} className="max-h-[400px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area dataKey="user" fill="var(--color-user)" fillOpacity={0.1} />
        </AreaChart>
    </ChartContainer>;
}

export default CustomLineChart;