import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPizza} from "./API/Posts";
import { Toppings } from "./Toppings";
import React, { useMemo } from "react";
import MenuTopSection from "./Images/MenuTopSection.png";
import Logo from "./Images/Logo.svg";
import PyszneMenu from "./Images/PyszneMenu.png";
import footerLogo from "./Images/LogoDark.svg";
import FB from "./Images/FBDark.svg";
import ButtonPyszne from "./Images/PysznePLDark.png";
import LoadingPizza from "./Images/LoadingPizza.png";


export const MenuPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: pizzasData,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pizza"],
    queryFn: () => fetchPizza(),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    onError: (err) => {
      console.error("Error fetching toppings:", err);
    },
  });

  if (isError) {
    console.error("Error fetching toppings: ", error?.message);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Triangle = React.memo(({ color = "brown" }) => {
    return (
      <div
        style={{
          flexGrow: 1,
          width: 0,
          paddingBottom: "1.5%",
          background: color,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
    );
  });

  const TriangleRow = React.memo(({ color, triangleCount = 50 }) => {
    const triangles = useMemo(() => {
      return Array.from({ length: triangleCount }).map((_, index) => (
        <Triangle key={index} color={color} />
      ));
    }, [color, triangleCount]);

    return <div style={{ display: "flex", width: "100%" }}>{triangles}</div>;
  });

  return (
    <div className="font-inter">
      {/*SEKCJA GÓRNA */}
      <div>
        <img src={MenuTopSection} alt="ZDJĘCIE PIZZ" className="w-full" />
        <img
          onClick={() => {
            navigate("https://lastazionepizzeria.pl/");
          }}
          src={Logo}
          alt="Logo"
          className="cursor-pointer absolute sm:w-[20%] md:w-[20%] sm:top-[9%] md:top-[20%] l:top-[22%] xl:top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/*SEKCJA ZAMÓWIENIA */}
      <div className="sm:text-[25px] md:text-[35px] l:text-[35px] xl:text-[40px] font-semibold leading-[55px] flex justify-center text-center mt-24 mb-24 ml-2 mr-2">
        <div>
          <div>
            <p>Zapraszamy do składania zamówień</p>
            <p>telefonicznie albo przez stronę pyszne.pl</p>
          </div>
          <div className="text-white mt-8 flex sm:flex-col sm:items-center md:flex-row md:ml-6 l:ml-20">
            <a
              href="tel:+48 572 172 272"
              className="sm:text-[20px] md:text-[32px] font-semibold bg-[#343434] sm:pt-2 sm:pb-2 sm:pl-11 sm:pr-11 md:pt-4 md:pb-4 md:pl-6 md:pr-6 md:mr-12 l:pt-4 l:pb-4 l:pl-6 l:pr-6 l:mr-2 xl:pt-4 xl:pl-6 xl:pr-6 xl:mr-2 xl:ml-8 rounded-full "
            >
              +48 572 172 272
            </a>
            <div
              className="bg-[#343434] rounded-full sm:flex sm:justify-center sm:w-[250px] md:w-[45%] l:w-[45%] xl:w-[45%] sm:mt-4 sm:pt-2 sm:pb-2 md:pt-3 md:pl-6 md:pr-6 md:ml-3 md:pb-2 l:pt-3 l:pl-6 l:pr-6 l:ml-3 l:pb-2 xl:pt-3 xl:pl-6 xl:pr-6 xl:ml-3 xl:pb-3"
              onClick={() =>
                window.open(
                  "https://www.pyszne.pl/menu/la-stazione-miliardowicka?&adj_tracker=5rz7oa4&adj_campaign=11848902408&k1111=k1111&campaignname=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleu74yA_LEE7YpfucIw4rgcRzguOmxXQ1Ry3e02gSw3wyUBv15VI70MaAmaJEALw_wcB&gclsrc=aw.ds"
                )
              }
            >
              <img
                src={PyszneMenu}
                alt="pysznepl"
                className="md:pr-8 md:pl-8 md:h-14 l:pr-8 l:pl-8 xl:pr-8 xl:pl-8 md:h-14 md:w-[100%] sm:w-[60%] sm:pb-2 sm:pt-2 "
              />
            </div>
          </div>
        </div>
      </div>

      {/*SEKCJA MENU */}
      <div>
        <div>
          <TriangleRow color="#343434" triangleCount={47} />
        </div>
        <div className="bg-[#343434] mt-[-2px] flex-row justify-center w-full pb-12">
        {isLoading ? (
            <div className="col-span-2 flex flex-col justify-center items-center">
              <h1 className="text-white text-[20px] text-center mt-24">Wczytywanie menu...</h1>
              <img
                src={LoadingPizza}
                alt="Wczytywanie"
                className="w-[150px] mx-auto animate-spin-slow "
              />
            </div>
          ) : (
            <ul className="grid sm:grid-cols-1 md:grid-cols-2 l:grid-cols-3 xl:grid-cols-3 text-white sm:w-[80%] md:w-[80%] l:w-[70%] xl:w-[65%] my-0 mx-auto">
              {pizzasData.data.map((pizza) => {
                return (
                  <li
                    key={pizza.id}
                    className="flex flex-col col-span-1 mt-20 mb-[-40px] place-items-center"
                  >
                    <div className="flex flex-col items-center px-4 w-full max-w-md">
                      <div className="bg-[#EBEBEB] rounded-3xl w-full">
                        <img
                          src={`https://api.lastazionepizzeria.pl${pizza.attributes.photo.data.attributes.url}`}
                          alt="pizza"
                          className="w-full"
                        />
                      </div>
                      <div className="text-left mt-4 w-full ml-2 min-h-[90px]">
                        <h1 className="text-[28px] mb-[-4px] font-black">
                          {pizza.attributes.name}
                        </h1>
                        <p className="text-[14px] mb-4 break-words">
                          {pizza.attributes.ingredients}
                        </p>
                      </div>
                      <div className="w-[110%] grid grid-cols-3 text-center">
                        <div>
                          <p className="sm:text-[12px] md:text-[14px] l:text-[16px] xl:text-[20px] font-thin mb-[-4px]">
                            32 cm
                          </p>
                          <p className="sm:text-[19px] md:text-[22px] l:text-[26px] xl:text-[32px]">
                            {pizza.attributes.priceSmall} zł
                          </p>
                        </div>
                        <div className="border-r-2 border-l-2 sm:px-4 md:px-6">
                          <p className="sm:text-[12px] md:text-[14px] l:text-[16px] xl:text-[20px] font-thin mb-[-4px]">
                            45 cm
                          </p>
                          <p className="sm:text-[19px] md:text-[22px] l:text-[26px] xl:text-[32px]">
                            {pizza.attributes.priceMedium} zł
                          </p>
                        </div>
                        <div>
                          <p className="sm:text-[12px] md:text-[14px] l:text-[16px] xl:text-[20px] font-thin mb-[-4px]">
                            60 cm
                          </p>
                          <p className="sm:text-[19px] md:text-[22px] l:text-[26px] xl:text-[32px]">
                            {pizza.attributes.priceBig} zł
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {/*SEKCJA NAPOJE I DODATKI */}
          <div className="mt-24 sm:w-[90%] md:w-[85%] l:w-[75%] xl:w-[65%] mx-auto mb-12">
            <Toppings></Toppings>
          </div>
        </div>
      </div>

      {/*STOPKA*/}
      <footer className="grid sm:text-center sm:grid-cols-1 md:grid-cols-3 l:grid-cols-3 xl:grid-cols-3 text-black ">
        <div className="col-1 font-thin md:ml-10 l:ml-10 xl:ml-12 mt-4">
          <p
            className="mb-4 cursor-pointer"
            onClick={() => navigate("https://lastazionepizzeria.pl/")}
          >
            strona główna
          </p>
          <p className="cursor-pointer sm:mb-4" onClick={scrollToTop}>
            menu
          </p>
        </div>
        <div className="col-1 flex flex-col text-center">
          <img
            src={footerLogo}
            alt="logo"
            className="mb-4 mt-4 h-32 cursor-pointer"
            onClick={scrollToTop}
          />
          <p className="mb-4 text-[10px]">
            COPYRIGHT 2024 © ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="col-1 flex flex-col mt-8 md:ml-10 l:ml-36 xl:ml-56">
          <div className="flex sm:justify-center">
            <a className="flex" href="tel:+48 572 172 272">
              <h1 className="md:text-[24px] l:text-[32px] xl:text-[32px]">
                +48 572 172 272
              </h1>
            </a>
          </div>
          <div>
            <p className="text-[14px] font-thin">
              Boisko, 43-392 Międzyrzecze Dolne
            </p>
          </div>
          <div className="flex mt-2 sm:justify-center sm:mb-4 l:ml-12">
            <button
              onClick={() =>
                window.open(
                  "https://www.pyszne.pl/menu/la-stazione-miliardowicka?&adj_tracker=5rz7oa4&adj_campaign=11848902408&k1111=k1111&campaignname=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleu74yA_LEE7YpfucIw4rgcRzguOmxXQ1Ry3e02gSw3wyUBv15VI70MaAmaJEALw_wcB&gclsrc=aw.ds"
                )
              }
            >
              <img src={ButtonPyszne} alt="przycisk pyszne.pl" />
            </button>
            <button
              onClick={() =>
                window.open("https://www.facebook.com/pizzerialastazion")
              }
            >
              <img src={FB} alt="facebook" className="ml-10" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
