import React, { useEffect, useState } from "react";
import { sortArrayAlph } from "../../../utils/helperFunctions";
import styles from "./Table.module.scss";
interface tableComponent {
  tableDB: tableDataInterface;
}
interface tableDataInterface {
  headers: tableHeader[];
  data: dataItem;
}
type dataItem = (string | string[])[][];
interface tableHeader {
  title: string;
  sort: null | boolean;
}
const newTableDataU = [{}];

const tableDataa = {
  headers: ["Deliverable No.", "Deliverable Title", "Deliverable date"],
  data: [
    ["D 1.1.", "Bridge SMS Website design & maintenance", "7"],
    ["D 1.2.", "Bridge SMS Consortium Agreement", "13"],
    ["D 1.3.", "Cridge SMS Quality Assurance Manual", "14"],
    ["D 1.3.", "Zridge SMS Quality Assurance Manual", "14"],
  ],
};
const sortedData = sortArrayAlph(tableDataa.data, "bottom", 0);
console.log(sortedData);

export const Table: React.FC<tableComponent> = ({ tableDB }) => {
  const [tableData, setTableData] = useState<tableDataInterface | null>(null);
  useEffect(() => {
    setTableData(() => {
      return { ...tableDB };
    });
  }, []);
  const sortTableHandler = (
    headerName: string,
    sortType: string,
    row: number
  ) => {
    if (tableData === null) return;
    const updatedTableHeader = tableData.headers.map((data) => {
      if (data.title === headerName) {
        if (data.sort === null) {
          data.sort = true;
        }
        if (data.sort !== null) {
          data.sort = !data.sort;
        }
      } else {
        data.sort = null;
      }
      return data;
    });

    const updatedData = sortArrayAlph(tableData?.data, sortType, row);
    setTableData((): tableDataInterface => {
      return { data: updatedData, headers: updatedTableHeader };
    });
  };
  console.log(tableData);
  return (
    <div className={styles["table-container"]}>
      {tableData ? (
        <>
          <div>
            <span>Show [{tableData.data.length}] entries</span>
          </div>
          {tableData && (
            <table className={styles["table"]}>
              <thead className={styles["table-head"]}>
                <tr>
                  {tableData.headers.map((thead, i) => {
                    const { title, sort } = thead;
                    const sortOrder =
                      sort === null ? "top" : sort ? "top" : "bottom";
                    return (
                      <th
                        key={i}
                        onClick={() => {
                          sortTableHandler(title, sortOrder, i);
                        }}
                        className={
                          thead.sort !== null ? styles["sorted-row"] : ""
                        }
                      >
                        {title}{" "}
                        <span className={styles["sort-icon"]}>
                          {sort === null ? "↕" : sort ? "↑" : "↓"}{" "}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className={styles["table-body"]}>
                {tableData.data.map((trow, i) => {
                  return (
                    <tr className={styles["main-row"]} key={i}>
                      {trow.map((tcell, i) => {
                        if (typeof tcell === "string") {
                          return (
                            <td key={i}>
                              <span className={styles["top-left"]}>
                                {tcell}
                              </span>
                            </td>
                          );
                        } else {
                          return (
                            <td key={i}>
                              {tcell.map((cellData, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{cellData}</td>
                                  </tr>
                                );
                              })}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          <footer>
            Showing 1 to {tableData.data.length} of {tableData.data.length}{" "}
            entries{" "}
          </footer>{" "}
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
