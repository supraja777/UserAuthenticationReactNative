import axios from "axios";
import { Alert } from "react-native";

const API_KEY = "AIzaSyAbA7wvZHcl3gpx0ZAxmDgRZt9yKcBrm2s";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken

  return token
}

export  function createUser(email, password) {
 return  authenticate("signUp", email, password);
}

export  function loginUser(email, password) {
  return authenticate("signInWithPassword", email, password);
}