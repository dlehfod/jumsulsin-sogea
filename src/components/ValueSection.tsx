import { motion } from "framer-motion";

const comparisons = [
  { problem: "수년간의 헛된 노력", solution: "속마음 확인 후 고민 해결" },
  { problem: "수십, 수백만원 타로/신점", solution: "다른데 갈 필요 없어짐" },
  { problem: "수개월의 스트레스, 시간낭비", solution: "명백한 원인과 해결책을 찾음" },
];

const ValueSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">
            당신의 관계 피해는
            <br />
            <span className="text-gradient-primary">돈으로 환산하기 힘듭니다</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1 flex items-center gap-3">
                <span className="text-muted-foreground">⏳</span>
                <p className="text-muted-foreground line-through">{item.problem}</p>
              </div>
              <div className="hidden md:block text-muted-foreground">VS</div>
              <div className="flex-1 flex items-center gap-3">
                <span className="text-primary">✅</span>
                <p className="text-foreground font-medium">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
