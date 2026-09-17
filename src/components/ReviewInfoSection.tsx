import { motion } from "framer-motion";
import { useState } from "react";

const ReviewInfoSection = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isKmongImageExpanded, setIsKmongImageExpanded] = useState(false);

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
          <p className="text-muted-foreground text-lg mb-2">
            후기들은 <span className="text-foreground font-semibold">7000개가 넘게</span> 있으며
            <br />
            <span className="text-primary font-semibold">흔하게 보는 어설픈 톡후기 아닙니다.</span>
          </p>
          <p className="text-sm text-muted-foreground mb-6">(이미지 클릭 시 확대 가능)</p>
          <div className="relative inline-block cursor-pointer group" onClick={() => setIsImageExpanded(true)}>
            <img 
              src="/후기모음.jpg" 
              alt="후기 모음" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg transition-transform group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 확대 모달 */}
        {isImageExpanded && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsImageExpanded(false)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src="/후기모음.jpg"
              alt="후기 모음 확대"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={() => setIsImageExpanded(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated rounded-2xl p-8 md:p-10 text-center"
        >
          <div className="flex flex-col items-center gap-4 mb-6">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold text-lg">크몽 플랫폼 공식 데이터</h3>
              <p className="text-muted-foreground">700개 후기 올 만점</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-accent mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-medium">조작 불가능한 플랫폼 검증 완료</p>
          </div>
          <p className="text-sm text-muted-foreground mb-4 text-center">(이미지 클릭 시 확대 가능)</p>
          <div className="relative inline-block cursor-pointer group w-full" onClick={() => setIsKmongImageExpanded(true)}>
            <img 
              src="/크몽후기.jpg" 
              alt="크몽 후기" 
              className="w-full rounded-lg shadow-lg transition-transform group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 크몽 후기 확대 모달 */}
        {isKmongImageExpanded && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsKmongImageExpanded(false)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src="/크몽후기.jpg"
              alt="크몽 후기 확대"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={() => setIsKmongImageExpanded(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewInfoSection;
