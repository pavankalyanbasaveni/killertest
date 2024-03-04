import { useState } from "react";
const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(user);
  };

  const sendmail = async (data) => {
    try {
      console.log("data from form", data);
      const se = await fetch("http://localhost:3000/mail", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
      });
      const res = await se.json();
      if (res.status === "ok") {
        alert("Mail sent!");
      }
      console.log(res);
    } catch (error) {
      console.log("error at mail sending", error);
    }
  };

  const { name, email, msg } = user;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !msg) {
      alert("data");
      return;
    }
    sendmail({ name, msg, email });
  };
  return (
    <div>
      <header>testing</header>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" id="name" onChange={handleChange} />
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
          />
          <input type="text" name="msg" id="msg" onChange={handleChange} />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
