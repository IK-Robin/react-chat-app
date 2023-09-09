"use client";
import Image from "next/image";
import React, { useState } from "react";
import cosefile from "@/public/next.svg";
import styles from "./register.module.scss";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "@/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useRouter } from "next/navigation";
function Register() {

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
 const router =useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
   
      //  upload image
      // router.push()

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          // Handle unsuccessful uploads
          setError(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // Add a new document in collection "cities"

            await setDoc(doc(db, "users", `${res.user.uid}`), {
              id: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db,'userChat',res.user.uid),{});
            router.push('/register/home');
          });

         

        }
      );
    } catch {
      (error) => {
        setError(true);
        setErrorMessage(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      };
    }
  };
  return (
    <div className={styles.fromContainer}>
      <div className={styles.fromWrapper}>
        <span className={styles.logo}>IKR Chat</span>
        <span className={styles.title}>Register</span>
        <form onSubmit={handelSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="example@gmail.com" />
          <input type="password" name="" id=" " placeholder="password" />

          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="inputFile"
          />
          <label htmlFor="inputFile">
            <Image src={cosefile} alt="chose file" width={30} height={30} />{" "}
            <span> add an image</span>
          </label>
          <button type=""> Sing Up</button>
          {error && <span>{errorMessage}</span>}
        </form>

        <div className={styles.goToLogin}>
          Alrady Have a accoutnt{" "}
          <Link href={"/register/home/login"}>
            <span>login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
