import { Button, Card, Col, Input, Row, Select } from "antd";
import React, { useState } from "react";
import LocationInput from "../components/LocationInput";
import { GenderInput } from "../models";

const { Option } = Select;

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState<GenderInput>();
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: any) => {
    console.log("e", e);
  };

  return (
    <>
      <Card>
        <Row>
          <Col span={12} offset={6}>
            <h1>Sign Up</h1>
            <form>
              <div>
                <label>First Name</label>
                <Input
                  value={firstName}
                  placeholder="Enter first name..."
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label>Gender</label>
                <br />
                <Select
                  value={gender}
                  onChange={(_gender) => setGender(_gender)}
                  style={{ minWidth: "100px" }}
                  placeholder="Select gender..."
                >
                  <Option value="MALE">Male</Option>
                  <Option value="FEMALE">Female</Option>
                  <Option value="OTHER">Other</Option>
                </Select>
              </div>

              <div>
                <label>Location</label>
                <LocationInput location={location} setLocation={setLocation} />
              </div>

              <div>
                <label>Email</label>
                <Input
                  value={email}
                  type="email"
                  placeholder="Enter email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label>Password</label>
                <Input
                  value={password}
                  type="password"
                  placeholder="Enter password..."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label>Confirm Password</label>
                <Input
                  value={confirmPassword}
                  type="password"
                  placeholder="Enter password again..."
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default SignUpPage;
