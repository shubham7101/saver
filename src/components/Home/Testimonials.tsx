import React from "react";

function Testimonials() {
  return (
    <section className="bg-white my-24">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold leading-7 text-active-dark tracking-wide">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary">
            What&#39;s our customers say
          </p>
          <p className="mt-6 text-lg leading-8 text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2 mt-16">
          <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <p className="text-primary-light md:text-xl">
                <span className="font-serif">&quot;</span>Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat repellat perspiciatis
                excepturi est. Non ipsum iusto aliquam consequatur repellat
                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                repudiandae ad doloribus.
                <span className="font-serif">&quot;</span>
              </p>
              <div>
                <h6 className="text-lg text-primary font-semibold leading-none">
                  Jane Doe
                </h6>
                <span className="text-xs text-primary-light">
                  Product Designer
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img
              className="w-20 h-20 mx-auto rounded-full"
              src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-primary-light">
                <span className="font-serif">&quot;</span> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat repellat perspiciatis
                excepturi est. Non ipsum iusto aliquam consequatur repellat
                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                repudiandae ad doloribus. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Enim excepturi perferendis porro.
                <span className="font-serif">&quot;</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold text-primary leading-none">
                  Jane Doe
                </h6>
                <span className="text-xs text-primary-light">
                  Product Designer
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img
              className="w-20 h-20 mx-auto rounded-full"
              src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-primary-light">
                <span className="font-serif">&quot;</span> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat repellat perspiciatis
                excepturi est. Non ipsum iusto aliquam consequatur repellat
                provident, omnis ut, sapiente voluptates veritatis cum deleniti
                repudiandae ad doloribus. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Beatae quo non vel ratione quis
                sit?
                <span className="font-serif">&quot;</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold text-primary leading-none">
                  Jane Doe
                </h6>
                <span className="text-xs text-primary-light">
                  Product Designer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;