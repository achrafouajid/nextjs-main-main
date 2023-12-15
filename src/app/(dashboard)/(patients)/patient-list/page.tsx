import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "No.",
    dataIndex: "key",
  },
  {
    title: "Nom",
    dataIndex: "name",
  },
  {
    title: "Naissance",
    dataIndex: "product",
  },
  {
    title: "Addresse",
    dataIndex: "status",
  },
  {
    title: "Ville Pays",
    dataIndex: "location",
  },
  {
    title: "Programme",
    dataIndex: "program",
  },
];
const data1: any[] | undefined = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Customers = () => {
  return (
    <div>
      <div className="mb-4 font-bold text-xl">Liste des patients</div>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
