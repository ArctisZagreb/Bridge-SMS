export interface tableComponent {
  tableDB: tableDataInterface;
}
export interface tableDataInterface {
  headers: tableHeader[];
  data: dataItem;
}
export type dataItem = (string | string[])[][];
export interface tableHeader {
  title: string;
  sort: null | boolean;
}
