import Title from "../asset/Tile";

const testimonials = [
  {
    id: "01",
    name: "Sarah Jenkins",
    role: "CEO @ Visionary",
    content: "L'approche créative dépasse nos espérances. Chaque détail a été pensé pour refléter l'essence de notre marque avec une précision chirurgicale.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
  },
  {
    id: "02",
    name: "Marc-Antoine",
    role: "Founder of Archi",
    content: "Un design qui respire la précision et le luxe. Le flux utilisateur est d'une fluidité exemplaire, ce qui a doublé notre taux de conversion en un mois.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500"
  },
  {
    id: "03",
    name: "Elena Rossi",
    role: "Creative Lead",
    content: "Ils comprennent l'équilibre parfait entre forme et fonction. Travailler avec eux, c'est s'assurer d'un résultat qui ne vieillit pas avec les modes.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
  }
];

function Client() {
  return (
    <section className=" min-h-screen py-24 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* PARTIE GAUCHE : Sticky Title */}
        <div className="md:w-1/3 md:sticky md:top-32 h-fit">
           <Title title="Voices of Excellence" subtitle="Testimonials" />
          
          
        </div>

  
        <div className="md:w-2/3 flex flex-col gap-32   ">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col gap-8 border-b border-white/5 pb-24 last:border-0"
            >
           
              <span className="text-8xl font-bold text-white/[0.03] absolute -top-10 -left-10 group-hover:text-[#801010]/10 transition-colors duration-700">
                {item.id}
              </span>

              <blockquote className="relative z-10 text-2xl md:text-4xl font-light leading-snug md:leading-normal">
                "{item.content}"
              </blockquote>

              <div className="flex items-center gap-6 mt-4">
               
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                </div>
       
                <div className="flex flex-col">
                  <cite className="not-italic text-lg font-medium">{item.name}</cite>
                  <span className="text-sm text-white/40 tracking-wider uppercase">{item.role}</span>
                </div>
              </div>

              <div className="absolute right-0 bottom-24 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#801010]">
                  <span>Read Case Study</span>
                  <div className="w-8 h-[1px] bg-[#801010]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;