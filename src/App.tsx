import React, { useState } from "react";
import AddList from "./components/AddList";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState<DataState["people"]>([
    {
      name: "dishp",
      age: 3,
      url: "https://cdn4.vectorstock.com/i/1000x1000/01/38/young-man-profile-vector-14770138.jpg",
      note: "asdasdasd",
    },
  ]);

  return (
    <>
      <AddList people={people} setPeople={setPeople} />
      <List people={people} />
    </>
  );
}

export default App;
