import { deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import Input from "./Input";
import Button from "./Button";

export default function CardItem({ data, ...props }) {
  //    function change(str) {
  //     // Using replace method with regEx
  //     return str.slice(0, 1).toUpperCase().concat(str.slice(1));
  //   }

  const [dataItem, setDataItem] = useState([]);
  const [idItem, setIdItem] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState(true);
  console.log(data);

  const handleUpdate = async (docId) => {
    setIdItem(docId);
    const docRef = doc(db, "jobs", docId);
    await onSnapshot(docRef, (doc) => {
      const result = [];
      result.push({
        id: doc.id,
        ...doc.data(),
      });
      console.log("result: ", result);
      setDataItem(result);
    });
  };

  const handleUpdateStatus = async (docId) => {
    console.log("update status");
    const docRef = doc(db, "jobs", docId);
    await updateDoc(docRef, {
      status: true,
    });
  };
  console.log("status", dataItem);

  return (
    <>
      {idItem
        ? dataItem.length > 0 &&
          dataItem.map((item, index) => {
            return (
              <div
                className="flex flex-row justify-between gap-5"
                key={item.id}
              >
                <Input
                  defaultValue={item.nameJob}
                  onChange={(e) => setText(e.target.value)}
                ></Input>
                <div className="flex flex-row gap-x-7 ">
                  <Button
                    onClick={async () => {
                      console.log("click update");
                      const washingtonRef = doc(db, "jobs", idItem);

                      // Set the "capital" field of the city 'DC'
                      await updateDoc(washingtonRef, {
                        nameJob: text,
                      });
                      setIdItem("");
                    }}
                  >
                    save
                  </Button>
                </div>
              </div>
            );
          })
        : data.length > 0 &&
          data.map((item, index) => {
            return (
              <div
                className="border-b-[1px]  flex justify-between [&:not(:last-child)]:border-gray-300"
                key={item.id}
              >
                {item.status ? (
                  <div className="flex flex-col gap-2">
                    {" "}
                    <h3 className="text-[1.6rem] line-through text-red-500">
                      {item.nameJob}
                    </h3>
                    <span className="text-gray-400">
                      {new Date(
                        item.createAt?.seconds * 1000
                      ).toLocaleDateString("vi-VI")}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[1.6rem] ">{item.nameJob}</h3>
                    <span className="text-gray-400">
                      {new Date(
                        item.createAt?.seconds * 1000
                      ).toLocaleDateString("vi-VI")}
                    </span>
                  </div>
                )}
                <div className="flex flex-row gap-x-7 ">
                  {item.status === true ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 hidden "
                      onClick={() => handleUpdateStatus(item.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                      onClick={() => handleUpdateStatus(item.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                  )}

                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 cursor-pointer"
                    onClick={() => handleUpdate(item.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 cursor-pointer"
                    onClick={async () => {
                      await deleteDoc(doc(db, "jobs", item.id));
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
      <h3>Tottal Job: {data.length}</h3>
    </>
  );
}
