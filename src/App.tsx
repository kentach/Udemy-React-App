import "./App.css";
import TodoList from "./components/TodoList";
import SearchBar from "./components/searchBar";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState(""); // 検索欄に現在入力されている文字

  return (
    <>
      <div className="container">
        <SearchBar value={searchValue} setSearchValue={setSearchValue}/>
        <TodoList value={searchValue}/>
      </div>
    </>
  );
}

export default App;
