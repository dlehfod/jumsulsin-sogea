import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 px-4 bg-gradient-mystical relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-accent font-medium mb-6">✦ 지금 바로 시작하세요 ✦</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            점술로 푸는
            <br />
            <span className="text-gradient-primary">연애/재회 상담</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            14년 경력, 7000건 이상의 상담 후기가
            <br />
            실력을 증명합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg glow-primary w-full sm:w-auto justify-center"
            >
              상담문의
              <span className="text-sm opacity-80">카카오톡 안내</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/50 font-semibold px-8 py-4 rounded-full text-lg w-full sm:w-auto justify-center hover:bg-accent/30 transition-colors"
            >
              7000개의 후기 보러가기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </div>

          <p className="text-muted-foreground text-sm">네이버 카페로 이동</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
