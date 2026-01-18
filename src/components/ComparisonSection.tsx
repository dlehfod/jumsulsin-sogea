import { motion } from "framer-motion";

const ComparisonSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-4">✦</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold">
            쉽게 해결되는 이유가 뭘까?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-elevated rounded-2xl p-6 md:p-8 border-destructive/30"
          >
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">다른 점집/재회업체</h3>
            <ul className="space-y-4">
              {[
                "두리뭉실한 애매한 위로만",
                "점집마다 말이 다 다름",
                "검증 안되는 해석, 결과",
                "어설픈 톡 후기들",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <svg className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated rounded-2xl p-6 md:p-8 border-primary/50 bg-primary/5"
          >
            <h3 className="text-lg font-semibold mb-6 text-primary">점술신 연애상담</h3>
            <ul className="space-y-4">
              {[
                "상담 시 '내 마음 읽기' 들어보고 판단",
                "들어보고 즉시 전액 환불 (2분 내 처리)",
                "직접 검증 한 결과로 솔루션 진행",
                "1000자 이상의 장문 후기들",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
