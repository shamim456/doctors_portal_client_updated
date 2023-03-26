import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwtToken?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            localStorage.setItem("access-token", data.result);
            setToken(data.result);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;

// import { useEffect, useState } from "react";

// const useToken = (email) => {
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     if (email) {
//       fetch(`http://localhost:5000/jwt?email=${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.accessToken) {
//             localStorage.setItem("accessToken", data.accessToken);
//             setToken(data.accessToken);
//           }
//         });
//     }
//   }, [email]);
//   return [token];
// };

// export default useToken;
