import { motion } from "framer-motion";

const ReviewInfoSection = () => {
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
          <p className="text-accent font-medium mb-4">◆</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-6">후기 모음</h2>
          <p className="text-muted-foreground text-lg">
            후기들은 <span className="text-foreground font-semibold">7000개가 넘게</span> 있으며
            <br />
            흔하게 보는 어설픈 톡후기 아닙니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated rounded-2xl p-8 md:p-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold text-lg">크몽 플랫폼 공식 데이터</h3>
              <p className="text-muted-foreground">700개 후기 올 만점</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-medium">조작 불가능한 플랫폼 검증 완료</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewInfoSection;
