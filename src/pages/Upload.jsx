import axios from "axios";
import { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    await axios.post("http://localhost:5000/api/upload", formData);

    alert("Upload successful");
  };

  return (
    <div className="container">
      <h2>Upload CSV</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Upload;