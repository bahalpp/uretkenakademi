import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Restore = () => {
  const rstr = [
    {
      id: 1,
      title: "Tantavi Kültür ve Sanat Merkezi",
      image: "/src/assets/restore2.png",
    },
    {
      id: 2,
      title: "Yıldız Köşkü Hariciyesi",
      image: "/src/assets/restore1.png",
    },
    {
      id: 3,
      title: "Gazezler Kültür Konağı",
      image: "/src/assets/restore3.png",
    },
  ];
  rstr.map((item) => (
    <div key={item.id}>
      <h2 className="italic hover:text-green-500">{item.title}</h2>
      <img src={item.image} alt={item.title} />
    </div>
  ));
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="restore">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Restore Çalışmalarımız
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Çalışmalarımızda gerçekleştirdiğimiz restore projelerimizle tarih,
          kültür ve estetiği bir araya getiriyoruz. Restorasyon süreçlerimizde,
          tarihi değer taşıyan eserlere hayat verirken, orijinal özelliklerini
          koruma misyonumuzu sürdürüyoruz. Mimari mirası canlandırmak ve gelecek
          nesillere aktarmak adına yürüttüğümüz bu çabalarımız, kültürel
          zenginliğimizi koruma ve paylaşma amacımıza hizmet etmektedir.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between mt-16"
      >
        {rstr.map((restore) => (
          <div
            key={restore.id}
            className="mx-auto relative mb-12 cursor-pointer"
          >
            <img
              src={restore.image}
              alt=""
              className="mx-auto hover:scale-95 transition-all duration-300"
            />

            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute -bottom-12 left-0 right-0">
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {restore.title}
              </h3>
              <div className="flex gap-8 items-center justify-center"></div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Restore;
