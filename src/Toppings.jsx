import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchToppings } from "./API/Posts";
import LoadingPizza from "./Images/LoadingPizza.png";

export const Toppings = () => {
  const {
    data: toppingsData,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["topping"],
    queryFn: () => fetchToppings(),
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 l:grid-cols-2 xl:grid-cols-2">
     {isLoading ? (
            <div className="col-span-2 flex flex-col justify-center items-center">
              <h1 className="text-white text-[20px] text-center mt-24">Wczytywanie dodatków...</h1>
              <img
                src={LoadingPizza}
                alt="Wczytywanie"
                className="w-[150px] mx-auto animate-spin-slow "
              />
            </div>
          ) : (
        <>
          <div className="bg-white col-span-1 sm:mb-4 sm:m-2 md:mr-5 l:mr-12 xl:mr-10 rounded-3xl overflow-hidden">
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
                      {toppingsData.data[0].attributes.sos}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                    dodatek serowy
                  </p>
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                    {toppingsData.data[0].attributes.cheese}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                    dodatek mięsny
                  </p>
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                    {toppingsData.data[0].attributes.meat}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium mb-8">
                    dodatek warzywny
                  </p>
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                    {toppingsData.data[0].attributes.vegetables}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white col-span-1 sm:m-2 md:ml-5 l:ml-12 xl:ml-10 rounded-3xl overflow-hidden">
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
                      {toppingsData.data[0].attributes.water}
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
                      {toppingsData.data[0].attributes.cola}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                    Fanta
                  </p>
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                    {toppingsData.data[0].attributes.fanta}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium mb-8">
                    Sprite
                  </p>
                  <p className="sm:text-[16px] md:text-[20px] l:text-[22px] xl:text-[22px] font-medium">
                    {toppingsData.data[0].attributes.sprite}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
