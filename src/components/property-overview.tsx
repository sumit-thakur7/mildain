"use client";

import type { Property } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bath, BedDouble, LandPlot, DollarSign } from 'lucide-react';
import { AreaChart, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, Line, Area, CartesianGrid } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import Image from 'next/image';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

interface PropertyOverviewProps {
  property: Property;
}

const priceChartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

const valueChartConfig = {
    value: {
      label: "Value",
      color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;


export function PropertyOverview({ property }: PropertyOverviewProps) {
  const pricePerSqft = property.price / property.sqft;

  return (
    <div className="sticky top-24 space-y-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="font-headline text-4xl">${property.price.toLocaleString()}</CardTitle>
          <CardDescription className="font-body text-base">{property.address}, {property.city}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-center border-t pt-4">
            <div className="flex flex-col items-center gap-1">
              <BedDouble className="w-5 h-5 text-muted-foreground" />
              <span className="font-bold text-lg">{property.bedrooms}</span>
              <span className="text-xs text-muted-foreground">Beds</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Bath className="w-5 h-5 text-muted-foreground" />
              <span className="font-bold text-lg">{property.bathrooms}</span>
              <span className="text-xs text-muted-foreground">Baths</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <LandPlot className="w-5 h-5 text-muted-foreground" />
              <span className="font-bold text-lg">{property.sqft.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">sqft</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <DollarSign className="w-5 h-5 text-muted-foreground" />
              <span className="font-bold text-lg">${pricePerSqft.toFixed(0)}</span>
              <span className="text-xs text-muted-foreground">/ sqft</span>
            </div>
          </div>
          <Button className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90">Contact Agent</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-lg">Price History</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <ChartContainer config={priceChartConfig} className="h-[150px] w-full">
            <LineChart data={property.priceHistory} margin={{ left: -20, right: 10, top: 5, bottom: 5 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 12 }} />
              <YAxis hide={true} domain={['dataMin - 50000', 'dataMax + 50000']} />
              <ChartTooltip
                cursor={{stroke: 'hsl(var(--border))', strokeWidth: 2, strokeDasharray: '3 3'}}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line dataKey="price" type="monotone" stroke="var(--color-price)" strokeWidth={2} dot={true} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-lg">Home Value Trend</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <ChartContainer config={valueChartConfig} className="h-[150px] w-full">
            <AreaChart data={property.valueHistory} margin={{ left: -20, right: 10, top: 5, bottom: 5 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 12 }} />
                <YAxis hide={true} domain={['dataMin - 100000', 'dataMax + 100000']} />
                <ChartTooltip
                  cursor={{stroke: 'hsl(var(--border))', strokeWidth: 2, strokeDasharray: '3 3'}}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area dataKey="value" type="monotone" fill="var(--color-value)" fillOpacity={0.3} stroke="var(--color-value)" strokeWidth={2}/>
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <Image src={property.agent.avatar} alt={property.agent.name} width={48} height={48} className="rounded-full" data-ai-hint="person face"/>
            <div>
                <CardTitle className="text-md font-body font-bold">{property.agent.name}</CardTitle>
                <CardDescription>Listing Agent</CardDescription>
            </div>
        </CardHeader>
      </Card>
    </div>
  );
}
