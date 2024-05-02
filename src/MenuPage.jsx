import React from "react";
import MenuTopSection from "./Images/MenuTopSection.svg";
import Logo from "./Images/Logo.svg";
import PyszneMenu from "./Images/PyszneMenu.svg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPizza } from "./API/Posts";
import footerLogo from "./Images/LogoDark.svg";
import Telephone from "./Images/Telephone.svg";
import FB from "./Images/FBDark.svg";
import ButtonPyszne from "./Images/PysznePLDark.svg";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

export const MenuPage = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();



  const postQuery = useQuery({
    queryKey: ["pizza"],
    queryFn: () => fetchPizza(),
  });

  if (postQuery.isLoading) {
    return <Loading/>
  }

  if (postQuery.isError) {
    return <div>error</div>;
  }

  const data = postQuery.data.data;

  const scrollToTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

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
        <div>
          <div>
            <p>Zapraszamy do składania zamówień</p>
            <p>telefonicznie albo przez stronę pyszne.pl</p>
          </div>
          <div className="text-white mt-8 flex ml-4">
            <a href="tel:+48 572 172 272" className="text-[32px] font-semibold bg-[#343434] pt-6 pb-6 pl-8 pr-8 rounded-full mr-12">
              +48 572 172 272
            </a>
            <button className="bg-[#343434] rounded-full">
              <img
                src={PyszneMenu}
                alt="pysznepl"
                onClick={()=> window.open('https://www.pyszne.pl/menu/la-stazione-miliardowicka?&adj_tracker=5rz7oa4&adj_campaign=11848902408&k1111=k1111&campaignname=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleu74yA_LEE7YpfucIw4rgcRzguOmxXQ1Ry3e02gSw3wyUBv15VI70MaAmaJEALw_wcB&gclsrc=aw.ds')}
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
        <div className="bg-[#343434] mt-[-2px] flex-row justify-center w-full pb-12">
          <ul className="grid md:grid-cols-2 l:grid-cols-3 text-white l:w-[95%] xl:w-[75%] my-0 mx-auto">
            {data.map((pizza) => {
              return (
                <li
                  key={pizza.id}
                  className="flex flex-col col-span-1 mt-20 mb-[-40px] place-items-center"
                >
                  <div className="bg-[#EBEBEB] w-max rounded-3xl">
                    <img
                      src={`https://strapi.krysta.dev${pizza.attributes.photo.data.attributes.url}`}
                      alt="pizza"
                    />
                  </div>
                  <div className="l:w-[75%]">
                    <h1 className="mt-4 text-[28px] mb-[-4px] font-black">
                      {pizza.attributes.name}
                    </h1>
                    <p className="text-[14px] mb-4 break-words">
                      {pizza.attributes.ingredients}
                    </p>
                  </div>
                  <div className="w-max grid grid-cols-3 mb-12 text-center ml-[-14px]">
                    <div className="col-span-1">
                      <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                      <p className="text-[28px]">
                        {pizza.attributes.priceSmall}zł
                      </p>
                    </div>
                    <div className="col-span-1 border-r-2 border-l-2 px-8">
                      <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                      <p className="text-[28px]">
                        {pizza.attributes.priceMedium}zł
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-[16px] font-thin mb-[-4px]">32 cm</p>
                      <p className="text-[28px]">
                        {pizza.attributes.priceBig}zł
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          {/*SEKCJA NAPOJE I DODATKI */}
          <div className="mt-24 grid grid-cols-2 lg:w-[90%] xl:w-[70%] mx-auto mb-12">
            <div className="bg-white col-span-1 mr-16 ml-16 rounded-3xl overflow-hidden">
              <div>
                <h1 className="text-[24px] font-black m-0 w-full bg-[#D9D9D9] px-6 py-4 rounded-t-3xl">
                  DODATKI
                </h1>
                <div className="px-6 mt-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[24px] font-medium mb-[-8px]">sosy:</p>
                      <p className="text-[14px] mb-2">
                        pomidorowy, czosnkowy, meksykański
                      </p>
                    </div>
                    <div>
                      <p className="text-[24px] font-medium">3 zł</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[24px] font-medium">dodatek serowy</p>
                    <p className="text-[24px] font-medium">8/10/14 zł</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[24px] font-medium">dodatek mięsny</p>
                    <p className="text-[24px] font-medium">6/8/9 zł</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[24px] font-medium mb-8">
                      dodatek warzywny
                    </p>
                    <p className="text-[24px] font-medium">6/7/8 zł</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white col-span-1 mr-16 ml-16 rounded-3xl overflow-hidden">
              <div>
                <h1 className="text-[24px] font-black m-0 w-full bg-[#D9D9D9] px-6 py-4 rounded-t-3xl">
                  NAPOJE
                </h1>
                <div className="px-6 mt-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[24px] font-medium mb-[-8px]">Kropla beskidu</p>
                      <p className="text-[14px] mb-2">
                        gazowania/niegazowana
                      </p>
                    </div>
                    <div>
                      <p className="text-[24px] font-medium">6 zł</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[24px] font-medium mb-[-8px]">Coca-Cola</p>
                      <p className="text-[14px]">
                        500ml/850ml
                      </p>
                    </div>
                    <div>
                      <p className="text-[24px] font-medium">7/10 zł</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[24px] font-medium">Fanta</p>
                    <p className="text-[24px] font-medium">7 zł</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[24px] font-medium mb-8">
                      Sprite
                    </p>
                    <p className="text-[24px] font-medium">7 zł</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*STOPKA*/}
      <footer className="grid grid-cols-3 text-black ">
        <div className="col-1 font-thin ml-24 mt-4">
          <p className="mb-4 cursor-pointer" onClick={() => navigate('/')}>strona główna</p>
          <p className="cursor-pointer" onClick={scrollToTop}>menu</p>
        </div>
        <div className="col-1 flex flex-col text-center">
          <img src={footerLogo} alt="logo" className="mb-4 mt-4 h-32 cursor-pointer" onClick={scrollToTop} />
          <p className="mb-4 text-[10px]">
            COPYRIGHT 2024 © ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="col-1 flex flex-col mt-8 ml-24">
          <div className="flex">
            <a className="flex" href="tel:+48 572 172 272">
              <img src={Telephone} alt="ikona telefonu" />
              <h1 className="text-[32px] ml-2">+48 572 172 272</h1>
            </a>
          </div>
          <div>
            <p className="text-[14px] font-thin ml-12">
              Boisko, 43-392 Międzyrzecze Dolne
            </p>
          </div>
          <div className="flex ml-12 mt-2">
            <button onClick={()=> window.open('https://www.pyszne.pl/menu/la-stazione-miliardowicka?&adj_tracker=5rz7oa4&adj_campaign=11848902408&k1111=k1111&campaignname=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleu74yA_LEE7YpfucIw4rgcRzguOmxXQ1Ry3e02gSw3wyUBv15VI70MaAmaJEALw_wcB&gclsrc=aw.ds')}>
              <img src={ButtonPyszne} alt="przycisk pyszne.pl" />
            </button>
            <button onClick={() => window.open('https://www.facebook.com/pizzerialastazion')}>
              <img src={FB} alt="facebook" className="ml-10" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
