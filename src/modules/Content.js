import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useTodo } from "../context/todoContext";
import CardList from "../components/CardList";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export default function Content() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  console.log(text);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleClickTodo = async (e) => {
    e.preventDefault();

    try {
      const colRef = collection(db, "jobs");
      console.log(colRef);
      const docRef = await addDoc(colRef, {
        nameJob: text,
        status: false,
        createAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setTodo([...todo, text]);
    setText("");
    document.querySelector("input").focus();
    document.querySelector("input").value = "";
  };

  useEffect(() => {
    const colRef = collection(db, "jobs");
    onSnapshot(colRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setTodo(results);
    });
  }, []);

  return (
    <>
      <form
        onSubmit={handleClickTodo}
        className="box-shadown flex flex-row gap-x-5 px-10 py-5 rounded-lg container-1"
      >
        <Input onChange={onChange}></Input>
        <Button type={"submit"}>Add</Button>
      </form>
      {todo && todo.length > 0 && <CardList data={todo}></CardList>}
    </>
  );
}
