import Axios from "axios";

const localUrl = "http://localhost:8080/auth";

export const handleLoginApi = async (event, setAuthKey, setAlert) => {
  const url = `${localUrl}/login`;
  // Todo site config js

  event.preventDefault();
  let formData = {
    email: event.target[0].value,
    password: event.target[2].value,
  };
  try {
    await Axios.post(url, formData, {
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      console.log(res.data);
      setAuthKey(res?.data.accsessToken);
      if (res.data.accsessToken) {
        setAlert({
          show: true,
          severity: "success",
          message: "istifadeci movcuddur",
          title: "duzgun giris",
        });
        localStorage.setItem("authkey", JSON.stringify(res.data.accsessToken))
      }
    });
  } catch (err) {
    console.error("error", err);
    setAlert({
      show: true,
      severity: "warning",
      message: err.message,
      title: "email ve ya parol sehvdir",
    });
  }
};

export const handleRegisterApi = async (event) => {
  const url = `${localUrl}/register`;
};
