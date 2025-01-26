










// import React, { useState } from "react";

// const UploadPDF = () => {
//   const [file, setFile] = useState(null);

//   const handleUpload = async () => {
//     const formData = new FormData();

//     formData.append("file", file); // PDF ফাইলটি এখানে যোগ করুন
//     formData.append("upload_preset", "pdfuploading"); // আপনার unsigned preset name দিন
//     formData.append("resource_type", "raw"); // PDF আপলোডের জন্য `raw` ব্যবহার করতে হবে

//     try {
//       const response = await fetch(
//         "https://api.cloudinary.com/v1_1/dxpkbjc2i/upload",

//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();
//       console.log("Uploaded PDF URL:", data);
//     } catch (error) {
//       console.error("Error uploading PDF:", error);
//     }
//   };

//   return (
//     <div className="pt-56">
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button className="btn " onClick={handleUpload}>
//         Upload PDF to Cloudinary
//       </button>

//       <a
//         href="https://res.cloudinary.com/dxpkbjc2i/image/upload/v1737801667/o60bpjc5ztsb98ndf1dl.pdf"
//         download
//       >
//         Download PDF
//       </a>
//     </div>
//   );
// };

// export default UploadPDF;
