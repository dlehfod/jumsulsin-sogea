import { motion } from "framer-motion";

const comparisons = [
  { problem: "수년간의 헛된 노력", solution: "속마음 확인 후 고민 해결" },
  { problem: "수십, 수백만원 점술/연애컨설팅", solution: "다른데 갈 필요 없어짐" },
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

        <div className="space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* 데스크탑 레이아웃 */}
              <div className="hidden md:grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
                <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 flex items-center gap-4">
                  <span className="text-2xl">⏳</span>
                  <p className="text-muted-foreground">{item.problem}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
                    <span className="text-sm font-bold text-primary">VS</span>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-5 flex items-center gap-4">
                  <span className="text-2xl">✅</span>
                  <p className="text-foreground font-semibold">{item.solution}</p>
                </div>
              </div>

              {/* 모바일 레이아웃 */}
              <div className="md:hidden bg-card rounded-2xl border border-border overflow-hidden">
                <div className="bg-destructive/10 border-b border-destructive/20 p-4 flex items-center gap-3">
                  <span className="text-xl">⏳</span>
                  <p className="text-muted-foreground text-sm">{item.problem}</p>
                </div>
                <div className="flex items-center justify-center py-2 bg-gradient-to-r from-destructive/5 via-primary/10 to-primary/5">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="bg-primary/10 p-4 flex items-center gap-3">
                  <span className="text-xl">✅</span>
                  <p className="text-foreground font-semibold text-sm">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
