import { useState ,useEffect } from "react"
function Scroll ({content}:{content:Array<any>}){
  const [index, setIndex] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  // ✅ window uniquement côté client
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const slideWidth = () => {
    if (viewportWidth >= 1024) return viewportWidth * 0.32
    if (viewportWidth >= 768) return viewportWidth * 0.45
    return viewportWidth * 0.75
  }

  const next = () => setIndex((p) => Math.min(p + 1, content.length - 1))
  const prev = () => setIndex((p) => Math.max(p - 1, 0))

  const translateX =
    viewportWidth > 0 ? -(index * (slideWidth() + 32)) : 0
     return (
    <section className="relative w-full overflow-hidden pt-24">

      {/* Navigation */}
      <div className="absolute top-10 right-10 flex gap-3 z-20">
        <button onClick={prev} className="w-12 h-12 border border-white/30 hover:bg-white/10 transition">←</button>
        <button onClick={next} className="w-12 h-12 border border-white/30 hover:bg-white/10 transition">→</button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-[900ms]
                     ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {content.map((item, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[75vw] md:w-[45vw] lg:w-[32vw]
                         aspect-[4/5] overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0
                              group-hover:opacity-100 transition-opacity duration-500
                              flex items-end p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl text-[#801010] font-sans  font-bold tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Scroll;