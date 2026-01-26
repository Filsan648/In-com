
function Welcome({title,description}:{title:string,description:string}){

return(
         <div className="h-max  bg-[#801010] text-white w-full p-10 text-center text-2xl md:text-4xl flex  flex-col justify-center items-center">
     <div className="pb-3 "> 
 <h3>{title} </h3>
  <p className="text-xl text-yellow-500/60  pt-6 ">
  {description}
 </p>

     </div>
    

         </div>
)


}
export default Welcome