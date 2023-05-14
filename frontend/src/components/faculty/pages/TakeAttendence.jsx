import React, { useEffect, useState } from "react";
import { Header } from "../../componentsCommon";
import AxiosInstance from "../../../utils/axios";
import { BsConeStriped } from "react-icons/bs";

const TakeAttendence = () => {
  const [getValue, setValue] = useState(true);
  const [previousData, setData] = useState([]);
  const [branch, setBranch] = useState("Select a Department");
  const [year, setYear] = useState("Select a year");
  const [subject, setSubject] = useState("Select a Subject");
  const getalldata = async (e) => {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.
    if (branch === "Select a Department") {
      alert("Please Select a Department");
      return;
    }
    if (year === "Select a year") {
      alert("Please select a year");
      return;
    }
    try {
      const res = await AxiosInstance.get(
        `/api/v1/studentbydept?department=${branch}&year=${year}`
      );
      setData(
        res.data.students.map((d) => {
          d.attendence = false;
          return d;
        })
      );
      setValue(!getValue);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedStudents, setSelectedStudents] = useState([]);
  const sendAttendance = async () => {
    if (subject === "Select a Subject") {
      alert("Please Select a Subject");
      return;
    }

    try {
      const res = await AxiosInstance.post(`/api/v1//faculty/markAttendence`, {
        department: branch,
        selectedStudents,
        subjectName: subject,
        year,
      });
      alert("MARKED");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg text-white rounded-3xl">
      <Header
        title="mark attendence"
        description="To get the list of all the admin"
      />

      <div className="flex justify-between items-center">
        <div className="relative w-60">
          <select
            className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none :border-gray-500`}
            id="grid-state"
            value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
            }}
          >
            <option default disabled>
              Select a Department
            </option>
            <option>CSE</option>
            <option>Mechanical</option>
            <option>Electrical</option>
            <option>ECE</option>
            <option>civil</option>
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

        <div className="relative w-60">
          <select
            className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none :border-gray-500`}
            id="grid-state"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            <option default disabled>
              Select a year
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
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
                          {/* <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            ID
                          </th> */}
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
                            Mark
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {previousData.map((student, key, index) => {
                          // {console.log(student)}
                          return (
                            <tr>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {key}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {student.email}
                              </td>
                              {/* <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {student._id}
                              </td> */}
                              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <button
                                  className="text-green-500 hover:text-green-700"
                                  onClick={() => {}}
                                >
                                  Edit
                                </button>
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <input
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedStudents((sS) => [
                                        ...sS,
                                        student._id,
                                      ]);
                                    } else {
                                      setSelectedStudents((stuIds) =>
                                        stuIds.filter((d) => d !== student._id)
                                      );
                                    }
                                  }}
                                  value={""}
                                  className="col-span-1 border-2 w-16 h-4 mt-3 px-2 "
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 w-full">
                <select
                  className={`block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none :border-gray-500`}
                  id="grid-state"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                >
                  <option default disabled>
                    Select a Subject
                  </option>
                  <option>math </option>
                  <option>dsa</option>
                  <option>BEE</option>
                  <option>computer network</option>
                </select>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={sendAttendance}
                >
                  Send Attendance
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TakeAttendence;
