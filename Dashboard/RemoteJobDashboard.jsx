import React, { useState } from 'react';
import { Bell, Briefcase, Search, User, Settings, LogOut } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Dummy data for jobs
const dummyJobs = [
  { id: 1, title: 'Senior React Developer', company: 'TechCorp', salary: '$120k - $150k' },
  { id: 2, title: 'Full Stack Engineer', company: 'WebSolutions', salary: '$100k - $130k' },
  { id: 3, title: 'DevOps Specialist', company: 'CloudTech', salary: '$110k - $140k' },
];

const Header = ({ username }) => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Remote Tech Jobs</h1>
    <div className="flex items-center space-x-4">
      <Bell size={20} />
      <span>{username}</span>
    </div>
  </header>
);

const Sidebar = () => (
  <aside className="bg-gray-100 p-4 w-64 h-screen">
    <nav>
      <ul className="space-y-2">
        <li><Button variant="ghost" className="w-full justify-start"><Briefcase className="mr-2" size={20} />Jobs</Button></li>
        <li><Button variant="ghost" className="w-full justify-start"><User className="mr-2" size={20} />Profile</Button></li>
        <li><Button variant="ghost" className="w-full justify-start"><Settings className="mr-2" size={20} />Settings</Button></li>
        <li><Button variant="ghost" className="w-full justify-start"><LogOut className="mr-2" size={20} />Logout</Button></li>
      </ul>
    </nav>
  </aside>
);

const JobSearch = ({ onSearch }) => (
  <div className="mb-4">
    <Input 
      type="text" 
      placeholder="Search for jobs..." 
      onChange={(e) => onSearch(e.target.value)}
      className="w-full"
    />
  </div>
);

const JobList = ({ jobs }) => (
  <div className="space-y-4">
    {jobs.map(job => (
      <Card key={job.id}>
        <CardHeader>
          <CardTitle>{job.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{job.company}</p>
          <p>{job.salary}</p>
          <Button className="mt-2">Apply Now</Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState(dummyJobs);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredJobs = dummyJobs.filter(job => 
      job.title.toLowerCase().includes(term.toLowerCase()) ||
      job.company.toLowerCase().includes(term.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header username="John Doe" />
        <main className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Job Dashboard</h2>
          <JobSearch onSearch={handleSearch} />
          <JobList jobs={jobs} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
