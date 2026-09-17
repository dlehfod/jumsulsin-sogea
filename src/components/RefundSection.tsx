import { motion } from "framer-motion";

const RefundSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated rounded-2xl p-8 md:p-12"
        >
          {/* 질문 */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-base md:text-2xl font-bold leading-relaxed mb-6">
              당신 마음을 <span className="text-primary">완벽히 못 읽으면</span>,
              <br />
              제가 먼저 <span className="underline">상담을 거부</span>합니다.
            </h2>
            <p className="text-lg md:text-xl text-primary font-semibold">
              <span className="text-accent">환불제 규칙</span>
            </p>
          </div>

          {/* 구분선 */}
          <div className="border-t border-border/50 my-8" />

          {/* 프로세스 */}
          <p className="text-center text-muted-foreground mb-8">
            우선 상대에 대한 <span className="text-foreground font-semibold">'손님'</span>의
            <br />
            마음을 읽습니다
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 text-center p-5 rounded-xl bg-muted/50 border border-border/50">
              <span className="inline-flex w-7 h-7 bg-muted-foreground/20 text-muted-foreground rounded-full items-center justify-center font-bold text-sm mb-3">1</span>
              <p className="font-medium">전액 환불 받고 상담 취소</p>
              <p className="text-sm text-muted-foreground mt-1">2분내로 즉시 환불</p>
            </div>

            <div className="flex-1 text-center p-5 rounded-xl bg-primary/10 border border-primary/30">
              <span className="inline-flex w-7 h-7 bg-primary/20 text-primary rounded-full items-center justify-center font-bold text-sm mb-3">2</span>
              <p className="font-medium">상대 마음을 보며 상담 진행</p>
              <p className="text-sm text-muted-foreground mt-1">정확성에 확신이 서면 계속</p>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-t border-border/50 my-8" />

          {/* 결론 */}
          <p className="text-center text-lg">
            <span className="text-primary font-semibold">"얼마나 정확하고 자세할까?"</span>
            <br />
            는 걱정 안해도 됩니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RefundSection;
