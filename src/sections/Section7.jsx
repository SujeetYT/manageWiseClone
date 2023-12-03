import React from 'react'
import SectionName from '../components/SectionName'
import TestimonialCard from '../components/TestimonialCard'
import alex from '../assets/testimonials/Alex.jpg'
import david from '../assets/testimonials/David.jpg'
import emily from '../assets/testimonials/Emily.jpg'
import sarah from '../assets/testimonials/Sarah.jpg'

const Section7 = () => {
  const testimonials = [
    {
      name: 'Alex',
      image: alex,
      designation: 'IT Manager',
      description: 'I can\'t imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.'
    },
    {
      name: 'David',
      image: david,
      designation: 'Freelancer',
      description: 'Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity'
    },
    {
      name: 'Emily',
      image: emily,
      designation: 'Art Director',
      description: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
    },
    {
      name: 'Sarah',
      image: sarah,
      designation: 'Project Manager',
      description: 'The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.'
    },

  ]
  return (
    <div id='section7' className='mt-16 px-[10px] md:px-[150px] pt-8 w-[100%]'>
      <SectionName name='🧡 TESTIMONIALS' align={""} />
      <div className='text-start mt-4 px-[10px] mb-[60px]'>
        <h1 className='font-outfit text-[36px] md:text-[45px] font-medium leading-none'>
          {"Hear from our "}
          <span className='text-[#fe8162]'>Satisfied</span>
          {" clients"}
        </h1>
        <p
          className='text-[#6c757d] mt-10 font-outfit text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-tight'
        >
          Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
        </p>
      </div>
      <div className='w-[100%] overflow-hidden flex gap-10'>
        {testimonials?.map((person, i) =>
          <div className='animate-transX'>
            <TestimonialCard
              key={i}
              name={person.name}
              image={person.image}
              designation={person.designation}
              description={person.description}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Section7