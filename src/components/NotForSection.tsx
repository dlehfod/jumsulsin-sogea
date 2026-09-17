import { motion } from "framer-motion";

const NotForSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-destructive/5 to-destructive/10 border-y border-destructive/20">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full">
            <span className="text-destructive font-semibold text-sm">⚠️ 중요 안내</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-2 text-destructive">
            아무나 받지 않습니다.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground mb-10 text-lg"
        >
          하루 상담 가능 인원은
          <br />
          집중력 문제로 <span className="text-destructive font-bold">5~6명</span>이 전부입니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-foreground mb-8 text-lg font-medium"
        >
          다음에 해당된다면
          <br />
          다른 곳에서 상담받으시길 권합니다.
        </motion.p>

        <div className="space-y-4">
          {[
            "저가 상담만 전전하는 '상담 유목민'",
            "자기 객관화 없이 기적만 바라는 분",
            "본질보다 가십만 궁금한 가벼운 사연",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-destructive/30 rounded-xl p-5 flex items-center gap-4 shadow-sm"
            >
              <span className="w-8 h-8 bg-destructive text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-foreground font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotForSection;
