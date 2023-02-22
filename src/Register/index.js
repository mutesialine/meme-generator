import React from "react";
export default function Register() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinmemeGeneretor:true
  });

  function handleChange(event){
    const {name,type,checked,value} =event.target
    setFormData((prevdataForm) => ({
      ...prevdataForm,[name]: type==="checkbox"? checked:value}));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("successfull signed up");
    } else {
      console.log("password doesn't match");
    }
    if(formData.joinmemeGeneretor){
      console.log("thanks for vising meme generator")
    }
  }
  return (
    <div className="px-8 bg-gray-700 py-6">
      <form className=" flex flex-col space-y-4">
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="passwordconfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />
        <div className="flex space-x-6">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinmemeGeneretor"
            onChange={handleChange}
            checked={formData.joinmemeGeneretor}
          />
          <p htmlFor="okayToEmail" className="text-white">
            I want to join meme generator
          </p>
        </div>
        <button
          className="text-white text-lg bg-black w-fit py-2 px-3 rounded-md"
          onSubmit={handleSubmit}
        >
          sign Up
        </button>
      </form>
    </div>
  );
}
