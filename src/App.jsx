import React from "react";
import Form from "./components/form";
import Cards from "./components/cards";

function App() {
  const [data, setData] = React.useState([]);
  console.log(data);

  return (
    <>
      <div className="container mt-5">
        <Form setData={setData} />
        {data.map((item) => (
          <Cards
            setData={setData}
            key={item.id}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
