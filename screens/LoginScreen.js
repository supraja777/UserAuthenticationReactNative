import AuthContent from "../components/Auth/AuthContent";
import {useContext, useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../util/Auth";
import { AuthContext } from "../store/Auth-context";
import { Alert } from "react-native";


function LoginScreen() {
  const authContext = useContext(AuthContext)

  const [isloading, setIsLoading] = useState(false);

  if (isloading) {
    return <LoadingOverlay message="logging-in user" />;
  }

  async function LoginHandler({ email, password }) {
    setIsLoading(true);
    try {
      const token = await loginUser(email, password);
      authContext.authenticate(token)

    } catch(error) {
      Alert.alert("Invalid credentials", "Try again!")
      setIsLoading(false);
    }
    
   
  }

  return <AuthContent isLogin onAuthenticate={LoginHandler} />;
}

export default LoginScreen;
