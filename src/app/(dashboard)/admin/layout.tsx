import AdminSidebar from "@/components/admin/AdminSidebar";
import { Bell, Search } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f3f4f6]">
      
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40 shadow-sm">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-[400px] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <Search size={16} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search users, transactions, or courses..." 
              className="bg-transparent border-none outline-none text-sm w-full ml-3 text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                ST
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-gray-900">Sumit Thakur</p>
                <p className="text-xs text-gray-500 font-medium">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}