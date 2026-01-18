import { motion } from "framer-motion";

const cases = [
  { icon: "✨", title: "몇번을 100% 맞는걸 확인한 장문 후기" },
  { icon: "💑", title: "수년간 짝사랑 끝에, 저로 인해서 결혼까지" },
  { icon: "💰", title: "점보느라 1000만원 날린분 한방에 해결" },
  { icon: "💖", title: "딴데서 실패한걸 속마음 확인 후 재회성공" },
  { icon: "💫", title: "썸타다 차단 당한거 한방에 살린 후기" },
  { icon: "🙏", title: "손님의 인생을 바꿔주니 '신' 이라는 후기" },
];

const CasesSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-2xl md:text-4xl font-bold">
            이 기술로 관계를 해결한 <span className="text-gradient-gold">사례들</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-xl p-5 flex items-center gap-4 hover:border-accent/50 transition-colors duration-300 cursor-pointer group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <div className="flex-1">
                <p className="font-medium text-sm md:text-base">{item.title}</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
