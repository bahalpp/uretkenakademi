import React from "react";
import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div>
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
        id="kurumsal"
      >
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              TEMEL FELSEFEMİZ;
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Meram’a ve tüm hemşehrilerimize, her bir çalışanımızla, tevazu,
              samimiyet ve gayretle en iyi hizmeti sunmaktır. Bu düşünceyi,
              adaletli, özverili, katılımcı ve çözüm odaklı yaklaşım anlayışı
              ile kaynakları en etkili ve en verimli bir şekilde kullanıp gönül
              belediyeciliği anlayışı ile ahlak ve erdem kuralları çerçevesinde
              teknolojinin tüm imkânlarından da faydalanarak ortaya koyma
              gayretindeyiz. Dünü; yeniden ihya ederek ecdadın mirasına sahip
              çıkmak, bugünü; yaşam kalitesiyle özenilen ve yaşamaktan mutluluk
              duyulan bir ilçe haline getirmek, yarına da; her yönüyle mükemmel
              bir şehir bırakmak temel fikrimizdir…
            </p>
            <br></br>
            <br></br>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
              Rakamlarla <br />{" "}
              <span className="text-brandPrimary">bizim MERAM</span>
            </h2>
            <p>Bir yılda Bizim Meram’da neler oldu? </p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/group.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    815
                  </h4>
                  <p>Çalışanımız ile</p>
                  <span className="text-brandPrimary">sahada görevdeyiz</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/bahce.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,316,047
                  </h4>
                  <p>kişi</p>
                  <span className="text-brandPrimary">
                    ilçemizdeki park ve bahçeleri ziyaret etti.
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/click.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    612,832
                  </h4>
                  <p>kişi</p>
                  <span className="text-brandPrimary">
                    sitemizi ziyaret etti
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/heart.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    348,325
                  </h4>
                  <p>Meram'lı </p>
                  <span className="text-brandPrimary">
                    hemşehrimiz için Çalışıyoruz.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
