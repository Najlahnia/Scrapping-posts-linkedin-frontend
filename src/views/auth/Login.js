/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory(); // Initialize history for redirection
  const { loading } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    setError(""); // Réinitialiser l'état d'erreur

    // Validation de base
    if (!username || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    try {
      // Dispatch de l'action `loginUser`
      const resultAction = await dispatch(loginUser({ username, password }));

      // Vérifier si l'action a réussi
      if (loginUser.fulfilled.match(resultAction)) {
        console.log("Connexion réussie :", resultAction.payload);
        alert("Connexion réussie !");
        localStorage.setItem("userInfo", JSON.stringify(resultAction.payload));
        history.push("/admin"); // Redirection vers la page admin
      } else {
        // Gérer l'action rejetée
        setError(resultAction.payload || "Identifiants incorrects");
      }
    } catch (err) {
      console.error("Erreur de connexion :", err);
      setError("Une erreur s'est produite lors de la connexion");
    }
  };


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150">
                    <img alt="GitHub" className="w-5 mr-1" src={require("assets/img/github.svg").default} />
                    Github
                  </button>
                  <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150">
                    <img alt="Google" className="w-5 mr-1" src={require("assets/img/google.svg").default} />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm mb-3">
                      {error}
                    </div>
                  )}

                  <div className="text-center mt-6">
                  <button
  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
  type="button"
  onClick={handleLogin}
  disabled={loading}
>
  {loading ? (
    <div className="flex items-center justify-center">
      <ClipLoader color="#ffffff" size={20} />
    </div>
  ) : (
    "Sign In"
  )}
</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-blueGray-200">
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
