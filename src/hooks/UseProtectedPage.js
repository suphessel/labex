
import { useEffect } from "react";
import { useHistory } from "react-router-dom"

const useProtectedPage = () => {
    const history = useHistory();
  
    useEffect(() => {
      const token = window.localStorage.getItem("token");
  
      if (token === null) {
        console.log("Não está logado!!!");
        alert("Você não está logado!");
        history.push("/login");
      }
    }, []);
  };

  export default useProtectedPage;