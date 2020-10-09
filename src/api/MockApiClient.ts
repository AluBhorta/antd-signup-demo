import { User } from "../models";

export class MockApiClient {
  async signupNewUser(user: User, password: string) {
    /* submit user to auth API */
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Submitting new user: ${user.firstName}`);
        resolve(true);
      }, 1000);
    });
  }
}
