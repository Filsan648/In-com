import React from 'react';

  const services = [ {

    date: "Jan 14, 2026",
    title:
    "Tendances, insights & inspirations made in’COM",
 
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",}
  ]

function Blog() {
  return (
    <div className=" min-h-screen bg-[#F9F6EE] font-sans mt-30 text-[#1a1a1a]">
 {
          services.map((service, index) => (
       
              <main className="flex flex-col md:flex-row w-full min-h-[600px]">
        

        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
            <img
            src={service.image} 
            alt="Fashion Model at Pool" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center px-12 py-16 md:px-24">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
            {service.date}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-10 text-[#333]">
            {service.title}
          </h1>

          <button className="w-fit bg-[#990000] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors duration-300">
            Read More
          </button>
        </div>
      </main>
              
              
              ))
              
 }
      
    </div>
  );
}

export default Blog;
