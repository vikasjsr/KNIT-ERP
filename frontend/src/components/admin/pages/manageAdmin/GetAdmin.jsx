import React, { useEffect, useState } from "react";
import { Header } from "../../../componentsCommon";
import AxiosInstance from "../../../../utils/axios";
import Modal from "../../../componentsCommon/Modal";

const GetAdmin = () => {
  const [getValue, setValue] = useState(false);
  const [previousData, setData] = useState([]);
  const [EditModalOpen ,setEditModalOpen] = useState(false);

  const getalldata = async (e) => {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.

    try {
      const res = await AxiosInstance.get("/api/v1/getalladmins");
      console.log(res.data.admins);
      setData(res.data.admins);
      setValue(!getValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getalldata();
  }, []);

  const handleEditModalopen = () => {
      setEditModalOpen(true);
  }

  return (
  <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg text-white rounded-3xl">
      <Header
        title="Modify Admin"
        description="To get the list of all the admin"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={getalldata}
      >
        Get
      </button>

      <div className="flex items-center justify-start mt-3">
        {getValue ? (
          <>
            <p className="text-blue-700">please click</p>
          </>
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
                            return(
                              <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {key + 1}
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
                                onClick={handleEditModalopen}
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
                            )
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
         <Modal ModalTitle={"Edit Admin Details"} ModalDescription={"As per requirement edit details"} open={EditModalOpen} setOpen={setEditModalOpen} >
          <div>Hello World</div>
         </Modal>

    </>
  );
};

export default GetAdmin;
