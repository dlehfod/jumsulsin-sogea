import { motion } from "framer-motion";

const testimonials = [
  "소름돋을 정도로 정확해요. 상대방 마음을 어떻게 이렇게 정확히 아시는지...",
  "다른 곳에서 몇 번이나 상담받았는데, 여기만 진짜였어요.",
  "처음엔 반신반의했는데 제 마음을 정확히 읽으시더라고요. 믿음이 갔습니다.",
  "수년간 고민하던 문제가 20분만에 해결됐어요. 정말 감사해요.",
  "다른 점집 다닐 필요 없어졌어요. 이 분 한 명이면 충분합니다.",
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-background overflow-hidden">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4">실제 반응</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold">
            내담자 마음 읽었을때
            <br />
            <span className="text-gradient-gold">반응 모음집</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
