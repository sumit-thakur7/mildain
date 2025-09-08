import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const bonusDetails = [
  { level: 1, income: '$500', date: '2023-12-15' },
  { level: 2, income: '$450', date: '2023-12-14' },
  { level: 3, income: '$400', date: '2023-12-13' },
  { level: 4, income: '$350', date: '2023-12-12' },
  { level: 5, income: '$300', date: '2023-12-11' },
];


export default function DLoyaltyBonusPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total User</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">1,250</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Sponsor</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">890</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">$15,200</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Loyalty Income</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">$3,500</p>
            </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>D. Loyalty Bonus Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Level</TableHead>
                    <TableHead>Income</TableHead>
                    <TableHead>Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {bonusDetails.map((detail) => (
                    <TableRow key={detail.level}>
                        <TableCell>{detail.level}</TableCell>
                        <TableCell>{detail.income}</TableCell>
                        <TableCell>{detail.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
