import { motion } from "framer-motion";

const skills = [
  "날 얼마나 좋아하는지?",
  "날 생각하면 어떤 감정이 드는지?",
  "감정의 깊이는 어느정도인지?",
  "나에게 왜 그런 행동을 하는지?",
  "나에게 진짜 바라는게 무엇인지?",
  "무의식에 있는 트라우마는 뭘까?",
];

const SkillsSection = () => {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* 미세한 노이즈 텍스처 느낌 */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container max-w-2xl mx-auto relative z-10">
        {/* 질문 리스트 - 타이핑 효과 */}
        <div className="space-y-6 md:space-y-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.25, 
                delay: index * 0.04,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="overflow-hidden"
            >
              <motion.p 
                className="text-lg md:text-2xl text-white/90 font-light tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 + 0.05 }}
              >
                <span className="text-white/30 mr-4 font-mono text-sm md:text-base">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {skill}
              </motion.p>
              
              {/* 타이핑 커서 효과 */}
              <motion.div
                initial={{ width: "100%" }}
                whileInView={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.25, 
                  delay: index * 0.04,
                  ease: "easeOut"
                }}
                className="h-[2px] bg-white/20 mt-2"
              />
            </motion.div>
          ))}
        </div>

        {/* 구분 - 깜빡이는 커서 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex justify-center mb-16"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "steps(2)" }}
            className="w-[2px] h-8 bg-white/60"
          />
        </motion.div>

        {/* 결론 문구 - 강렬한 하이라이트 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center space-y-4"
        >
          <motion.p 
            className="text-lg md:text-xl text-white/80 font-light tracking-wider mb-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            이것만 알면{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: 0.5 }}
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 40px rgba(255,255,255,0.6)",
                  "0 0 60px rgba(255,255,255,0.4)",
                  "0 0 30px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{
                textShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              }}
              className="relative inline-block text-white font-bold text-xl md:text-2xl"
            >
              '쉽게'
              {/* 강렬한 언더라인 */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.55 }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-white origin-left"
              />
            </motion.span>
            {" "}풀릴 고민에
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl font-light tracking-wider"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <span className="text-white/80">수개월의 시간과 돈 낭비 하지마세요.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
