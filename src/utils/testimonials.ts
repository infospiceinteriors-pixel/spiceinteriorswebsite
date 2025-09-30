export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Nikoletta Christidi',
    role: 'PhD candidate at TU Delft',
    rating: 5,
    text: 'Ankur often goes above and beyond to come up with the best solution, focusing on functionality, aesthetics and efficiency. His contribution improved greatly the quality of several projects.',
    avatar: '/nikoletta.jpeg'
  },
  {
    name: 'Leah Dierker Vilk',
    role: 'Product Manager',
    rating: 5,
    text: 'I worked with Ankur for almost a year and a half. He is a very dedicated, hard worker who cares about producing high-quality work. He\'s a creative problem-solver and a very kind person.',
    avatar: '/leah.jpeg'
  },
  {
    name: 'Milou Klein',
    role: 'Engineering and Software Development',
    rating: 5,
    text: 'Ankur is a hard working and dedicated colleague who shows creativity and curiosity in his work. His technical expertise contributed greatly to high quality solutions.',
    avatar: '/Milou Klein.jpeg'
  },
  {
    name: 'Twan Goossens',
    role: 'Computational Designer Infrastructure',
    rating: 5,
    text: 'It\'s rare to find anyone with the same technical expertise, curiosity and drive as Ankur. He went above and beyond in designing excellent user experiences and building solutions.',
    avatar: '/twan.jpeg'
  }
];

// Extended testimonials with longer text for portfolio page
export const portfolioTestimonials: Testimonial[] = [
  {
    name: 'Nikoletta Christidi',
    role: 'PhD candidate at TU Delft',
    rating: 5,
    text: 'Ankur often goes above and beyond to come up with the best solution, focusing on functionality, aesthetics and efficiency. His contribution improved greatly the quality of several projects. Even after working hard on client projects, he had the energy to explore new tools and automate processes. He is creative, diligent and driven.',
    avatar: '/nikoletta.jpeg'
  },
  {
    name: 'Leah Dierker Vilk',
    role: 'Product Manager',
    rating: 5,
    text: 'I worked for almost a year and a half with Ankur at White Lioness technologies. He is a very dedicated, hard worker who cares about producing high-quality work. He\'s a creative problem-solver, good at thinking of out-of-the-box solutions to difficult problems, and a very kind and helpful person.',
    avatar: '/leah.jpeg'
  },
  {
    name: 'Milou Klein',
    role: 'Engineering and Software Development',
    rating: 5,
    text: 'Ankur is a hard working and dedicated colleague who shows creativity and curiosity in his work. His technical expertise in Rhinoceros and Grasshopper contributed greatly to high quality solutions. He has great teaching skills and is enthusiastic to share his knowledge.',
    avatar: '/Milou Klein.jpeg'
  },
  {
    name: 'Twan (Antoine) Goossens',
    role: 'Computational Designer Infrastructure at Haskoning',
    rating: 5,
    text: 'It\'s rare to find anyone with the same technical expertise, curiosity and drive as Ankur. He went above and beyond in designing software architecture, creating excellent user experiences, and building low-maintenance solutions. Ankur is also a great trainer, always looking for better ways of working and happy to share his knowledge.',
    avatar: '/twan.jpeg'
  }
];



