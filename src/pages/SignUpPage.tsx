import { Button, Card, Col, Input, Row, Select } from "antd";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { MockApiClient } from "../api/MockApiClient";
import { UserContext } from "../AppState";
import LocationInput from "../components/LocationInput";
import { GenderInput, User } from "../models";

const { Option } = Select;

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState<GenderInput>("MALE");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { push } = useHistory();
  const { updateUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match! Try again.");
    }

    const newUser: User = {
      firstName,
      gender,
      location,
      email,
    };
    const apiClient = new MockApiClient();

    apiClient.signupNewUser(newUser, password).then((successful) => {
      if (successful) {
        updateUser(newUser);
        push("/dashboard");
      } else {
        alert("Error! Unable to singup user.");
      }
    });
  };

  return (
    <>
      <Card>
        <Row>
          <Col span={12} offset={6}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <Input
                  value={firstName}
                  placeholder="Enter first name..."
                  onChange={(e) => setFirstName(e.target.value)}
                  required
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
                  required
                />
              </div>

              <div>
                <label>Password</label>
                <Input
                  value={password}
                  type="password"
                  placeholder="Enter password..."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div>
                <label>Confirm Password</label>
                <Input
                  value={confirmPassword}
                  type="password"
                  placeholder="Enter password again..."
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button type="primary" htmlType="submit">
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
