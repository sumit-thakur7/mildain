import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const bonusDetails = [
  { level: 1, income: '$1,200', date: '2024-01-20' },
  { level: 2, income: '$1,100', date: '2024-01-19' },
  { level: 3, income: '$1,000', date: '2024-01-18' },
  { level: 4, income: '$900', date: '2024-01-17' },
  { level: 5, income: '$800', date: '2024-01-16' },
];


export default function TLoyaltyBonusPage() {
  return (
    <div className="space-y-6">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total User</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">2,500</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Sponsor</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">1,500</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">$30,000</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Loyalty Income</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">$7,500</p>
            </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>T. Loyalty Bonus Details</CardTitle>
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
