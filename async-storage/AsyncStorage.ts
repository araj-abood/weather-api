import AsyncStorage from "@react-native-async-storage/async-storage";

export function StoreUsreInStorage(username: string, password: string) {
  const user = { username, password };
  const userJson = JSON.stringify(user);
  AsyncStorage.setItem("userData", userJson);
  console.log("User Stored!");
}

export async function CheckUserStoredInstorage(): Promise<boolean> {
  const promiseData = await AsyncStorage.getItem("userData");
  const userObject = (await JSON.parse(promiseData as string)) as {
    username: string;
    password: string;
  };

  return userObject.username !== "" && userObject.password !== "";
}

export async function getUserFromStorage() {
  const promiseData = await AsyncStorage.getItem("userData");
  const userObject = (await JSON.parse(promiseData as string)) as {
    username: string;
    password: string;
  };

  return userObject;
}

export function removeUserFromStorage() {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({ username: "", password: "" })
  );
}
