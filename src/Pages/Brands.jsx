import React from "react";

function Brands() {
  return (
    <div className="my-32 md:my-8 hidden md:block">
      <div className="bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:py-16 lg:px-8">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0000FF"
              class="w-3 h-3 mt-1"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 className="text-center text-wrap text-sm font-medium mt- font-sans mb-[1.125rem] p- mx-2">
              BRANDS WE WORK WITH
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0000FF"
              class="w-3 h-3 mt-1"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 class="text-5xl font-medium text-center font-sans tracking-tight mb-10">
            Trusted by Thousands of Businesses
          </h2>
          <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp"
                alt="unv"
                class="h-32 w-32"
                width="940"
                height="788"
                loading="lazy"
              />
            </div>
            <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp"
                alt="Dahua"
                class="h-36 w-36"
                width="940"
                height="788"
                loading="lazy"
              />
            </div>
            <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp"
                alt="Nvidia"
                class="h-32 w-32"
                width="940"
                height="788"
                loading="lazy"
              />
            </div>
            <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp"
                alt="Amazon"
                class="h-36 w-36"
                width="940"
                height="788"
                loading="lazy"
              />
            </div>
            <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp"
                alt="Hikvision"
                class="h-36 w-36"
                width="940"
                height="788"
                loading="lazy"
              />
            </div>
            <div class="col-span-1 flex justify-center bg-gray-50 py-12 px-8">
              <img
                src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp"
                alt="Azure"
                class="h-24 w-28"
                width="758"
                height="447"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
