import { Card, Input, Table } from "antd";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../AppState";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

const dataSource = [
  {
    key: "1",
    firstName: "Mike",
    gender: "MALE",
    location: "10 Downing Street, CA",
    email: "mike@example.com",
  },
  {
    key: "2",
    firstName: "Jane",
    gender: "FEMALE",
    location: "23 Baker Street, RU",
    email: "jane@example.com",
  },
];

const DashboardPage: React.FC = () => {
  const { user } = useContext(UserContext);
  if (user === null) {
    return <Redirect to="/signup" />;
  }

  dataSource.push({ ...user, key: "3" });

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
