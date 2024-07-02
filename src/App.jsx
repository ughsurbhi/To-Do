import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="bg-cyan-300 grid py-4 min-h-screen">
      <Todo />

      <footer className="text-center py-4 bg-transparent">
        <p className="text-sm text-slate-800">
          Thanks for visiting, happy coding 💻 - Surbhi
        </p>
      </footer>
    </div>
  );
};

export default App;
