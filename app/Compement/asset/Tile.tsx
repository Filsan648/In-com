function Title({ title ,subtitle }: { title: string ,subtitle:string }) {
    return(
        <div className="md:text-5xl text-3xl  ">
            <p className="text-sm p-2  text-[#801010] ">{subtitle}</p>
            <h1 className="font-light leading-tight text-black tracking-tighter"> {title}</h1>
        </div>
    )
}
export default Title;