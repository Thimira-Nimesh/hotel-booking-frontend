import axios from "axios";
import app from "../config/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app, "gs://hotel-hub79.appspot.com");

export default function uploadMedia(file) {
  if (!file) {
    console.log("No file Selected");
    return;
  }

  const fileRef = ref(storage, file.name);

  return uploadBytes(fileRef, file);
}

// .then((snapshot) => {
//   getDownloadURL(snapshot.ref).then((url) => {
//     console.log(url);
//   });
//   console.log("Uploaded a blob or file");
// });
