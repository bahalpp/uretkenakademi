import React from "react";
import { Footer, Label, TextInput } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer className="bg-neutralBlack text-white">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>MERAM BELEDİYESİ</span>
            </a>
            <div className="my-8">
              <p className="mb-1">#2024 alprN </p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
              <Footer.Icon
                href="https://www.linkedin.com/in/muhammetalperener/"
                icon={FaLinkedin}
                className="text-white"
              />

              <Footer.Icon
                href="https://github.com/alprNer"
                icon={BsGithub}
                className="text-white"
              />
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Alperen ER" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/alprNer"
                  className="text-white"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/muhammetalperener/"
                  className="text-white"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Meram Belediyesi" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.meram.bel.tr/iletisim"
                  className="text-white"
                >
                  İletişim
                </Footer.Link>
                <h5 className="text-white">444 3 042</h5>
              </Footer.LinkGroup>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
