import { getUser } from "../utils/LocalStorageData";

const userInfo = getUser();

export const initialState = {
  user: userInfo,
};
