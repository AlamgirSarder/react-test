import React, { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: ""
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // টাইপ করলে আগের error মুছে ফেলি
    setErrors("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 Error Checking
    if (!formData.name || !formData.age || !formData.city) {
      setErrors("⚠️ সব ফিল্ড পূরণ করুন");
      return;
    }

    if (parseInt(formData.age) < 18) {
      setErrors("⚠️ বয়স অবশ্যই ১৮ বা তার বেশি হতে হবে");
      return;
    }

    // ✅ Confirm before submit
    const confirm = window.confirm("আপনি কি নিশ্চিত সাবমিট করতে চান?");
    if (!confirm) {
      return;
    }

    // ✅ Submit and reset
    setSubmittedData(formData);
    setFormData({ name: "", age: "", city: "" });
    setErrors("");
  };

  return (
    <div>
      <h2>Person Information Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* 🔔 Error Message */}
      {errors && <p style={{ color: "red" }}>{errors}</p>}

      {/* ✅ Submitted Info */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Info:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
