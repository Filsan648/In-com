import StatItem from "../asset/sateitem";

function StatsSection() {
  const stats = [
    { value: "5", label: "year of experience" },
    { value: "20", label: "Employer" },
    { value: "30", label: "project" },
    { value: "50", label: "customer" },
  ];

  return (
    <section className="px-6 bg-[#801010] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-gray-200  ">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default StatsSection;

