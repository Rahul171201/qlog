import { useCallback } from "react";
import handleLogin from "@/helper/handleLogin";
import handleRegister from "@/helper/handleRegister";

const useFormSubmit = (formType, dispatchForm, users) => {
  return useCallback(
    (e) => {
      e.preventDefault();
      if (formType === "login") {
        dispatchForm({ type: "start-login" });
        setTimeout(() => {
          dispatchForm({
            type: "login",
            action: handleLogin,
            event: e,
            payload: users,
          });
        }, 3000);
      } else if (formType === "register") {
        dispatchForm({ type: "start-registration" });
        setTimeout(() => {
          dispatchForm({
            type: "register",
            action: handleRegister,
            event: e,
            payload: users,
          });
        }, 3000);
      } else {
        throw new Error(
          `Invalid form type: Unrecognized form type ${props.type}`
        );
      }
    },
    [dispatchForm, formType]
  );
};

export default useFormSubmit;
