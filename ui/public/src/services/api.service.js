import Axios from "axios";
import signUpSchema from "../components/validations/signUpValidation";
import { userStore } from "../store/userStore";

const localUrl = "http://localhost:8080/auth";

export const handleLoginApi = async(formData) => {
  const { setAuthKey } = userStore();

  // console.log(formData);
  const url = `${localUrl}/login`;
    try {
      await Axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        setAuthKey(res?.data.accsessToken);
        console.log(res.data)
        if (res.data.accsessToken) {
          // setAlert({
          //   show: true,
          //   severity: "success",
          //   message: "istifadeci movcuddur",
          //   title: "duzgun giris",
          // });
          localStorage.setItem("authkey", JSON.stringify(res.data.accsessToken));
        }
      });
    } catch (err) {
      console.error("error", err);
      // setAlert({
      //   show: true,
      //   severity: "warning",
      //   message: err.message,
      //   title: "email ve ya parol sehvdir",
      // });
    }
}

export const handleRegisterApi = async (formData) => {
  const url = `${localUrl}/register`;
  console.log(formData);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log("response", response);

    const data = await response.json();

    console.log("data", data);

    // ! fieldsetin css-in duzeltmek lazimdiki error mesaji duzgun yerde cixsin
    // const isValid = await signUpSchema.isValid(formData);
    // if (!isValid) {
    //   event.target[1].textContent = "error";
    // }
  } catch (error) {
    console.log("handleSubmit error", error);
  }
};
