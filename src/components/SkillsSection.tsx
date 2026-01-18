import { motion } from "framer-motion";

const skills = [
  { num: "1", text: "날 얼마나 좋아하는지?" },
  { num: "2", text: "날 생각하면 어떤 감정이 드는지?" },
  { num: "3", text: "감정의 깊이는 어느정도인지?" },
  { num: "4", text: "나에게 왜 그런 행동을 하는지?" },
  { num: "5", text: "나에게 진짜 바라는게 무엇인지?" },
];

const SkillsSection = () => {
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
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-6">
            이 모든 것을 <span className="text-gradient-primary">정확하게</span> 읽습니다
          </h2>
        </motion.div>

        <div className="grid gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-xl p-6 flex items-center gap-6 hover:border-primary/50 transition-colors duration-300"
            >
              <span className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                {skill.num}
              </span>
              <p className="text-lg md:text-xl font-medium">{skill.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 text-lg"
        >
          저는 이 모든걸 100% 정확하게 읽는게 가능하며
          <br />
          그것을 <span className="text-accent font-semibold">'증명'</span>해 드립니다.
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsSection;
