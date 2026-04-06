interface MetricCardProps {
  title: string;
  subtitle: string;
}

export default function MetricCard({ title, subtitle }: MetricCardProps) {
  return (
    <div className="border border-navy-700 bg-navy-800/50 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-gold-500/50 transition-colors duration-300">
      <h3 className="text-5xl font-extrabold text-gold-500 mb-4">{title}</h3>
      <p className="text-xs tracking-widest text-slate-400 uppercase font-semibold">{subtitle}</p>
    </div>
  );
}