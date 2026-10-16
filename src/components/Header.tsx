import { Download } from 'lucide-react';

export function Header() {
  return (
    <div className="border-b border-blue-900 bg-white px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900 font-lato">Resume Builder</h1>
          <p className="text-sm text-gray-700 mt-1 font-lato">Create your professional resume</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-lato font-medium hover:bg-blue-700 transition">
          <Download size={18} />
          Export
        </button>
      </div>
    </div>
  );
}
