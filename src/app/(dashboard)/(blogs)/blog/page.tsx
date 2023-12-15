import React, { cache } from "react";
import BlogCard from "@/components/BlogCard";
import { IoReorderFour, IoReorderThree, IoReorderTwo } from "react-icons/io5";
import { RxBorderSolid } from "react-icons/rx";
import { faker } from "@faker-js/faker";
import generate from "./data";

export const data = cache(generate)();

export default function page() {
  return (
    <>
      <div className="flex">
        <div className="w-full lg:w-3/4">
          <div className="filter-sort-grid mb-4 p-4 bg-white rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-10">
                <p className="mb-0 block" style={{ width: "100px" }}>
                  Trier par:
                </p>
                <select
                  name=""
                  defaultValue={"manual"}
                  className="form-select"
                  id=""
                >
                  <option value="manual">Date</option>
                  <option value="best-selling">Popularité</option>
                  <option value="title-ascending">Tags</option>
                  <option value="title-descending">Auteur</option>
                  <option value="created-ascending">Date, ascendant</option>
                  <option value="created-descending">Date, descendant</option>
                </select>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex gap-3 items-center">
                  <RxBorderSolid
                    className="block w-9 h-9 bg-gray-200 p-2 rounded-md cursor-pointer"
                    alt="grid"
                  />
                  <IoReorderTwo
                    className="block w-9 h-9 bg-gray-200 p-2 rounded-md cursor-pointer"
                    alt="grid"
                  />
                  <IoReorderThree
                    className="block w-9 h-9 bg-gray-200 p-2 rounded-md cursor-pointer"
                    alt="grid"
                  />
                  <IoReorderFour
                    className="block w-9 h-9 bg-gray-200 p-2 rounded-md cursor-pointer"
                    alt="grid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            {data.map((e) => (
              <div key={e.id} className="w-full md:w-1/2 px-3 mb-6">
                <BlogCard {...e} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4 px-3 mb-6 row-auto">
          <div className="col-span-3">
            <div className="filter-card mb-3 bg-white rounded-lg p-6">
              <h3 className="filter-title text-base font-semibold leading-7 mb-4">
                Filtrer par:
              </h3>
              <div>
                <h5 className="sub-title text-sm font-semibold leading-6 mb-3">
                  Tags
                </h5>
                <div className="flex">
                  <div className="p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Cardiologie
                    </label>
                  </div>
                  <div className="p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Endocrinologie
                    </label>
                  </div>
                  <div className="p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Neurologie
                    </label>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Pneumologie
                    </label>
                  </div>
                  <div className="p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Oncologie
                    </label>
                  </div>
                  <div className="p-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Hématologie
                    </label>
                  </div>
                </div>
                <h5 className="sub-title text-sm font-semibold leading-6 mb-3">
                  Size
                </h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter-card mb-3 bg-white rounded-lg p-6">
              <h3 className="filter-title text-base font-semibold leading-7 mb-4">
                Product Tags
              </h3>
              <div>
                <div className="flex flex-wrap gap-4">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
            </div>

            <div className="filter-card mb-3 bg-white rounded-lg p-6">
              <h3 className="filter-title text-base font-semibold leading-7 mb-4">
                Random Products
              </h3>
              <div>
                <div className="random-products mb-3 flex">
                  <div className="w-1/2">
                    <img src="blog1.jpg" className="img-fluid" alt="watch" />
                  </div>
                  <div className="w-1/2">
                    <h5 className="text-sm mb-2">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    {/* Include your ReactStars component here */}
                    <b className="block">300.00 $</b>
                  </div>
                </div>
                <div className="random-products flex">
                  <div className="w-1/2">
                    <img src="blog1.jpg" className="img-fluid" alt="watch" />
                  </div>
                  <div className="w-1/2">
                    <h5 className="text-sm mb-2">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    {/* Include your ReactStars component here */}
                    <b className="block">300.00 $</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
