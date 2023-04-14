import React, { useState } from "react";
// import { Header } from "../../../componentsCommon";
// import AxiosInstance from "../../../../utils/axios";

const AddSubject = () => {
  // const [initial, final] = useState({
  //   subjectName: "",
  //   subjectCode: "",
  //   semester: "",
  //   totalLectures: "",
  // });

  // const { subjectName, subjectCode, semester, totalLectures } = initial;

  // const dark = "dark:bg-main-dark-bg dark:text-white";
  // const labelDark = "dark:bg-secondary-dark-bg dark:text-white";

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await AxiosInstance.post("/api/v1/addsubject", initial).then(
  //       (res) => {
  //         final({
  //         });
  //       }
  //       // console.log(res)
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleInput = (e) => {
  //   final({ ...initial, [e.target.name]: e.target.value });
  // };

  return (
    // <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg text-white rounded-3xl">
    //   <Header title="Add Admin" />
    //   <div className="bg-white p-2 rounded-3xl shadow-xl dark:bg-main-dark-bg text-white">
    //     <form
    //       className="w-fullbg-white px-8 pt-8 pb-8 mb-4 rounded-3xl dark:bg-secondary-dark-bg"
    //       onSubmit={(e) => handleSubmit(e)}
    //     >
    //       <div className="flex flex-wrap -mx-3 mb-6">
    //         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    //           <label
    //             className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
    //             htmlFor="grid-first-name"
    //           >
    //             Subject Name
    //           </label>
    //           <input
    //             className={`appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${dark}`}
    //             id="grid-first-name"
    //             type={"text"}
    //             placeholder="SubjectName"
    //             name="subjectName"
    //             value={subjectName}
    //             onChange={handleInput}
    //           />
    //         </div>
    //         <div className="w-full md:w-1/2 px-3">
    //           <label
    //             className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
    //             htmlFor="grid-last-name"
    //           >
    //             {"email"}
    //           </label>
    //           <input
    //             className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${dark}`}
    //             id="grid-last-name"
    //             type={"text"}
    //             placeholder="email"
    //             name="email"
    //             value={email}
    //             onChange={handleInput}
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-wrap -mx-3 mb-2">
    //         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    //           <label
    //             className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
    //             htmlFor="grid-city"
    //           >
    //             {"Password"}
    //           </label>
    //           <input
    //             className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${dark}`}
    //             id="grid-city"
    //             type={"text"}
    //             placeholder="password"
    //             name="password"
    //             value={password}
    //             onChange={handleInput}
    //           />
    //         </div>

    //         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    //           <label
    //             className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
    //             htmlFor="grid-city"
    //           >
    //             {"role"}
    //           </label>
    //           <input
    //             className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${dark}`}
    //             id="grid-city"
    //             type={"text"}
    //             placeholder="role"
    //             name="role"
    //             value={role}
    //             onChange={handleInput}
    //           />
    //         </div>

    //         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    //           <label
    //             className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${labelDark}`}
    //             htmlFor="grid-state"
    //           >
    //             Branch
    //           </label>
    //           <input
    //             className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${dark}`}
    //             id="grid-city"
    //             type={"text"}
    //             placeholder="branch"
    //             name="branch"
    //             value={branch}
    //             onChange={handleInput}
    //           />
    //           {/* <div className="relative">
    //           <select
    //             className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none :border-gray-500 ${dark}`}
    //             id="grid-state"
    //             onChange={handleInput}
    //           >
    //             <option>CSE</option>
    //             <option>Mechanical</option>
    //             <option>Electrical</option>
    //             <option>ECE</option>
    //             <option>Civil</option>
    //           </select>
    //           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    //             <svg
    //               className="fill-current h-4 w-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 20 20"
    //             >
    //               <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    //             </svg>
    //           </div>
    //         </div> */}
    //         </div>
    //       </div>

    //       <div className="flex items-center justify-end mt-8">
    //         <button
    //           className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="submit"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <></>
  );
};

export default AddSubject;
