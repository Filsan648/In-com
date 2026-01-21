function Button({content,classtyle}:{content:string,classtyle:string}){
    return(<div className={` text-lg px-14 py-3 mt-3 mb-2  w-max text-center ${classtyle}  `}>
    <button className="mx-auto block">{content}</button>
</div>

    )
}
export default Button;




