import { Card, Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const DashboardPage: React.FC = () => {
  return (
    <>
      <Card>
        <h1>Dashboard</h1>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
};

export default DashboardPage;
