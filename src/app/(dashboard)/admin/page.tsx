"use client";

import { Users, DollarSign, BookOpen, TrendingUp, ArrowUpRight } from "lucide-react";

export default function AdminDashboardOverview() {
  const stats = [
    { label: "Total Revenue", value: "₹4,85,000", icon: DollarSign, trend: "+12.5%", color: "text-emerald-600", bg: "bg-emerald-100" },
    { label: "Active Students", value: "1,248", icon: Users, trend: "+5.2%", color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Total Courses", value: "32", icon: BookOpen, trend: "+2", color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Total Sales", value: "845", icon: TrendingUp, trend: "+18.1%", color: "text-orange-600", bg: "bg-orange-100" },
  ];

  const recentTransactions = [
    { id: "TRX-8472", student: "Rahul Sharma", course: "Generative AI Masterclass", amount: "₹15,000", date: "Today, 10:24 AM", status: "Completed" },
    { id: "TRX-8471", student: "Neha Gupta", course: "PMP Certification", amount: "₹22,000", date: "Today, 09:12 AM", status: "Completed" },
    { id: "TRX-8470", student: "Amit Kumar", course: "Advanced Cybersecurity", amount: "₹18,500", date: "Yesterday", status: "Pending" },
    { id: "TRX-8469", student: "Priya Singh", course: "Full Stack Development", amount: "₹12,000", date: "Yesterday", status: "Completed" },
  ];

  return (
    <div className="space-y-8">
      
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1 font-medium">Monitor your platform's metrics and sales.</p>
        </div>
        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 shadow-sm transition-all flex items-center gap-2">
          Download Report <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Student Name</th>
                <th className="px-6 py-4">Course Enrolled</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentTransactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{trx.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">{trx.student}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{trx.course}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{trx.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{trx.date}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                      trx.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}