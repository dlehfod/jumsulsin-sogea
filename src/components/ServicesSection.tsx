import { motion } from "framer-motion";

const services = [
  { icon: "💕", title: "짝사랑", desc: "정확한 마음 분석으로 빠른 해결" },
  { icon: "💔", title: "연인 갈등", desc: "근본 원인 파악으로 관계 회복" },
  { icon: "💭", title: "썸 관계", desc: "애매한 관계의 명확한 방향 제시" },
  { icon: "🔄", title: "이별 후 재회", desc: "최적의 타이밍과 접근 전략" },
  { icon: "💑", title: "부부사이", desc: "서로 욕망, 원하는 것 등을 분석해 관계 개선" },
  { icon: "⚖️", title: "재혼/이혼", desc: "이별 위기에서 진심 확인 후 돌파구 찾기" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-xl md:text-3xl font-bold mb-4">
            국내에서 저만 가능한 기술로
            <br />
            <span className="text-gradient-primary">어떤 관계 문제라도</span> 쉽게 풉니다
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </span>
              <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          모든 상담은 <span className="text-foreground font-semibold">1:1 비밀 보장</span>으로 진행됩니다
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
