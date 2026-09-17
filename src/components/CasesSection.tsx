import { motion } from "framer-motion";

const cases = [
  { icon: "✨", title: "60번 상담하고 못푼걸 한방에 해결했어요", link: "https://cafe.naver.com/classictarot?iframe_url_utf8=%2FArticleRead.nhn%253Fclubid%3D18630613%2526articleid%3D24240%2526referrerAllArticles%3Dfalse" },
  { icon: "💑", title: "수년간 짝사랑 끝에, 덕분에 결혼합니다.", link: "https://cafe.naver.com/classictarot/22285" },
  { icon: "💰", title: "점보느라 1000만원 날렸는데 해결함요.", link: "https://cafe.naver.com/classictarot/23373" },
  { icon: "💖", title: "돈만 날렸다가 드디어 재회했어요.", link: "https://cafe.naver.com/classictarot/22299" },
  { icon: "💫", title: "2000만원 썼는데 여기서 해결했습니다.", link: "https://cafe.naver.com/classictarot/24211" },
  { icon: "🙏", title: "4년간 안좋았던 부부사이.. 좋아졌어요ㅜㅜ", link: "https://cafe.naver.com/classictarot/24216" },
];

const CasesSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-2xl md:text-4xl font-bold">
            이 기술로 관계를 해결한
            <br />
            <span className="text-gradient-gold">까페 후기들</span>
            <br />
            <span className="text-base md:text-lg font-normal text-muted-foreground">(클릭하면 원본이 보입니다)</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cases.map((item, index) => {
            const Component = item.link ? motion.a : motion.div;
            const linkProps = item.link ? {
              href: item.link,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {};

            return (
              <Component
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated rounded-xl p-5 flex items-center gap-4 hover:border-accent/50 transition-colors duration-300 cursor-pointer group"
                {...linkProps}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-sm md:text-base">{item.title}</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
