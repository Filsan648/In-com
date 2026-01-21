function Title({ title ,subtitle }: { title: string ,subtitle:string }) {
    return(
        <div className="text-5xl font-luxurious  ">
            <p className="text-sm p-2 uppercase text-[#801010] ">{subtitle}</p>
            <h1>{title}</h1>
        </div>
    )
}
export default Title;