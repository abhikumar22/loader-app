import React, { useState, useEffect } from "react";
import LoaderComponent from "./components/LoaderComponent";
import { LOADING_STRUCTURES } from "./utils/constants";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currLoader, setCurrLoader] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChangeLoaderType = (type) => {
    setCurrLoader(type);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const Structure1 = () => {
    return (
      <LoaderComponent
        isLoading={isLoading}
        structureData={LOADING_STRUCTURES.SIMPLE_STRUCTURE}
      >
        <div>
          <div>
            <img
              style={{ height: "400px", width: "650px" }}
              src={
                "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            />
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <div>Contrary to popular belief in everyone</div>
        </div>
      </LoaderComponent>
    );
  };

  const Structure2 = () => {
    return (
      <LoaderComponent
        isLoading={isLoading}
        structureData={LOADING_STRUCTURES.NESTED_STRUCTURE}
      >
        <div>
          <img
            src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-9.png"
            alt="Content"
            style={{
              width: "100px",
              height: "100px",
              marginBottom: "20px",
            }}
          />
          <p style={{ width: "60%" }}>Content Line 1</p>
          <p style={{ width: "80%", margin: "10px 0" }}>Content Line 2</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <p style={{ width: "40%" }}>Content Line 3a</p>
            <p style={{ width: "40%" }}>Content Line 3b</p>
          </div>
        </div>
      </LoaderComponent>
    );
  };

  const RenderLoader = () => {
    return (
      <div style={{ marginTop: "5em" }}>
        {currLoader === 1 && <Structure1 />}
        {currLoader === 2 && <Structure2 />}
      </div>
    );
  };

  return (
    <div className="App_Wrapper">
      <div className="App_Container">
        <button onClick={() => handleChangeLoaderType(1)}>Display 1st</button>
        <button onClick={() => handleChangeLoaderType(2)}>Display 2nd</button>
      </div>
      <RenderLoader />
    </div>
  );
};

export default App;
