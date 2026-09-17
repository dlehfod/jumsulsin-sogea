import { motion } from "framer-motion";

const stats = [
  { value: "7000+", label: "검증된 후기" },
  { value: "700+", label: "크몽 만점 후기" },
  { value: "20분", label: "평균 해결 시간" },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <p className="text-3xl md:text-5xl font-bold text-gradient-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 하단 구분선 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="w-full max-w-md h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
