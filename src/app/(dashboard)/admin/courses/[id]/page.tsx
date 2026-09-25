"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, AlertCircle, Upload, X } from "lucide-react";

export default function EditCoursePage() {
  const router = useRouter();
  const params = useParams();
  const courseId = params.id as string;
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    provider: "",
    duration: "",
    cohortStarts: "",
    badge: "",
    bannerImage: "",
    logoImage: "",
  });

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(`/api/admin/courses/${courseId}`);
        const data = await res.json();
        
        if (res.ok) {
          setFormData({
            title: data.title || "",
            slug: data.slug || "",
            category: data.category || "",
            provider: data.provider || "",
            duration: data.duration || "",
            cohortStarts: data.cohortStarts || "",
            badge: data.badge || "",
            bannerImage: data.bannerImage || "",
            logoImage: data.logoImage || data.image || "",
          });
        }
      } catch (err) {
        setError("Failed to load course data");
      } finally {
        setFetching(false);
      }
    }
    
    if (courseId) {
      fetchCourse();
    }
  }, [courseId]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    
    setFormData({ ...formData, title, slug });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'bannerImage' | 'logoImage') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError("Image size must be less than 2MB");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [field]: reader.result as string });
        setError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (field: 'bannerImage' | 'logoImage') => {
    setFormData({ ...formData, [field]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/admin/courses/${courseId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update course");
      }

      router.push("/admin/courses");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="flex justify-center py-20 text-slate-500 font-medium">Loading course data...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/courses"
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Edit Course</h1>
          </div>
        </div>
        
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md font-semibold text-sm transition-all shadow-sm flex items-center gap-2 disabled:opacity-70"
        >
          {loading ? "Updating..." : <><Save size={16} /> Update Course</>}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-md flex items-center gap-2 text-sm font-medium">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
              Basic Information
            </h2>
            
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Course Title *</label>
              <input 
                type="text" 
                required
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">URL Slug *</label>
                <input 
                  type="text" 
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Category *</label>
                <input 
                  type="text" 
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
              Additional Details
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Provider / Institution</label>
                <input 
                  type="text" 
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Duration</label>
                <input 
                  type="text" 
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Cohort Starts</label>
                <input 
                  type="text" 
                  value={formData.cohortStarts}
                  onChange={(e) => setFormData({ ...formData, cohortStarts: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Badge</label>
                <input 
                  type="text" 
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
              Course Banner Image
            </h2>
            
            {!formData.bannerImage ? (
              <div className="border border-dashed border-slate-300 rounded-md p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative min-h-[120px]">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'bannerImage')}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload size={20} className="text-primary mb-2" />
                <p className="text-xs font-bold text-slate-600">Upload Banner</p>
              </div>
            ) : (
              <div className="relative w-full rounded-md overflow-hidden border border-slate-200 group">
                <img src={formData.bannerImage} alt="Banner" className="w-full h-[120px] object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    type="button"
                    onClick={() => removeImage('bannerImage')}
                    className="bg-white text-red-600 p-1.5 rounded-md hover:bg-red-50 text-xs font-bold flex items-center gap-1"
                  >
                    <X size={14} /> Remove
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
              Provider Logo
            </h2>
            
            {!formData.logoImage ? (
              <div className="border border-dashed border-slate-300 rounded-md p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative min-h-[120px]">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'logoImage')}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload size={20} className="text-primary mb-2" />
                <p className="text-xs font-bold text-slate-600">Upload Logo</p>
              </div>
            ) : (
              <div className="relative w-full rounded-md overflow-hidden border border-slate-200 group flex items-center justify-center bg-slate-50 h-[120px]">
                <img src={formData.logoImage} alt="Logo" className="max-h-[80px] max-w-[80px] object-contain" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    type="button"
                    onClick={() => removeImage('logoImage')}
                    className="bg-white text-red-600 p-1.5 rounded-md hover:bg-red-50 text-xs font-bold flex items-center gap-1"
                  >
                    <X size={14} /> Remove
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}