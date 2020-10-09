import { Card, Input, Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../AppState";
const { Search } = Input;

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
    firstName: "Jilani",
    gender: "FEMALE",
    location: "Ahem, Sk",
    email: "jil@example.com",
  },
];

const DashboardPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [allData, setallData] = useState(dataSource);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    if (user) {
      const newUser = { ...user, key: "3" };
      setFilteredData([...filteredData, newUser]);
      setallData([...allData, newUser]);
    }
    return () => {};
  }, []);

  if (!user) {
    return <Redirect to="/signup" />;
  }

  return (
    <>
      <Card>
        <h1>Dashboard</h1>
        <Search
          placeholder="Search via email"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onSearch={(value) => {
            setFilteredData(
              searchText === ""
                ? allData
                : allData.filter(
                    (data) => data.email.indexOf(searchText) !== -1
                  )
            );
          }}
          style={{ width: 200, marginBottom: "10px" }}
        />
        <Table dataSource={filteredData} columns={columns} />
      </Card>
    </>
  );
};

export default DashboardPage;
