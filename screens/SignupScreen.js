import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/Auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/Auth-context";
function SignupScreen() {
  const [isloading, setIsLoading] = useState(false);

  const authContext = useContext(AuthContext)

  if (isloading) {
    return <LoadingOverlay message="creating user" />;
  }

  async function signUpHandler({ email, password }) {
    setIsLoading(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token)
    } catch(error) {
      Alert.alert("Invalid credentials", "Try again")
      setIsLoading(false);
    }
   
   
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
