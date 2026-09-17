import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mystical py-12 px-4">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* 추상적 오로라 - 왼쪽 (남성적 에너지) */}
      <motion.div
        initial={{ opacity: 0, x: -200, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[50%] h-[80%] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <div 
            className="absolute inset-0 rounded-full blur-[100px] opacity-30"
            style={{ 
              background: 'linear-gradient(135deg, hsl(220, 60%, 50%) 0%, hsl(280, 50%, 45%) 50%, hsl(320, 40%, 40%) 100%)'
            }}
          />
          <div 
            className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full blur-[80px] opacity-40"
            style={{ 
              background: 'radial-gradient(circle, hsl(250, 50%, 55%) 0%, transparent 70%)'
            }}
          />
        </div>
      </motion.div>

      {/* 추상적 오로라 - 오른쪽 (여성적 에너지) */}
      <motion.div
        initial={{ opacity: 0, x: 200, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[50%] h-[80%] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <div 
            className="absolute inset-0 rounded-full blur-[100px] opacity-30"
            style={{ 
              background: 'linear-gradient(225deg, hsl(350, 70%, 55%) 0%, hsl(20, 80%, 50%) 50%, hsl(40, 70%, 55%) 100%)'
            }}
          />
          <div 
            className="absolute top-[20%] right-[20%] w-[60%] h-[60%] rounded-full blur-[80px] opacity-40"
            style={{ 
              background: 'radial-gradient(circle, hsl(350, 60%, 60%) 0%, transparent 70%)'
            }}
          />
        </div>
      </motion.div>

      {/* 중앙 연결 빛 */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] pointer-events-none"
      >
        <div 
          className="w-full h-full rounded-full blur-[60px]"
          style={{ 
            background: 'radial-gradient(circle, hsl(300, 50%, 60%) 0%, transparent 70%)'
          }}
        />
      </motion.div>

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold leading-loose mb-4"
        >
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="block mb-2"
          >
            당신의 관계 문제,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="block mb-2"
          >
            <span className="text-gradient-primary">생각보다 쉽게 해결</span> 되는걸
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="block"
          >
            증명합니다.
          </motion.span>
        </motion.h1>

        {/* 아래로 향하는 움직이는 화살표 3개 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-0"
        >
          {[0, 1, 2].map((index) => (
            <motion.svg
              key={index}
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.15 
              }}
              className="w-12 h-12 md:w-14 md:h-14 text-primary/60 -my-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          ))}
        </motion.div>

      </div>

      {/* 상담 분야 키워드 태그 - 섹션 맨 하단 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 z-10 flex flex-wrap justify-center gap-2 md:gap-3 max-w-2xl mx-auto px-4"
      >
        {["부부", "이별", "썸", "친구", "애매한사이", "짝사랑", "사내연애", "직장상사", "애인"].map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.6 + index * 0.05 }}
            className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/30 rounded-full text-sm md:text-base text-primary/80 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
