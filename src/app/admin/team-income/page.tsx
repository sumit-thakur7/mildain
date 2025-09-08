import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const teamDetails = [
  { id: 'USR001', name: 'Ramesh', investment: '$500', teamIncome: '$50', directIncome: '$20' },
  { id: 'USR002', name: 'Suresh', investment: '$1000', teamIncome: '$100', directIncome: '$50' },
  { id: 'USR003', name: 'Ganesh', investment: '$200', teamIncome: '$20', directIncome: '$10' },
  { id: 'USR004', name: 'Mahesh', investment: '$1500', teamIncome: '$150', directIncome: '$75' },
  { id: 'USR005', name: 'Rajesh', investment: '$800', teamIncome: '$80', directIncome: '$40' },
];

export default function TeamIncomePage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-center text-muted-foreground">Current wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-center">$5,500.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-center text-muted-foreground">Matching Pending Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-center">$1,250.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-center text-muted-foreground">Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-center">$25,750.00</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Investment</TableHead>
                <TableHead>Team Income</TableHead>
                <TableHead>Direct Income</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamDetails.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.investment}</TableCell>
                  <TableCell>{member.teamIncome}</TableCell>
                  <TableCell>{member.directIncome}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
