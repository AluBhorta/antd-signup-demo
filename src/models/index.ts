export type GenderInput = "MALE" | "FEMALE" | "OTHER";

export type User = {
  firstName: string;
  gender: GenderInput;
  location: string;
  email: string;
};
