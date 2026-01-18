import { motion } from "framer-motion";

const RefundSection = () => {
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
          <p className="text-muted-foreground mb-4">솔직한 이야기</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">
            틀릴수도 있는거 아니냐?
            <br />
            애매한거 아니냐?
          </h2>
          <div className="flex justify-center my-6">
            <svg className="w-8 h-8 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-primary">
            그럴까봐 사전 환불제를 합니다
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated rounded-2xl p-8 md:p-12 mb-8"
        >
          <p className="text-center text-muted-foreground mb-8">
            우선 상대에 대한 <span className="text-foreground font-semibold">'손님'</span>의 마음을 읽습니다
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-destructive/20 text-destructive rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <h3 className="font-semibold text-lg">전액 환불 받고 상담 취소</h3>
              </div>
              <p className="text-muted-foreground">2분내로 즉시 환불</p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <h3 className="font-semibold text-lg">상대 마음을 보며 상담 진행</h3>
              </div>
              <p className="text-muted-foreground">정확성에 확신이 서면 계속</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg text-muted-foreground"
        >
          그래서, <span className="text-foreground font-semibold">"얼마나 정확하고 자세할까?"</span>는 걱정 안해도 됩니다.
        </motion.p>
      </div>
    </section>
  );
};

export default RefundSection;
