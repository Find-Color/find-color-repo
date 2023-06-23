import React, { useEffect, useRef, useState } from "react";

const CloudinaryUpload = ({ onDeliveryURLChange }) => {
  const [missingPersonURL, setMissingPersonURL] = useState("");
  const widgetRef = useRef(null);

  useEffect(() => {
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "dn7lhv9d9",
        uploadPreset: "ml_default",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Upload result:", result);
          const deliveryURL = result.info.secure_url;
          console.log("Delivery URL:", deliveryURL);
          setMissingPersonURL(deliveryURL);
          onDeliveryURLChange(deliveryURL); // Lift up the state to the parent component
        } else {
          console.error("Upload error:", error);
        }
      }
    );
  }, [onDeliveryURLChange]);

  const openWidget = () => {
    widgetRef.current.open();
  };

  return (
    <div>
      <button onClick={openWidget}>Open Upload Widget</button>
    </div>
  );
};

export default CloudinaryUpload;
