import React, { useState } from 'react';
import { Briefcase, Search, Bell, Mail, BarChart2, User, Settings, LogOut } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const TechRemoteJobDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const jobApplications = [
    { id: 1, company: 'TechCorp', position: 'Senior React Developer', status: 'Interview', date: '2024-07-28' },
    { id: 2, company: 'InnoSoft', position: 'Full Stack Engineer', status: 'Applied', date: '2024-07-25' },
    { id: 3, company: 'DataWiz', position: 'Machine Learning Engineer', status: 'Offer', date: '2024-07-20' },
    { id: 4, company: 'CloudNet', position: 'DevOps Specialist', status: 'Rejected', date: '2024-07-15' },
  ];

  const recommendedJobs = [
    { id: 1, company: 'AITech', position: 'AI Engineer', matchPercentage: 95 },
    { id: 2, company: 'WebFront', position: 'UI/UX Developer', matchPercentage: 88 },
    { id: 3, company: 'SecureNet', position: 'Cybersecurity Analyst', matchPercentage: 82 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">TechJobHub</h1>
        <nav>
          {[
            { name: 'Dashboard', icon: BarChart2 },
            { name: 'Job Search', icon: Search },
            { name: 'Applications', icon: Briefcase },
            { name: 'Messages', icon: Mail },
            { name: 'Notifications', icon: Bell },
            { name: 'Profile', icon: User },
            { name: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              className={`flex items-center space-x-2 w-full p-2 rounded mb-2 ${
                activeTab === item.name.toLowerCase() ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
              onClick={() => setActiveTab(item.name.toLowerCase())}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
        <button className="flex items-center space-x-2 w-full p-2 rounded mt-auto hover:bg-blue-500">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Welcome back, Sarah!</h2>
          <div className="flex items-center space-x-2 bg-white p-2 rounded-full shadow">
            <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full" />
            <span className="font-medium">Sarah Tech</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Job Applications</h3>
            <p className="text-4xl font-bold text-blue-500">12</p>
            <p className="text-sm text-gray-500 mt-2">3 new this week</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Interviews Scheduled</h3>
            <p className="text-4xl font-bold text-green-500">2</p>
            <p className="text-sm text-gray-500 mt-2">Next: TechCorp on July 28</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Profile Strength</h3>
            <Progress value={85} className="w-full mb-2" />
            <p className="text-sm text-gray-500">85% - Add a portfolio to improve</p>
          </div>
        </div>

        {/* Recent Job Applications */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-xl font-semibold mb-4">Recent Job Applications</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="pb-2">Company</th>
                  <th className="pb-2">Position</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Date Applied</th>
                </tr>
              </thead>
              <tbody>
                {jobApplications.map((job) => (
                  <tr key={job.id} className="border-t">
                    <td className="py-2">{job.company}</td>
                    <td className="py-2">{job.position}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold
                        ${job.status === 'Interview' ? 'bg-yellow-200 text-yellow-800' :
                          job.status === 'Applied' ? 'bg-blue-200 text-blue-800' :
                          job.status === 'Offer' ? 'bg-green-200 text-green-800' :
                          'bg-red-200 text-red-800'}`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="py-2">{job.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended Jobs */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Recommended Jobs</h3>
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h4 className="font-semibold">{job.position}</h4>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-green-500">{job.matchPercentage}% Match</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechRemoteJobDashboard;
