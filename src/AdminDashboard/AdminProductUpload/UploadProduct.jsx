import React from "react";
import { useNavigate } from "react-router-dom";
import { BasicInfo } from "./BasicInfo";
import { ProductPrice } from "./ProductPrice";

const UploadProduct = () => {
  const navigate = useNavigate();

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div className=" text-2xl font-bold">Edit Product</div>
        <div
          className=" text-white right-2.5 bottom-2.5 bg-[#ffa23c] font-medium  text-sm px-4 py-2 cursor-pointer"
          onClick={() => navigate("/admin/product")}
        >
          New Product
        </div>
      </div>
      <form className="flex flex-col lg:flex-row items-start  gap-5">
        <div className=" flex-[2]">
          <div className="bg-white p-4 rounded">
            <div className="mb-4 font-medium">Basic information</div>
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Short description
              </label>
              <textarea
                rows="2"
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white p-4 rounded mt-5 lg:mt-0">
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Price
              </label>
              <input
                type="number"
                name="Price"
                id="name"
                placeholder="Price"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Stock quantity
              </label>
              <input
                type="number"
                name="Price"
                id="name"
                placeholder="Price"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Categories
              </label>
              <input
                type="text"
                name="cat"
                id="name"
                placeholder="Categories"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadProduct;
