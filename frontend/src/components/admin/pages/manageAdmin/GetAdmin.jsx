import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../../../componentsCommon";
import { employeesData, employeesGrid } from "../../data/dummy";
import AxiosInstance from "../../../../utils/axios";

const GetAdmin = () => {
  const [getValue, setValue] = useState(false);
  const [previousData, setData] = useState([]);

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

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg text-white rounded-3xl">
      <Header
        title="Get All Admin"
        description="To get the list of all the admin"
      />
      {/* <GetTemplate employeesData={employeesData}  employeesGrid={employeesGrid}/> */}
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
            <div>
              {previousData.map((admin, index) => {
                return (
                  <div className="text-blue-700" key={index}>
                    <h3>{admin.email}</h3>
                    <h3>{admin._id}</h3>
                  </div>
                );
              })}
            </div>
          
            <GridComponent
              dataSource={previousData}
              width="auto"
              allowPaging
              allowSorting
              pageSettings={{ pageCount: 5 }}
              // editSettings={editing}
              toolbar={["Search"]}
            >
              <ColumnsDirective>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {previousData.map((admin, index) => (
                  <ColumnDirective key={index} {...admin} />
                ))}
              </ColumnsDirective>
              <Inject services={[Search, Page, Toolbar]} />
            </GridComponent>
          </>
        )}
      </div>
    </div>
  );
};

export default GetAdmin;
