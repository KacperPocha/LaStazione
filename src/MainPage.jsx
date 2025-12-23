import { useNavigate } from "react-router-dom";
import TopSection from "./Images/TopSection.png";
import Logo from "./Images/Logo.svg";
import Pysznepl from "./Images/Pysznepl.png";
import WelcomeImage from "./Images/WelcomeImage.png";
import MenuSection from "./Images/MenuSection.png";
import footerLogo from "./Images/footerLogo.svg";
import FB from "./Images/fb.svg";
import ButtonPyszne from "./Images/ButtonPyszne.png";
import Telephone from "./Images/Telephone.svg";
import React, { useMemo } from "react";
import { fetchHours } from "./API/Posts";
import LoadingPizza from "./Images/LoadingPizza.png";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const MainPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const postQuery = useQuery({
    queryKey: ["hours"],
    queryFn: fetchHours,
  });

  if (postQuery.isLoading) {
    return (
      <div className="w-screen h-screen bg-[#343434]">
        <div className="col-span-2 flex flex-col justify-center items-center">
          <h1 className="text-white text-[50px] text-center mt-24">
            Wczytywanie...
          </h1>
          <img
            src={LoadingPizza}
            alt="Wczytywanie"
            className="w-[250px] mx-auto animate-spin-slow "
          />
        </div>
      </div>
    );
  }

  if (postQuery.isError) {
    return (
      <div className="w-screen h-screen bg-[#343434]">
        <div className="col-span-2 flex flex-col justify-center items-center">
          <h1 className="text-white text-[50px] text-center mt-24">
            {postQuery.error.message}
          </h1>
        </div>
      </div>
    );
  }

  const data = postQuery.data;

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

  const ReverseTriangle = React.memo(({ color = "brown" }) => {
    return (
      <div
        style={{
          flexGrow: 1,
          width: 0, // Początkowa szerokość może być ustawiona na 0
          paddingBottom: "2%", // Kontroluje wysokość trójkąta
          background: color,
          clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
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

  const ReverseTriangleRow = React.memo(({ color, triangleCount = 50 }) => {
    const triangles = useMemo(() => {
      return Array.from({ length: triangleCount }).map((_, index) => (
        <ReverseTriangle key={index} color={color} />
      ));
    }, [color, triangleCount]);

    return <div style={{ display: "flex", width: "100%" }}>{triangles}</div>;
  });

  return (
    <div className="font-inter">
      {/*SEKCJA GÓRNA*/}
      <div>
        <img src={TopSection} alt="ZDJĘCIE PIZZ" />
        <img
          src={Logo}
          alt="Logo"
          className="absolute sm:w-[20%] md:w-[20%] sm:top-[10%] md:top-[20%] l:top-[22%] xl:top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>


      {/* KOMUNIKAT O ZAMKNIĘCIU */}
      <div className="w-full bg-[#343434] text-center py-8 px-4 text-white mt-12">
        <p className="text-2xl sm:text-lg md:text-xl font-semibold">
         {data.data[1].attributes.Poniedzialek}
        </p>
        <p className="text-2xl sm:text-lg md:text-xl font-semibold">
          <strong>{data.data[1].attributes.Wtorek}</strong> ❄️❤️
        </p>
      </div>
      {/*SEKCJA POWITALNA*/}
      <div className="grid mt-16 mb-16 sm:text-center md:text-center l:grid-cols-3 l:place-items-center l:ml-36 l:mr-36 xl:grid-cols-3 xl:place-items-center xl:ml-56 xl:mr-56">
        <div className="sm:col-span-1 l:col-span-2 xl:col-span-2 sm:ml-6 sm:mr-6 md:ml-12 md:mr-12 l:mr-12 xl:mr-16">
          <h1 className="font-black sm:text-[30px] sm:mb-4 md:mb-4 md:text-[40px] l:text-[40px] xl:text-[40px] ">
            Witaj w Pizzerii La Stazione
          </h1>
          <h2 className="font-semibold mb-6 sm:text-[18px] md:text-[22px] l:text-[22px] xl:text-[22px]">
            Jeśli jesteś z Międzyrzecza lub okolic i szukasz wyśmienitej pizzy
            to DOBRZE TRAFIŁEŚ!
          </h2>
          <div className="text-[16px] leading-[21px]">
            <p>
              W naszym lokalu możesz być pewien, że zjesz pyszną pizze prosto z
              pieca, przygotowaną ze świeżych i lokalnych produktów
            </p>
          </div>
          <div className="text-[12px] mt-8">
            <p className="break-normal">
              Zapraszamy do składania zamówień telefonicznie albo przez stronę
              pyszne.pl. Jesteśmy restauracją "Take away", czyli oferujemy pizzę
              na wynos. Możliwy dowóz lub odbiór osobisty
            </p>
          </div>
          <div className="text-[20px] mt-4 mb-8 font-bold">
            <p>Do zobaczenia!</p>
          </div>
          <div className="flex sm:flex-col sm:items-center md:flex-col md:items-center">
            <div
              className="cursor-pointer w-[277px] bg-[#343434] rounded-full text-white sm:mb-4 md:mb-4 l:mr-8 xl:mr-24"
              onClick={() =>
                window.open(
                  "https://www.pyszne.pl/menu/la-stazione-miliardowicka?&adj_tracker=5rz7oa4&adj_campaign=11848902408&k1111=k1111&campaignname=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleu74yA_LEE7YpfucIw4rgcRzguOmxXQ1Ry3e02gSw3wyUBv15VI70MaAmaJEALw_wcB&gclsrc=aw.ds"
                )
              }
            >
              <div className="flex flex-col items-center">
                <p className="text-[14px] font-black mt-2">ZAMÓW ONLINE</p>
                <img src={Pysznepl} alt="pysznepl" className="mb-2 ml-2 mr-3" />
              </div>
            </div>

            <button className="w-[277px] bg-[#343434] rounded-full text-white sm:mb-8 md:mb-8">
              <div className="flex justify-center">
                <a className="text-[18px] mt-2" href="tel:572172272">
                  <p className="font-black">ZADZWOŃ</p>
                  <p>+48 572 172 272</p>
                </a>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center sm:ml-4 sm:mr-4">
          <img src={WelcomeImage} alt="welcomeimage" />
        </div>
      </div>

      {/*SEKCJA Z MENU*/}
      <div>
        <TriangleRow color="#343434" triangleCount={47} />
        <div className="bg-[#343434] flex justify-center align-center text-white mb-[-2px] mt-[-2px]">
          <div className="w-full flex justify-center items-center mt-24 mb-24 sm:flex-col md:flex-col">
            <img
              src={MenuSection}
              alt="Menu Section Image"
              className="w-full sm:max-w-sm md:max-w-lg l:max-w-xl xl:max-w-xl l:mr-8 xl:mr-8"
            />
            <div className="text-center sm:mt-8 md:mt-8 l:mb-8 ">
              <h1 className="font-extrabold sm:text-[30px] md:text-[36px] l:text-[36px] xl:text-[36px]">
                Koniecznie sprawdź nasze menu!
              </h1>
              <div className="leading-[30px] font-light sm:text-[16px] md:text-[20px] l:text-[20px] xl:text-[20px]">
                <p>Oferujemy bogate, różnorodne smaki i kombinacje,</p>
                <p>które zadowolą najbardziej wymagające podniebienia.</p>
                <p>Przyjdź i przekonaj się sam!</p>
              </div>
              <button
                className="bg-white rounded-full font-black text-center text-black mt-6 sm:text-[18px] sm:mb-8 sm:mx-8 md:text-[28px] l:text-[28px] xl:text-[28px]"
                onClick={() => {
                  navigate("/menu");
                }}
              >
                <p className="m-4">SPRAWDŹ NASZE MENU</p>
              </button>
            </div>
          </div>
        </div>
        <ReverseTriangleRow color="#343434" triangleCount={47} />
      </div>

      {/*SEKCJA KONTAKT*/}
      <div className="mt-16 mb-16 flex sm:flex-col sm:items-center md:flex-col md:items-center l:justify-center xl:justify-center">
        <div className="sm:mb-16 sm:ml-4 sm:mr-4 md:ml-4 md:mr-4 md:mb-14 text-center l:mr-16 xl:mr-24">
          <h1 className="sm:text-[30px] md:text-[36px] l:text-[36px] xl:text-[36px] font-extrabold">
            Odwiedź nas!
          </h1>
          <p className="text-[16px] leading-[36px] mb-6">
            Znajdujemy się w Miedzyrzeczu Dolnym przy boisku
          </p>
          <h2 className="sm:text-[26px] md:text-[32px] l:text-[32px] xl:text-[32px]">
            ZAPRASZAMY:
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex sm:text-[20px] md:text-[24px] l:text-[24px] xl:text-[24px] font-semibold leading-[34px] mb-2">
              <p className="mr-2">poniedziałek:</p>
              <p className="font-normal">
                {data.data[0].attributes.Poniedzialek}
              </p>
            </div>

            <div className="flex sm:text-[20px] md:text-[24px] l:text-[24px] xl:text-[24px] font-semibold leading-[34px] mb-2">
              <p className="mr-2">wtorek:</p>
              <p className="font-normal">{data.data[0].attributes.Wtorek}</p>
            </div>

            <div className="flex sm:text-[20px] md:text-[24px] l:text-[24px] xl:text-[24px] font-semibold leading-[34px] mb-2">
              <p className="mr-2">środa:</p>
              <p className="font-normal">{data.data[0].attributes.Sroda}</p>
            </div>

            <div className="flex sm:text-[20px] md:text-[24px] l:text-[24px] xl:text-[24px] font-semibold leading-[34px] mb-2">
              <p className="mr-2">czwartek:</p>
              <p className="font-normal">{data.data[0].attributes.Czwartek}</p>
            </div>

            <div className="flex sm:text-[20px] md:text-[24px] l:text-[24px] xl:text-[24px] font-semibold leading-[34px] mb-2">
              <p className="mr-2">piątek:</p>
              <p className="font-normal">{data.data[0].attributes.Piatek}</p>
            </div>

            <div className="flex sm:text-[20px] md:text-[24px] l:text-[24px] xl:text-[24px] font-semibold leading-[34px] mb-2">
              <p className="mr-2">sobota:</p>
              <p className="font-normal">{data.data[0].attributes.Sobota}</p>
            </div>

            <div className="text-center flex sm:text-[20px] md:text-[24px] l:text-[24px] xl:text-[24px] font-semibold leading-[34px] mb-2">
              <p className="mr-2">niedziela:</p>
              <p className="font-normal">{data.data[0].attributes.Niedziela}</p>
            </div>
          </div>
        </div>

        <iframe
          className="sm:h-[300px] sm:w-[300px] md:w-[420px] md:h-[420px] l:w-[420px] l:h-[420px] xl:w-[420px] xl:h-[420px]"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=420&amp;height=420&amp;hl=en&amp;q=49.852661053129836,%2018.943839352858117+(Pizzeria%20La%20Stazione)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameborder="0"
        ></iframe>
      </div>

      {/*STOPKA*/}
      <footer className="grid sm:text-center sm:grid-cols-1 md:grid-cols-3 l:grid-cols-3 xl:grid-cols-3 text-white bg-[#343434]">
        <div className="col-1 font-thin md:ml-16 l:ml-24 xl:ml-36 mt-4">
          <p className="mb-4 cursor-pointer" onClick={scrollToTop}>
            strona główna
          </p>
          <p
            className="cursor-pointer sm:mb-4"
            onClick={() => navigate("/menu")}
          >
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
            <img src={Telephone} alt="telefon" className="mr-2" />
            <a className="flex" href="tel:572172272">
              <h1 className="md:text-[24px] l:text-[29px] xl:text-[32px]">
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
