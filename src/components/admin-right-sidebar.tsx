import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function AdminRightSidebar() {
    return (
        <aside className="hidden lg:block w-64 p-6 bg-background border-l">
            <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="https://picsum.photos/200" data-ai-hint="person face"/>
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">Name</p>
                    <p className="text-sm text-muted-foreground">Rank</p>
                </div>
                <Card className="w-full">
                    <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-md" />
                    </CardContent>
                </Card>
            </div>
        </aside>
    );
}
