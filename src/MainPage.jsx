import TopSection from "./Images/TopSection.png";
import Logo from "./Images/Logo.svg";
import Pysznepl from "./Images/Pysznepl.svg";
import WelcomeImage from "./Images/WelcomeImage.png";
import MenuSection from "./Images/MenuSection.png";
import footerLogo from "./Images/footerLogo.svg";
import Telephone from "./Images/Telephone.svg";
import FB from "./Images/fb.svg";
import ButtonPyszne from "./Images/ButtonPyszne.svg";
import { useNavigate } from "react-router-dom";


export const MainPage = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log("test");

  const Triangle = ({ color = "brown" }) => {
    return (
      <div
        style={{
          flexGrow: 1,
          width: 0, // Początkowa szerokość może być ustawiona na 0
          paddingBottom: "2%", // Kontroluje wysokość trójkąta
          background: color,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
    );
  };

  const ReverseTriangle = ({ color = "brown" }) => {
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

  const ReverseTriangleRow = ({ color, triangleCount = 50 }) => {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        {Array.from({ length: triangleCount }).map((_, index) => (
          <ReverseTriangle key={index} color={color} />
        ))}
      </div>
    );
  };

  return (
    <div className="font-inter">
      {/*SEKCJA GÓRNA*/}
      <div>
        <img src={TopSection} alt="PizzaPhoto" className="w-screen  z-10"></img>

        <img
          src={Logo}
          alt="Logo"
          className="absolute sm:w-[20%] md:w-[20%] sm:top-[10%] md:top-[20%] l:top-[22%] xl:top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/*SEKCJA POWITALNA*/}
      <div className="grid sm:text-center l:grid-cols-3 mt-16 mb-16">
        <div className="col-span-2 mr-24">
          <div>
            <h1 className="text-[40px] font-black sm:mb-4">
              Witaj w Pizzerii La Stazione
            </h1>
          </div>
          <div>
            <h2 className="text-[22px] font-semibold mb-6">
              Jeśli jesteś z Międzyrzecza lub okolic i szukasz wyśmienitej pizzy
              to DOBRZE TRAFIŁEŚ!
            </h2>
          </div>
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
              na wynos. Możliwy dowóż lub odbiór osobisty
            </p>
          </div>
          <div className="text-[20px] mt-4 mb-8 font-bold">
            <p>Do zobaczenia!</p>
          </div>
          <div>
            <button className="w-[277px] bg-[#343434] rounded-full text-white l:mr-16 sm:mb-4">
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.pyszne.pl/menu/la-stazione-miliardowicka?&adj_tracker=5rz7oa4&adj_campaign=11848902408&k1111=k1111&campaignname=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_POL_PL_%5BRES%5D_%5BENGM%5D_OD_National&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleu74yA_LEE7YpfucIw4rgcRzguOmxXQ1Ry3e02gSw3wyUBv15VI70MaAmaJEALw_wcB&gclsrc=aw.ds"
                    )
                  }
                >
                  <p className="text-[14px] font-black mt-2">ZAMÓW ONLINE</p>
                  <img src={Pysznepl} alt="pysznepl" className="mb-2 ml-2" />
                </button>
              </div>
            </button>
            <button className="w-[277px] bg-[#343434] rounded-full text-white sm:mb-8">
              <div className="flex justify-center">
                <a className="text-[18px] mt-2" href="tel:+48 527 172 27">
                  <p className="font-black">ZADZWOŃ</p>
                  <p className="">+48 527 172 272</p>
                </a>
              </div>
            </button>
          </div>
        </div>
        <div>
          <img src={WelcomeImage} alt="welcomeimage" />
        </div>
      </div>

      {/*SEKCJA Z MENU*/}
      <div>
        <div>
          <TriangleRow color="#343434" triangleCount={47} />
        </div>
        <div className="bg-[#343434] flex justify-center align-center text-white mb-[-2px] mt-[-2px]">
          <div className="flex mt-24 mb-24">
            <img src={MenuSection} alt="menusectionimg" className="mr-24" />
            <div className="mt-8">
              <div className="text-center flex-row mb-8">
                <h1 className="text-[36px] font-extrabold">
                  Koniecznie sprawdź nasze menu!
                </h1>
                <div className="text-[20px] leading-[30px] font-light">
                  <p>Oferujemy bogate, różnorodne smaki i kombinacje,</p>
                  <p>które zadowolą najbardziej wymagające podniebienia.</p>
                  <p>Przyjdź i przekonaj się sam!</p>
                </div>
              </div>
              <div>
                <button
                  className="bg-white rounded-full text-[28px] font-black text-center text-black ml-20"
                  onClick={() => {
                    navigate("/menu");
                  }}
                >
                  <p className="m-4 ml-12 mr-12">SPRAWDŹ NASZE MENU</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ReverseTriangleRow color="#343434" triangleCount={47} />
        </div>
      </div>

      {/*SEKCJA KONTAKT*/}
      <div className="mt-16 mb-16 flex justify-center align-center">
        <div className="mr-48 text-center">
          <h1 className="text-[36px] font-extrabold">Odwiedź nas!</h1>
          <p className="text-[16px] leading-[36px] mb-12">
            Znajdujemy się w Miedzyrzeczu Dolnym przy boisku{" "}
          </p>
          <h2 className="text-[32px]">ZAPRASZAMY: </h2>

          <p className="flex justify-center text-[24px] font-semibold leading-[30px]">
            poniedziałek - środa:<p className="ml-2 font-normal">nieczynne</p>
          </p>
          <p className="flex justify-center text-[24px] font-semibold leading-[34px]">
            czwartek:<p className="ml-2 font-normal">16:30 - 21:00</p>
          </p>

          <p className="flex justify-center text-[24px] font-semibold leading-[34px]">
            piątek:<p className="ml-2 font-normal">16:30 - 22:00</p>
          </p>

          <p className="flex justify-center text-[24px] font-semibold leading-[34px]">
            sobota:<p className="ml-2 font-normal">13:00 - 22:00</p>
          </p>

          <p className="flex justify-center text-[24px] font-semibold leading-[34px]">
            niedziela:<p className="ml-2 font-normal">14:00 - 21:00</p>
          </p>
        </div>
        <iframe
          width="420"
          height="420"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=420&amp;height=420&amp;hl=en&amp;q=49.852661053129836,%2018.943839352858117+(Pizzeria%20La%20Stazione)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
        <a href="http://maps-generator.com/pl"></a>{" "}
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=78c3253a5ac6b608b069475bf942026e71e3971a"
        ></script>
      </div>

      {/*STOPKA*/}
      <footer className="bg-[#343434] grid grid-cols-3 text-white ">
        <div className="col-1 font-thin ml-24 mt-4">
          <p className="mb-4 cursor-pointer" onClick={scrollToTop}>
            strona główna
          </p>
          <p className="cursor-pointer" onClick={() => navigate("/menu")}>
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
