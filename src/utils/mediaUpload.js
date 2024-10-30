import axios from "axios";
import app from "../config/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app, "gs://hotel-hub79.appspot.com");

export default function uploadMedia(file) {
  if (file == null) {
    return;
  }

  const fileRef = ref(storage, file.name);

  uploadBytes(fileRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      console.log(url);

      const roomWithMedia = {
        roomId,
        category,
        maxGuests,
        available,
        img: url,
        specialDescription,
        notes,
      };
      console.log(img);
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/api/rooms", roomWithMedia)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    console.log("Uploaded a blob or file");
  });
}
