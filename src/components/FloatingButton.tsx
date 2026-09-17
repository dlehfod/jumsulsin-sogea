import { motion } from "framer-motion";

const KAKAO_LINK = "https://postfiles.pstatic.net/MjAyNTExMTRfMTAw/MDAxNzYzMTAxOTIwMzg1.XTDLovn21ANv8IYDZYw1VWFt391DO9HotOvWS4ufoZsg.pvBXrL1-tAJWfghm_MRnT7Upr3Ibk5_w76icXRc1IzAg.JPEG/KakaoTalk_20211023_005400236.jpg?type=w580";

const FloatingButton = () => {
  return (
    <motion.a
      href={KAKAO_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-5 py-3 rounded-full shadow-lg glow-primary hover:shadow-xl transition-shadow"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.48 3 2 6.58 2 11c0 2.82 1.89 5.29 4.71 6.71L5.29 21.3a.5.5 0 00.76.54l4.4-2.93c.51.06 1.03.09 1.55.09 5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
      </svg>
      <span className="hidden sm:inline">상담문의</span>
    </motion.a>
  );
};

export default FloatingButton;
