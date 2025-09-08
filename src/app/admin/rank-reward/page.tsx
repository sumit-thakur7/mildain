
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stepper, StepperItem, StepperSeparator } from "@/components/ui/stepper";

const rewards = [
    { rank: 'Silver', reward: 'Exclusive Badge' },
    { rank: 'Gold', reward: '$100 Bonus' },
    { rank: 'Platinum', reward: '$500 Bonus' },
    { rank: 'Diamond', reward: 'All-inclusive Trip' },
    { rank: 'Crown', reward: 'Luxury Car' },
]

export default function RankRewardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <Avatar className="h-24 w-24">
            <AvatarImage src="https://picsum.photos/200" data-ai-hint="person face" />
            <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Badge variant="secondary">Rank</Badge>
      </div>
      <Card>
        <CardContent className="p-6">
            <Stepper>
                <StepperItem isCompleted>
                    <div className="text-xs">Step 1</div>
                </StepperItem>
                <StepperSeparator />
                <StepperItem isCompleted>
                    <div className="text-xs">Step 2</div>
                </StepperItem>
                <StepperSeparator />
                <StepperItem isCurrent>
                    <div className="text-xs">Step 3</div>
                </StepperItem>
                <StepperSeparator isDotted />
                <StepperItem>
                    <div className="text-xs">Step 4</div>
                </StepperItem>
                <StepperSeparator isDotted />
                <StepperItem>
                    <div className="text-xs">Step 5</div>
                </StepperItem>
                <StepperSeparator isDotted />
                <StepperItem>
                    <div className="text-xs">Step 6</div>
                </StepperItem>
            </Stepper>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Rewards</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                {rewards.map(item => (
                    <li key={item.rank} className="flex justify-between items-center p-2 rounded-md bg-muted">
                       <span>{item.rank}</span>
                       <span className="font-semibold">{item.reward}</span>
                    </li>
                ))}
            </ul>
        </CardContent>
      </Card>
    </div>
  );
}
