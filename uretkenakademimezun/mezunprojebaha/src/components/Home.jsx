import React from "react";
import { Carousel } from "flowbite-react";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="haberler">
      <br></br>
      
      <h1
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: "32px",
        }}
      >
        HABERLER
      </h1>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                2023’ÜN YILDIZI;{" "}
                <span className="text-brandPrimary leading-snug">MEGA</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Meram Belediyesinin hayata geçirdiği yeni nesil eğitim projesi
                Meram Gelişim Akademisi (MEGA), her yıl 75 bin öğrencinin
                hayatına dokunuyor. Ahlaki karakter eğitimini merkeze alarak
                yeni nesli, yeni nesil eğitim yöntemleriyle tanıştıran ve bilim,
                sanat, yaşam, doğa, sağlık ve spor eğitimleriyle yeni bir çığır
                açan MEGA ortaya koyduğu projelerle her yıl olduğu gibi 2023’ün
                de yıldızı oldu.
              </p>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner2} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                2023’ÜN EN SAĞLIKLISI;{" "}
                <span className="text-brandPrimary leading-snug">MERAM</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Meram’da, son yıllarda sağlık alanında da dev adımlar atıldı. 70
                ünitlik Aksinne Beyhekim Ağız ve Diş Sağlığı Hastanesi’nin
                temeli atılırken yeni aile sağlığı merkezleri ve 112 acil
                müdahale merkezleriyle ilçe halkının sağlık alanında daha hızlı
                hizmet almasının önü açıldı.
              </p>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner3} alt="" />
            </div>

            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                2023’ÜN EN BÜYÜĞÜ;{" "}
                <span className="text-brandPrimary leading-snug">
                  ‘ŞÜKRAN KENTSEL DÖNÜŞÜM PROJESİ’
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Maliyeti, mahiyeti ve inşaat yoğunluğunun azaltılması bakımından
                Türkiye’ye örnek ve referans olan Şükran Kentsel Dönüşüm
                Projesi’nde son beş yılda tarihi adımlar atıldı. Toplam 163 bin
                metrekare alanı kapsayan Sahibata Mahallesi Şükran Kentsel
                Dönüşüm Projesi 2 milyar TL’yi aşan maliyetiyle Meram tarihinin
                en büyük, Konya’nın da bugüne kadarki en önemli projelerinden
                biri oldu.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
