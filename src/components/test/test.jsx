import { useState } from "react";

import uploadMedia from "../../utils/mediaUpload";

export default function TestComponent() {
  const [file, setfile] = useState(null);
  return (
    <div className="w-full h-[100vh] bg-red-600 flex justify-center items-center">
      <input
        type="file"
        defaultValue={file}
        onChange={(e) => {
          setfile(e.target.files[0]);
        }}
      />
      <button
        onClick={() => {
          uploadMedia(file);
        }}
      >
        Upload
      </button>
    </div>
  );
}
