import React from "react";
import baskanImage from "../assets/baskan_12.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Baskan = () => {
  return (
    
    <div className="my-12" id="baskan">
      <br></br>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={baskanImage} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto"
          >
            <h1 className="text-6xl text-brandPrimary">Mustafa KAVUŞ</h1>
            <h3 className="text-3xl text-brandPrimary">Meram Belediye Başkanı</h3>
            <br></br>
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Birlikte Yönetiyoruz
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Öğrenim hayatına Ali İhsan Dayıoğlugil İlkokulu'nda başlayan
              Mustafa KAVUŞ, orta ve lise öğrenimini ise Konya İmam Hatip
              Lisesi’nde bitirdi. 1995 yılında kazandığı Ankara Üniversitesi
              Siyasal Bilgiler Fakültesi İşletme Bölümü’nü başarıyla
              tamamlamasının ardından Selçuk Üniversitesi Yönetim Organizasyon
              Ana Bilim Dalı’nda yüksek lisans eğitimi aldı. Mustafa KAVUŞ,
              eğitim hayatının yanı sıra küçük yaştan itibaren iş hayatı
              tecrübesi kazanmaya çalıştı. Tekstil, yayınevi ve gıda
              sektörlerinde işletmecilik ve yöneticilik yaptı. Tüm bu
              çalışmalarının yanında siyasete de ilgi duyan Mustafa KAVUŞ, AK
              Parti ile başladığı siyasi yaşamında 2001-2003 yılları arasında AK
              Parti İl Gençlik Kolları Kurucu Teşkilatlanma Başkanı olarak görev
              yaptı. Siyasi tecrübesini 2003-2005 yıllarında İl Teşkilatı
              Yönetim Kurulu Üyesi olarak sürdüren KAVUŞ, 2011 genel
              seçimlerinde milletvekili aday adayı oldu. 2004 yılında Konya
              Büyükşehir Belediyesi Başkanlık danışmanlığına getirilen KAVUŞ,
              2006’da Teftiş Kurulu Müfettişliği’ne atandı. 2009 yılında
              getirildiği Teftiş Kurulu Başkanlığını 2018 yılına kadar sürdürdü.
              Çevre ve Şehircilik Bakanlığı’nda Bakan Müşaviri olarak görev
              yapmakta iken aday adaylığı başvurusu için istifa etti. 31 Mart
              2019 yerel seçimlerinde Meram Belediye Başkanı seçilen Mustafa
              KAVUŞ evli ve iki çocuk babasıdır.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Baskan;
