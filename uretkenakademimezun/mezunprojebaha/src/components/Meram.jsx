import React from "react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import meram1 from "../assets/meram1.png";
import meram2 from "../assets/meram2.png";
import meram3 from "../assets/meram3.png";
import meram4 from "../assets/meram4.png";


function Meram() {
  return (
    <div className=" bg-neutralSilver" id="meram">
      <br></br>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={meram2} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Tarihin Sessiz Tanığı{" "}
                <span className="text-brandPrimary leading-snug">
                  Meram Köprüsü
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Meram Köprüsü, 13. yüzyılda Selçuklu döneminde inşa edilmiştir
                ve günümüze kadar ayakta kalmayı başarmıştır. Köprü, Konya'nın
                tarihi ve kültürel mirasının önemli bir parçası olarak kabul
                edilmektedir. Meram Köprüsü, mimari yapısı ve tarihi dokusuyla
                ziyaretçilerin ilgisini çeken bir turistik mekandır. Konya'da
                gezilecek yerler arasında önemli bir yere sahiptir ve bölgenin
                tarihine dair önemli ipuçları sunmaktadır.
              </p>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={meram3} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Meram’ın Büyülü Dünyası{" "}
                <span className="text-brandPrimary leading-snug">
                  80 BİNDE DEVRİ ALEM
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Her yaş grubuna hitap etme hedefiyle 2014'te kurulan park, her
                yıl yüz binlerce ziyaretçiyi ağırlıyor. Park, yeni tip
                koronavirüs (Kovid-19) tedbirleri kapsamındaki kısıtlamalar ve
                "kontrollü sosyal hayat" uygulamaları nedeniyle geçen yıl
                ziyaretçi sayısı düşse de geniş ve açık alanı ile dışarıda vakit
                geçirmek isteyenlere uygun ortam sunuyor. Meram Belediye Başkanı
                Mustafa Kavuş, AA muhabirine, açık alana kurulu parkın
                özellikleri ile Türkiye'de özel bir konumu bulunduğunu belirtti.
                Parkın öneminin herkesin eve kapanığı bir ortamda daha da
                arttığını ifade eden Kavuş, şunları kaydetti: "Çocukların dışarı
                çıkmak için kısıtlı zamanları var. Dar bir zaman diliminde geniş
                ve açık alanıyla sosyal mesafeyi ihlal etmeden rahatça gezilecek
                bir mekana sahibiz. Daha büyük parklar Türkiye'de var ancak
                Türkiye'de bu özelliklere sahip başka park yok.
              </p>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={meram1} alt="" />
            </div>

            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                {" "}
                <span className="text-brandPrimary leading-snug">
                  Meram Bağları
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Meramımızda bulunan ve aynı ismi alan Meram Bağları, şehrin en
                gezilesi ve dinlenilesi yerlerinden biridir. Konya’nın akciğeri
                olarak tanımlanan Meram Bağları, tarih boyunca doğal
                güzelliklerinden bahsettirmiştir. Konya gezinizde bu muhteşem
                mesire yerine gidip doğanın içerisinde mutlaka piknik
                yapmalısınız. İçinizi yeni enerjiyle dolduracak olan Meram
                Bağları’nın ortasından Meram Deresi akar. Bu bölgede İkinci
                Haçlı Seferi’nde haçlı ordusunun dinlendiği hakkında bilgiler
                vardır. Konya; Mevlana Türbesi’yle, Fasıllar Anıtı’yla,
                Tınaztepe Mağarası’yla ve Karapınar Çölü’yle turizm açısından
                oldukça önemli bir şehirdir. Bolca yeni yerler keşfedeceğiniz
                Konya’da Meram Bağları’nın güzelliklerine şahit olmadan gezinizi
                sonlandırmayın.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="meram">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={meram4} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <p className="md:w-3/4 text-m text-neutralGrey mb-8">
              Meram, Selçuklu Konyası’nın kültür tarihine unutulmaz hatıralar
              kazandırmıştır. Altınapa Barajı’ndan gelen Meram Deresi
              etrafındaki çamlıklar, çay bahçeleri, piknik alanları ve dinlenme
              tesislerinden oluşan bir mesire yeridir2. Yazın en sıcak
              günlerindeki serin, esintili ve çam kokulu havası, akarsuyu, gül
              bahçeleri ve ormanlık alanlarıyla yerli ve yabancı misafirlerin
              dinlenme yeri olmuştur2. Meram, modern araçlar, çağdaş yönetim,
              kurum ve kuruluşlara erişmiştir. Çağdaş imkânlar, elektrik, su,
              yol, ulaşım, Meram’a ve Meramlı’ya daha rahat ve kolay yaşama
              sevinci ve huzuru vermiştir34. Yeni okullar, hastaneler,
              kütüphaneler hizmete sunulmuştur.
            </p>
            <br></br>
            <br></br>
          </motion.div>
        </div>
      </div>
      <br></br>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="meram">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Meram'ın Adı
            </h2>
            <p className="md:w-7/8 text-xl text-neutralGrey mb-12">
              Meram kelimesi, Konyalıca; “Amaç, arzu, hedef, gaye, tema”
              anlamlarında. Herkesin görmek, kavuşmak, gezmek, yaşamak için can
              attığı bu cennet mesireliğin özel adı olmuş. Böylece anıla gelmiş.
              Bu adla tarihlere, belgelere, vakfiyelere, seyahat-nâmelere,
              kitaplara, şiirlere geçmiş, dilden dile, gönülden gönüle yayılmış.
              Meram, şehir merkezinin batısında 8 km. mesâfede. Batıdaki Loras
              Dağı’nın dik meyilli çıplak yamaçları ile bu yamaçların doğu
              eteklerinde Konya yönüne doğru yelpaze gibi açılan bir yeşillikler
              armonisi. Bu yeşilliklerle kaplı yamaçların yanı sıra Konya
              ovasının bu taraftaki düzlüğünün bir kısmını da içine alır. Meram
              asıl güzelliğini, kişiliğini ve dillere destan ününü, Selçuklular
              zamanında alır. Bu güzellikler, Karamanoğulları, Osmanlılar ve
              Cumhuriyet dönemlerinde artan bir câzibe ve efsunkârlıkla devam
              eder gelir. Selçuklu Konyasını dışardan kuşatan surların oniki
              kapısından biri Meram’a giden yola açılıyordu ve adı da “Meram
              Kapısı” idi. Meram’ın Mevlâna’lı ve Mevlevîli asırları, Selçuklu
              başkenti Konya’nın kültür tarihine unutulmaz hatıralar
              kazandırmış. Akan suya, açan çiçeğe, kokan güle, yeşeren yaprağa
              sinen; esen melteme karışan; aşk, mânâ, marifet dolu tadına
              doyulmaz sohbetler, satırlarda ve dillerde yerini almış. Mimariye
              geçmiş, Meram’daki mescidlerin, türbelerin, daru’l-huffâzların
              (hâfız mektepleri), evlerin, konakların taşına, mermerine,
              ahşabına, harcına karışmış, bize kadar gelmiş. Karamanoğulları
              dönemindeki aşk, şevk ve zevk günlerinin mimarideki tecellisi,
              Hasbeyoğlu Mescidi’ni, Daru’l-huffâzı’nı, Hamamını bize armağan
              etmiş. Osmanlı asırlarındaki Meram bir başka güzellik, bir başka
              lâtafet, bir başka zarâfette. O kadar efsunkâr ki, Konya’ya gelen
              ünlü misafirler, beyler, şehzâdeler, sultanlar, Meram’da
              ağırlanıyorlar. Sultan IV. Murad, 1637 Haziran’ındaki gelişinde
              Meram Bağları’nda dinlenir. Mektep, mescid, türbe, konak,
              değirmen, fırın, dükkân ve çarşılarla donatılmış. Meram’a yerleşip
              kışlayan ailelerin çocukları için “Cedidiyye”, “Hadika-i Maarif”,
              “Sefiyye” adında okullar açılmış. Cumhuriyet yıllarında yeni
              güzellikler, imkânlar elde eder, Meram. Modern araçlar, çağdaş
              yönetim, kurum ve kuruluşlara erişir. Çağdaş imkânlar, elektrik,
              su, yol, ulaşım, Meram’a ve Meramlı’ya daha rahat ve kolay yaşama
              sevinci ve huzuru verir. Yeni okullar, hastaneler, kütüphaneler
              hizmete sunulur. Dağların gerisinden toparlanıp gelen ve Loras ile
              Takkeli Dağları’nın eteklerinden coşan ırmağın binlerce yüzyıldan
              beri aka aka meydana getirdiği dere vadisinin, Konya Ovası’na
              açılan ağzına kurulmuş Meram, yemyeşil çimenler, koyu gölgesi
              asırlık ağaçla
            </p>
            <br></br>
            <br></br>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Meram;
