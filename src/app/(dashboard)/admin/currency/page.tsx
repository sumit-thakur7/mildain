'use client';

import { useState, useEffect } from 'react';
import { Save, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CurrencySettingsPage() {
  const [exchangeRate, setExchangeRate] = useState<string>("90");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch('/api/admin/settings');
        if (res.ok) {
          const data = await res.json();
          setExchangeRate(data.exchangeRate.toString());
        }
      } catch (error) {
        console.error("Failed to load settings");
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ exchangeRate }),
      });

      if (!res.ok) throw new Error("Failed to save exchange rate");

      setMessage({ type: 'success', text: 'Exchange rate updated successfully!' });
      
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 3000);
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-slate-500">Loading settings...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Currency & Region Settings</h1>
        <p className="text-slate-500 mt-1 text-sm font-medium">Manage base exchange rates for global pricing.</p>
      </div>

      {message.text && (
        <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
          message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'
        }`}>
          {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          {message.text}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
              <tr>
                <th className="px-6 py-4 font-semibold">Country</th>
                <th className="px-6 py-4 font-semibold">Currency</th>
                <th className="px-6 py-4 font-semibold">Symbol</th>
                <th className="px-6 py-4 font-semibold">Exchange Rate (1 USD = INR)</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-900">IN India</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">Indian Rupee</td>
                <td className="px-6 py-4 font-medium text-slate-900">₹</td>
                <td className="px-6 py-4 text-slate-500">Base Currency (1.00)</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">
                    Default
                  </span>
                </td>
              </tr>
              
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-900">US USA</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">US Dollar</td>
                <td className="px-6 py-4 font-medium text-slate-900">$</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 max-w-[140px]">
                    <span className="text-slate-400 font-medium">₹</span>
                    <input
                      type="number"
                      value={exchangeRate}
                      onChange={(e) => setExchangeRate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-sm disabled:opacity-70"
                  >
                    <Save size={16} />
                    {saving ? 'Saving...' : 'Update'}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}