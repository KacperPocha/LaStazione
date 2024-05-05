import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPizza, fetchToppings } from "./API/Posts";
import React from "react";
import MenuTopSection from "./Images/MenuTopSection.png";
import Logo from "./Images/Logo.svg";
import PyszneMenu from "./Images/PyszneMenu.svg";
import footerLogo from "./Images/LogoDark.svg";
import FB from "./Images/FBDark.svg";
import ButtonPyszne from "./Images/PysznePLDark.svg";

export const MenuPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const postQuery = useQuery({
    queryKey: ["pizza"],
    queryFn: () => fetchPizza(),
  });

  const postToppings = useQuery({
    queryKey: ["topping"],
    queryFn: () => fetchToppings(),
  });

  if (postToppings.isLoading) {
    return <Loading />;
  }

  if (postToppings.isError) {
    return <div>error</div>;
  }

  if (postQuery.isLoading) {
    return <Loading />;
  }

  if (postQuery.isError) {
    return <div>error</div>;
  }

  const dataToppings = postToppings.data.data;
  const data = postQuery.data.data;

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
          src={Logo}
          alt="Logo"
          className="absolute sm:w-[20%] md:w-[20%] sm:top-[9%] md:top-[20%] l:top-[22%] xl:top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/*SEKCJA ZAMÓWIENIA */}
      <div className="sm:text-[30px] md:text-[35px] l:text-[35px] xl:text-[40px] font-semibold leading-[55px] flex justify-center text-center mt-24 mb-24 ml-2 mr-2">
        <div>
          <div>
            <p>Zapraszamy do składania zamówień</p>
            <p>telefonicznie albo przez stronę pyszne.pl</p>
          </div>
          <div className="text-white mt-8 flex sm:flex-col sm:items-center md:flex-row md:ml-6 l:ml-20">
            <a
              href="tel:+48 572 172 272"
              className="sm:text-[25px] md:text-[32px] font-semibold bg-[#343434] sm:pt-2 sm:pb-2 sm:pl-11 sm:pr-11 md:pt-4 md:pb-4 md:pl-4 md:pr-4 md:mr-12 l:pt-4 l:pb-4 l:pl-4 l:pr-4 l:mr-2 xl:pt-4 xl:pl-4 xl:pr-4 xl:mr-2 xl:ml-8 rounded-full "
            >
              +48 572 172 272
            </a>
            <div
              className="bg-[#343434] rounded-full sm:flex sm:justify-center sm:w-[50%] md:w-[45%] l:w-[45%] xl:w-[45%] sm:mt-4 sm:pt-2 sm:pb-2 md:pt-3 md:pl-6 md:pr-6 md:ml-3 md:pb-2 l:pt-3 l:pl-6 l:pr-6 l:ml-3 l:pb-2 xl:pt-3 xl:pl-6 xl:pr-6 xl:ml-3 xl:pb-3"
              onClick={() =>
                window.open(
                  "https://www.pyszne.pl/menu/la-stazione-miliardowicka?&adj_tracker=5rz7oa4&adj_campaign=11848902408&k1111=k1111&campaignname=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleu74yA_LEE7YpfucIw4rgcRzguOmxXQ1Ry3e02gSw3wyUBv15VI70MaAmaJEALw_wcB&gclsrc=aw.ds"
                )
              }
            >
              <img
                src={PyszneMenu}
                alt="pysznepl"
                className="md:pr-8 md:pl-8 md:h-14 l:pr-8 l:pl-8 xl:pr-8 xl:pl-8 md:h-14 md:w-[100%] sm:w-[50%] sm:pb-2 sm:pt-2 "
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
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 l:grid-cols-3 xl:grid-cols-3 text-white md:w-[90%] l:w-[95%] xl:w-[75%] my-0 mx-auto">
            {data.map((pizza) => {
              return (
                <li
                  key={pizza.id}
                  className="flex flex-col col-span-1 mt-20 mb-[-40px] place-items-center"
                >
                  <div className="flex flex-col items-center px-4 w-full max-w-md">
                    <div className="bg-[#EBEBEB] rounded-3xl w-full">
                      <img
                        src={`https://strapi.krysta.dev${pizza.attributes.photo.data.attributes.url}`}
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
                        <p className="sm:text-[14px] md:text-[16px] l:text-[20px] xl:text-[20px] font-thin mb-[-4px]">
                          32 cm
                        </p>
                        <p className="sm:text-[22px] md:text-[28px] l:text-[32px] xl:text-[32px]">
                          {pizza.attributes.priceSmall} zł
                        </p>
                      </div>
                      <div className="border-r-2 border-l-2 sm:px-4 md:px-6">
                        <p className="sm:text-[14px] md:text-[16px] l:text-[20px] xl:text-[20px] font-thin mb-[-4px]">
                          45 cm
                        </p>
                        <p className="sm:text-[22px] md:text-[28px] l:text-[32px] xl:text-[32px]">
                          {pizza.attributes.priceMedium} zł
                        </p>
                      </div>
                      <div>
                        <p className="sm:text-[14px] md:text-[16px] l:text-[20px] xl:text-[20px] font-thin mb-[-4px]">
                          60 cm
                        </p>
                        <p className="sm:text-[22px] md:text-[28px] l:text-[32px] xl:text-[32px]">
                          {pizza.attributes.priceBig} zł
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/*SEKCJA NAPOJE I DODATKI */}
          <div className="mt-24 grid sm:grid-cols-1 md:grid-cols-2 l:grid-cols-2 xl:grid-cols-2 mx-auto mb-12">
            <div className="bg-white col-span-1 sm:mb-4 sm:m-2 md:mr-5 md:ml-12 l:ml-12 l:mr-12 xl:ml-64 xl:mr-24 rounded-3xl overflow-hidden">
              <div>
                <h1 className="text-[24px] font-black m-0 w-full bg-[#D9D9D9] px-6 py-4 rounded-t-3xl">
                  DODATKI
                </h1>
                <div className="px-6 mt-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium mb-[-8px]">
                        sosy:
                      </p>
                      <p className="sm:text-[10px] md:text-[11px] l:text-[16px] mb-2">
                        pomidorowy, czosnkowy, meksykański
                      </p>
                    </div>
                    <div>
                      <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                        {dataToppings[0].attributes.sos}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                      dodatek serowy
                    </p>
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                      {dataToppings[0].attributes.cheese}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                      dodatek mięsny
                    </p>
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                      {dataToppings[0].attributes.meat}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium mb-8">
                      dodatek warzywny
                    </p>
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                      {dataToppings[0].attributes.vegetables}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white col-span-1 sm:m-2 md:mr-12 md:ml-5 l:ml-12 l:mr-12 xl:ml-24 xl:mr-64 rounded-3xl overflow-hidden">
              <div>
                <h1 className="text-[24px] font-black m-0 w-full bg-[#D9D9D9] px-6 py-4 rounded-t-3xl">
                  NAPOJE
                </h1>
                <div className="px-6 mt-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium mb-[-8px]">
                        Kropla beskidu
                      </p>
                      <p className="sm:text-[10px] md:text-[11px] l:text-[16px] mb-2">
                        gazowania/niegazowana
                      </p>
                    </div>
                    <div>
                      <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                        {dataToppings[0].attributes.water}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium mb-[-8px]">
                        Coca-Cola
                      </p>
                      <p className="sm:text-[10px] md:text-[11px] l:text-[16px]">
                        500ml/850ml
                      </p>
                    </div>
                    <div>
                      <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                        {dataToppings[0].attributes.cola}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                      Fanta
                    </p>
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                      {dataToppings[0].attributes.fanta}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium mb-8">
                      Sprite
                    </p>
                    <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                      {dataToppings[0].attributes.sprite}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*STOPKA*/}
      <footer className="grid sm:text-center sm:grid-cols-1 md:grid-cols-3 l:grid-cols-3 xl:grid-cols-3 text-black ">
        <div className="col-1 font-thin md:ml-10 l:ml-10 xl:ml-12 mt-4">
          <p
            className="mb-4 cursor-pointer"
            onClick={() => navigate("/LaStazione/")}
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
