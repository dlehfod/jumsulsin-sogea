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
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            속마음을 100% 읽는
            <br />
            <span className="text-gradient-primary">점술 연애상담</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 mb-10">
            <motion.a
              href="https://postfiles.pstatic.net/MjAyNTExMTRfMTAw/MDAxNzYzMTAxOTIwMzg1.XTDLovn21ANv8IYDZYw1VWFt391DO9HotOvWS4ufoZsg.pvBXrL1-tAJWfghm_MRnT7Upr3Ibk5_w76icXRc1IzAg.JPEG/KakaoTalk_20211023_005400236.jpg?type=w580"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg glow-primary w-full sm:w-auto justify-center"
            >
              상담문의
              <span className="text-sm opacity-80">카카오톡 안내</span>
            </motion.a>
            <motion.a
              href="https://m.site.naver.com/1tRze"
              target="_blank"
              rel="noopener noreferrer"
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

          {/* 구분선 */}
          <div className="mt-10 mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-white/20" />
            <span className="text-muted-foreground text-sm">읽어보기</span>
            <div className="h-px w-16 bg-white/20" />
          </div>

          {/* 추가 링크 */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <a
              href="https://blog.naver.com/dlehfod/223914541438"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-base underline underline-offset-4 decoration-white/30 hover:decoration-white/60"
            >
              ⚠️ 이 업계의 무서운 피해사례들(충격)
            </a>
            <a
              href="https://blog.naver.com/dlehfod/223913734174"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-base underline underline-offset-4 decoration-white/30 hover:decoration-white/60"
            >
              🔥 내가 이 일을 하는 이유, 사명감
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
