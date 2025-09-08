"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, CreditCard, BarChart, Trophy, ArrowDown, ArrowUp } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 214 },
]

const teamMembers = [
    { name: 'Olivia Martin', email: 'olivia.martin@email.com', avatar: 'https://picsum.photos/100/100?random=a' },
    { name: 'Jackson Lee', email: 'jackson.lee@email.com', avatar: 'https://picsum.photos/100/100?random=b' },
    { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', avatar: 'https://picsum.photos/100/100?random=c' },
    { name: 'William Kim', email: 'will@email.com', avatar: 'https://picsum.photos/100/100?random=d' },
    { name: 'Sofia Davis', email: 'sofia.davis@email.com', avatar: 'https://picsum.photos/100/100?random=e' },
]


export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Withdrawable Amount</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Balance Amount</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$100,000.00</div>
              <p className="text-xs text-muted-foreground">Total balance in your account</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Payout</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$231,890.00</div>
              <p className="text-xs text-muted-foreground">Lifetime payouts</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Progress Graph</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={{}} className="h-[200px] w-full">
                        <RechartsBarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="desktop" fill="hsl(var(--primary))" radius={4} />
                        </RechartsBarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {teamMembers.slice(0, 4).map(member => (
                            <div className="flex items-center gap-4" key={member.email}>
                                <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full" data-ai-hint="person face" />
                                <div>
                                    <p className="text-sm font-medium leading-none">{member.name}</p>
                                    <p className="text-sm text-muted-foreground">{member.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <p className="text-sm text-muted-foreground">Direct Income</p>
                        <p className="text-2xl font-bold flex items-center justify-center gap-1 text-green-500">
                            <ArrowUp className="w-4 h-4" /> $5,210
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Team Income</p>
                        <p className="text-2xl font-bold flex items-center justify-center gap-1 text-red-500">
                            <ArrowDown className="w-4 h-4" /> $1,890
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
