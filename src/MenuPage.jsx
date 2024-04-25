import React from "react";
import MenuTopSection from "./Images/MenuTopSection.svg";
import Logo from "./Images/Logo.svg";
import PyszneMenu from "./Images/PyszneMenu.svg";
import Pizza1 from "./Images/Pizza1.svg";

export const MenuPage = () => {
  const Triangle = ({ color = "brown" }) => {
    return (
      <div
        style={{
          flexGrow: 1,
          width: 0, // Początkowa szerokość może być ustawiona na 0
          paddingBottom: "1.5%", // Kontroluje wysokość trójkąta
          background: color,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
    );
  };

  const TriangleRow = ({ color, triangleCount = 50 }) => {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        {Array.from({ length: triangleCount }).map((_, index) => (
          <Triangle key={index} color={color} />
        ))}
      </div>
    );
  };

  return (
    <div className="font-inter">
      {/*SEKCJA GÓRNA */}
      <div>
        <img src={MenuTopSection} alt="ZDJĘCIE PIZZ" className="w-screen" />
        <img
          src={Logo}
          alt="Logo"
          className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/*SEKCJA ZAMÓWIENIA */}
      <div className="text-[35px] font-semibold leading-[55px] flex justify-center text-center mt-24 mb-24">
        <div className="">
          <div>
            <p>Zapraszamy do składania zamówień</p>
            <p>telefonicznie albo przez stronę pyszne.pl</p>
          </div>
          <div className="text-white mt-8 flex ml-4">
            <a className="text-[32px] font-semibold bg-[#343434] pt-6 pb-6 pl-8 pr-8 rounded-full mr-12">
              +48 572 172 272
            </a>
            <button className="bg-[#343434] rounded-full">
              <img
                src={PyszneMenu}
                alt="pysznepl"
                className="ml-8 mr-8 mt-4 mb-4 h-14"
              />
            </button>
          </div>
        </div>
      </div>

      {/*SEKCJA MENU */}
      <div>
        <div>
          <TriangleRow color="#343434" triangleCount={47} />
        </div>
        <div className="bg-[#343434] ">
          <div className="mt-[-2px] ml-16 mr-16 grid grid-cols-3 text-white">
            <div className="flex flex-col col-1 mt-32 place-items-center">
              <div className="bg-[#EBEBEB] w-max rounded-3xl">
                <img src={Pizza1} alt="pizza" />
              </div>
              <div className="w-max mr-40">
                <h1 className="mt-4 text-[28px] mb-[-4px] font-black">
                  MARGHARITA
                </h1>
                <p className="text-[14px] mb-4">sos pomidorowy, ser</p>
              </div>
              <div className="w-max grid grid-cols-3 mb-12 text-center ml-[-14px]">
                <div className="col-1">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
                <div className="col-1 border-r-2 border-l-2 px-8">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
                <div className="col-1">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col col-1 mt-32 place-items-center">
              <div className="bg-[#EBEBEB] w-max rounded-3xl">
                <img src={Pizza1} alt="pizza" />
              </div>
              <div className="w-max mr-40">
                <h1 className="mt-4 text-[28px] mb-[-4px] font-black">
                  MARGHARITA
                </h1>
                <p className="text-[14px] mb-4">sos pomidorowy, ser</p>
              </div>
              <div className="w-max grid grid-cols-3 mb-12 text-center ml-[-14px]">
                <div className="col-1">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
                <div className="col-1 border-r-2 border-l-2 px-8">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
                <div className="col-1">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col col-1 mt-32 place-items-center">
              <div className="bg-[#EBEBEB] w-max rounded-3xl">
                <img src={Pizza1} alt="pizza" />
              </div>
              <div className="w-max mr-40">
                <h1 className="mt-4 text-[28px] mb-[-4px] font-black">
                  MARGHARITA
                </h1>
                <p className="text-[14px] mb-4">sos pomidorowy, ser</p>
              </div>
              <div className="w-max grid grid-cols-3 mb-12 text-center ml-[-14px]">
                <div className="col-1">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
                <div className="col-1 border-r-2 border-l-2 px-8">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
                <div className="col-1">
                  <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                  <p className="text-[28px]">38 zł</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*SEKCJA NAPOJE I DODATKI */}
      <div></div>

      {/*STOPKA */}
      <footer></footer>
    </div>
  );
};
