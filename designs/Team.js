import React from 'react';
import TeamMember from './TeamMember'; // Import your TeamMember component

function Team() {
 const teamMembers = [
  {
   name: 'Victor Wonders',
   title: 'Software Developer',
   bio: 'Experienced developer with a knack for creating innovative solutions.',
   image: 'path/to/victor-wonders.jpg',
  },
  {
   name: 'Delsa Marasha',
   title: 'Software Developer',
   bio: 'Passionate about clean code and user-centric design.',
   image: 'path/to/delsa-marasha.jpg',
  },
  {
   name: 'Daniel Ene',
   title: 'Software Developer',
   bio: 'Full-stack developer with expertise in scalable web applications.',
   image: 'path/to/daniel-ene.jpg',
  },
  {
   name: 'Gabriel Ben',
   title: 'Software Developer',
   bio: 'Specializes in mobile app development and cross-platform solutions.',
   image: 'path/to/gabriel-ben.jpg',
  },
  // Add more team members as needed
 ];

 return (
  <section className="team">
   <h2>Meet the Team</h2>
   <div className="team-members">
    {teamMembers.map((member) => (
     <TeamMember key={member.name} {...member} />
    ))}
   </div>
  </section>
 );
}

export default Team;
