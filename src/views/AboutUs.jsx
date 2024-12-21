import React from 'react';

// Sample team members data
const teamMembers = [
  { name: 'Me', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Myself', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'I', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
];

const AboutUs = () => {
  return (
    <section className="container mt-4">
      <h2 className="mb-3 text-center">About Us</h2>

      <h3 className="mb-3">Our Mission</h3>
      <p>
        Our mission is to create innovative solutions that make a positive impact on the world. We are dedicated to fostering collaboration, creativity, and excellence in everything we do.
      </p>

      <h3 className="mb-3">Our History</h3>
      <p>
        Founded in 2010, we have grown from a small startup into a thriving organization with a global impact. Over the years, we’ve faced challenges, but our passion and dedication have guided us through.
      </p>

      <h3 className="mb-3">Our Team</h3>
      <p>
        Our team consists of passionate and driven individuals who are committed to achieving our mission. Each member brings unique skills and experiences that help us move forward as a united force.
      </p>

      {/* Team Members Circle */}
      <div className="row g-4 justify-content-center">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 text-center" key={index}>
            <div
              className="team-member-circle"
              style={{
                height: '150px',
                width: '150px',
                borderRadius: '50%',
                backgroundImage: `url(${member.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0 auto',
              }}
            ></div>
            <h5 className="mt-2">{member.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
