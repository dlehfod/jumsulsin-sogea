import { motion } from "framer-motion";

const NotForSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">
            아무나 받지 않습니다.
          </h2>
          <p className="text-muted-foreground">(마케팅 문구 아님)</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground mb-10 text-lg"
        >
          한정된 집중력 탓에
          <br />
          하루 상담 횟수는 <span className="text-foreground font-semibold">5 ~ 6회</span>가 다입니다.
        </motion.p>

        <div className="space-y-4">
          {[
            "저가 상담에 익숙해서 여기저기 다니는 분",
            "본인의 문제를 직시할 용기가 없으신 분",
            "상담이 없어도 풀 수 있는 정도의 문제인 분",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-xl p-5 flex items-center gap-4"
            >
              <span className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold text-sm">
                {index + 1}
              </span>
              <p className="text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted-foreground mt-10"
        >
          이런 분들은 다른 데서 상담하길 바랍니다.
        </motion.p>
      </div>
    </section>
  );
};

export default NotForSection;
