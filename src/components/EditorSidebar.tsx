import { useResumeStore } from '@/store/resume-store';

export function EditorSidebar() {
  const resume = useResumeStore((state) => state.resume);
  const updatePersonal = useResumeStore((state) => state.updatePersonal);

  return (
    <div className="w-1/2 bg-white border-r border-blue-900 overflow-y-auto">
      <div className="p-8">
        <h2 className="text-xl font-bold text-blue-900 mb-6 font-lato">Personal Information</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2 font-lato">Full Name</label>
            <input
              type="text"
              value={resume.personal.fullName}
              onChange={(e) => updatePersonal({ fullName: e.target.value })}
              className="w-full px-4 py-2 border border-blue-900 font-lato text-blue-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2 font-lato">Professional Title</label>
            <input
              type="text"
              value={resume.personal.professionalTitle || ''}
              onChange={(e) => updatePersonal({ professionalTitle: e.target.value })}
              className="w-full px-4 py-2 border border-blue-900 font-lato text-blue-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              placeholder="Software Engineer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2 font-lato">Email</label>
            <input
              type="email"
              value={resume.personal.email || ''}
              onChange={(e) => updatePersonal({ email: e.target.value })}
              className="w-full px-4 py-2 border border-blue-900 font-lato text-blue-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2 font-lato">Phone</label>
            <input
              type="tel"
              value={resume.personal.phone || ''}
              onChange={(e) => updatePersonal({ phone: e.target.value })}
              className="w-full px-4 py-2 border border-blue-900 font-lato text-blue-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2 font-lato">Location</label>
            <input
              type="text"
              value={resume.personal.location || ''}
              onChange={(e) => updatePersonal({ location: e.target.value })}
              className="w-full px-4 py-2 border border-blue-900 font-lato text-blue-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              placeholder="New York, NY"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2 font-lato">LinkedIn Profile</label>
            <input
              type="url"
              value={resume.personal.linkedin || ''}
              onChange={(e) => updatePersonal({ linkedin: e.target.value })}
              className="w-full px-4 py-2 border border-blue-900 font-lato text-blue-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              placeholder="https://linkedin.com/in/johndoe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2 font-lato">Portfolio Website</label>
            <input
              type="url"
              value={resume.personal.portfolio || ''}
              onChange={(e) => updatePersonal({ portfolio: e.target.value })}
              className="w-full px-4 py-2 border border-blue-900 font-lato text-blue-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              placeholder="https://johnportfolio.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2 font-lato">GitHub Profile</label>
            <input
              type="url"
              value={resume.personal.github || ''}
              onChange={(e) => updatePersonal({ github: e.target.value })}
              className="w-full px-4 py-2 border border-blue-900 font-lato text-blue-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              placeholder="https://github.com/johndoe"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
