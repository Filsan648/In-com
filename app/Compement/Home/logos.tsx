
const client = [
  { logos: "Ministere" },
  { logos: "pnud" },
  { logos: "buruj" },
  { logos: "gamil" },
  { logos: "hamdani" },
  { logos: "hawk" },
  { logos: "naima" },
  { logos: "nalco" },
  { logos: "nasri" },
  { logos: "alihary" }
];







function Logos(){
    return(

    <div className="px-5 pt-8 pb-10 bg-[#801010] text-white text-center h-32 w-full">
         
    <div className="overflow-hidden ">
      <div className="flex animate-marquee space-x-10">
        {client.concat(client).map((item, index) => (
          <div key={index} className=" text-2xl shrink-0">
           {item.logos}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
     </div>
    )
}
export default Logos;