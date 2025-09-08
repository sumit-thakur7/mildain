import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const clientDetails = [
  { id: 'USR001', name: 'Ramesh', sponsorId: 'SPN001', status: 'Active', date: '12-12-2023' },
  { id: 'USR002', name: 'Suresh', sponsorId: 'SPN002', status: 'Inactive', date: '10-11-2023' },
  { id: 'USR003', name: 'Ganesh', sponsorId: 'SPN003', status: 'Active', date: '01-10-2023' },
  { id: 'USR004', name: 'Mahesh', sponsorId: 'SPN004', status: 'Active', date: '11-09-2023' },
  { id: 'USR005', name: 'Rajesh', sponsorId: 'SPN005', status: 'Inactive', date: '05-08-2023' },
];

export default function DirectSponsorPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$12,500.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$89,250.00</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Client Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Sponsor ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientDetails.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.sponsorId}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {client.status}
                    </span>
                  </TableCell>
                  <TableCell>{client.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
