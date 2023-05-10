import React, { useState } from "react";
import { Header } from "../../../componentsCommon";
import AxiosInstance from "../../../../utils/axios";

const AddDepartment = () => {
  const [initial, final] = useState({
    departmentName: "",
    departmentCode: "",
    HOD: "",
  });

  const { departmentName, departmentCode, HOD } = initial;

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await AxiosInstance.post("/api/v1/addepartment", initial).then(
        (res) => {
          final({
            departmentName: "",
            departmentCode: "",
            HOD: "",
          });
        }
        // console.log(res)
      );
    } catch (err) {
      console.log(err);
    }
  }

  const handleInput = (e) => {
    final({ ...initial, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg text-white rounded-3xl">
      <Header title="Add Department" />

      <div class="w-full flex justify-center ">
        <form class="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handleSubmit(e)}>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="departmentName"
            >
              Department
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="departmentName"
              type={"text"}
              placeholder="departmentName"
              name="departmentName"
              value={departmentName}
              onChange={handleInput}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="text"
            >
              Department Code
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="departmentCode"
              type={"text"}
              placeholder="Department Code"
              name="departmentCode"
              value={departmentCode}
              onChange={handleInput}
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="HOD"
            >
              HOD
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="HOD"
              type="text"
              placeholder="HOD"
              name="HOD"
              value={HOD}
              onChange={handleInput}
            />
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
