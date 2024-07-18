import React from 'react';
import TeamMember from './TeamMember'; // Import your TeamMember component
import wondahsIcon from "../assets/images/Wondahs.jpg";
import delsaIcon from "../assets/images/delsa.jpg";
import danIcon from "../assets/images/Dan.jpg";
import isekIcon from "../assets/images/isek7.jpeg"

function Team() {
 const teamMembers = [
  {
   name: 'Wonders Victor',
   title: 'Software Developer',
   bio: 'Enthusiastic developer with a knack for creating innovative solutions. Proficient in modern web development skills such as Javascript, React, Html, CSS, Python and databases such as Mongodb and MySQL.',
   image: wondahsIcon,
   email: 'wondersprince1@gmail.com',
   github: 'https://github.com/Wondahs'
  },
  {
   name: 'Delsa Marasha',
   title: 'Software Developer',
   bio: 'Skilled developer with a strong foundation in programming, adept at creating efficient and adaptable applications, and proficient in multiple programming languages and frameworks.',
   image: delsaIcon,
   email: 'deemarasha77@gmail.com',
   github: 'https://github.com/Dee2002'
  },
  {
   name: 'Daniel Ene',
   title: 'Software Developer',
   bio: 'Full-stack developer with expertise in scalable web applications.',
   image: danIcon,
   email: 'danielene050@gmail.com',
   github: 'https://github.com/guyestguygithub001'
  },
  {
   name: 'Gabriel Ben',
   title: 'Software Developer',
   bio: 'Specializes in mobile app development and cross-platform solutions.',
   image: isekIcon,
   email: 'bengabrielisek@gmail.com',
   github: 'https://github.com/Isek7'
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
