import React, { useState } from "react";
import { Header } from "../../../componentsCommon";
import AxiosInstance from "../../../../utils/axios";

const AddSubject = () => {
  const [initial, final] = useState({
    subjectName: "",
    subjectCode: "",
    semester: "",
    totalLectures: "",
  });

   const { subjectName, subjectCode, semester, totalLectures } = initial;

  const dark = "dark:bg-main-dark-bg dark:text-white";
  const labelDark = "dark:bg-secondary-dark-bg dark:text-white";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AxiosInstance.post("/api/v1/addsubject", initial).then(
        (res) => {
          final({
          });
        }
        // console.log(res)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) => {
    final({ ...initial, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg text-white rounded-3xl">
      <Header title="Add Admin" />
      {/* <AddTemplate username="Username" password='Password' email='Email' designation='Designation'/> */}

      <div className="bg-white p-2 rounded-3xl shadow-xl dark:bg-main-dark-bg text-white">
        <form
          className="w-fullbg-white px-8 pt-8 pb-8 mb-4 rounded-3xl dark:bg-secondary-dark-bg"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
                htmlFor="grid-first-name"
              >
                subjectName
              </label>
              <input
                className={`appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${dark}`}
                id="subjectName"
                type={"text"}
                placeholder="subjectName"
                name="subjectName"
                value={subjectName}
                onChange={handleInput}
              />
            </div>
            <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
              <label
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
                htmlFor="grid-last-name"
              >
                {"subjectCode"}
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${dark}`}
                id="subjectCode"
                type={"subjectCode"}
                placeholder="email"
                name="subjectCode"
                value={subjectCode}
                onChange={handleInput}
              />
            </div>

            <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
              <label
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
                htmlFor="grid-last-name"
              >
                {"subjectCode"}
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${dark}`}
                id="subjectCode"
                type={"subjectCode"}
                placeholder="email"
                name="subjectCode"
                value={subjectCode}
                onChange={handleInput}
              />
            </div>

            <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
              <label
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
                htmlFor="grid-last-name"
              >
                {"subjectCode"}
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${dark}`}
                id="subjectCode"
                type={"subjectCode"}
                placeholder="email"
                name="subjectCode"
                value={subjectCode}
                onChange={handleInput}
              />
            </div>

          </div>
          <div className="flex items-center justify-end mt-8">
            <button
              className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubject;
