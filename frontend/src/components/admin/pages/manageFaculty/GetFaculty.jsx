import React, { useState, useEffect } from "react";
import { Header } from "../../../componentsCommon";

import AxiosInstance from "../../../../utils/axios";

const GetFaculty = () => {
  const [getValue, setValue] = useState(true);
  const [previousData, setData] = useState([]);
  const [branch, setBranch] = useState("Select a branch");
  const getalldata = async (e) => {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.
    if (branch === "Select a branch") {
      alert("Please Select a branch");
      return;
    }
    try {
      const res = await AxiosInstance.get('/api/v1/facultybydept?department='+branch)
      console.log(res.data.faculties);
      setData(res.data.faculties);
      setValue(!getValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg text-white rounded-3xl">
      <Header
        title="Modify Faculty"
        description="To get the list of all the admin"
      />

      <div className="flex justify-between items-center">
        <div className="relative w-60">
          <select
            className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none :border-gray-500`}
            id="grid-state"
            value={branch}
            onChange={e => {
              setBranch(e.target.value)
            }}
          >
            <option default disabled>
              Select a branch
            </option>
            <option>CSE</option>
            <option>Mechanical</option>
            <option>Electrical</option>
            <option>ECE</option>
            <option>Civil</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={getalldata}
        >
          Get
        </button>
      </div>

      <div className="flex items-center justify-start mt-3">
        {getValue ? (
          <>{/* <p className="text-blue-700">please click</p> */}</>
        ) : (
          <>
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                  <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          >
                            Edit
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          >
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {previousData.map((admin, key, index) => {
                          return (
                            <tr>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {key}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {admin.email}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {admin._id}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <button
                                  className="text-green-500 hover:text-green-700"
                                  onClick={() => {}}
                                >
                                  Edit
                                </button>
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <a
                                  className="text-red-500 hover:text-red-700"
                                  href="#"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GetFaculty;
