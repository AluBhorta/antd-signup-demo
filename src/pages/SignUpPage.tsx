import React, { useState } from "react";
import LocationInput from "../components/LocationInput";
import { GenderInput } from "../models";

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState<GenderInput>();
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <h1>Sign Up</h1>

      <div>
        <form>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Gender</label>
            <select>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label>Location</label>
            <LocationInput />
          </div>

          <div>
            <label>Email</label>
            <input type="text" />
          </div>

          <div>
            <label>Password</label>
            <input type="password" />
          </div>

          <div>
            <label>Confirm Password</label>
            <input type="password" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
