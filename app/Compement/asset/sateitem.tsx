import { useEffect, useState, useRef } from "react";

function StatItem({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // déclenche quand 30% de l'élément est visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(counter);
  }, [visible, target]);

  return (
    <div ref={ref} className="flex flex-col  min-h-50 justify-center">
      <div className="relative ">
        <span className="absolute -left-4 top-2 text-4xl font-light text-yellow-500/60">
          +
        </span>
        <h2
          className="text-9xl text-transparent leading-loose"
          style={{ WebkitTextStroke: "1px rgba(234, 179, 8, 0.6)" }}
        >
          {count}
        </h2>
      </div>
      <p className=" text-yellow-500/60 font-medium uppercase tracking-widest text-sm ">
        {label}
      </p>
    </div>
  );
}

export default StatItem;
