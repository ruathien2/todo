import React, { Suspense } from "react";
import { useTodo } from "./context/todoContext";

const Header = React.lazy(() => import("./modules/Header"));
const Content = React.lazy(() => import("./modules/Content"));

export default function App() {
  return (
    <Suspense>
      <div className="flex flex-col items-center justify-center gap-5 container-1">
        <Header></Header>
        <Content></Content>
      </div>
    </Suspense>
  );
}
