import { Button, PageHeader } from "antd";
import React, { useContext } from "react";
import { UserContext } from "../AppState";

const Header: React.FC = () => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <>
      <PageHeader
        title="Simple AntD Signup"
        extra={
          user && [<Button onClick={() => updateUser(null)}>Sign Out</Button>]
        }
      ></PageHeader>
    </>
  );
};

export default Header;
