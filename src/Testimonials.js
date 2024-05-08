import React, { useState } from 'react';

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, diam id aliquet aliquet, nunc elit tincidunt arcu, nec lacinia justo nunc id nunc.',
      photo: 'john-doe.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      testimonial: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed aliquet, diam id aliquet aliquet, nunc elit tincidunt arcu, nec lacinia justo nunc id nunc.',
      photo: 'jane-smith.jpg',
    },
    // Add more testimonials here
  ];

  const openDialog = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeDialog = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="testimonials-container">
      <h1 className="text-3xl font-semibold text-center mb-8">Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <button onClick={() => openDialog(testimonial)}>View Photo and Feedback</button>
          </div>
        ))}
      </div>

      {selectedTestimonial && (
        <div className="dialog">
          <img src={selectedTestimonial.photo} alt={selectedTestimonial.name} />
          <p>{selectedTestimonial.testimonial}</p>
          <button onClick={closeDialog}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;