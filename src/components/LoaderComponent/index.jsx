import React from "react";
import { LOADING_TILES } from "./constants";
import "./style.css";

const LoaderComponent = ({ 
    structureData, 
    isLoading,
    children,
}) => {
  /* If the state is !Loading, then return the children, 
  as Loading is already completed */
  if (!isLoading) {
    return <>{children}</>;
  }

  const renderNestedStructure = (structure) => {
    return structure.map((item, index) => {
      const { type, children, style, width, height } = item;

      // If type is multipleTiles, then again recursively call the renderNestedStructure
      if (type === LOADING_TILES.MULTIPLE_TILES) {
        return (
          <div key={index} className="Loader_Component_Nested_Group" style={style}>
            {renderNestedStructure(children)}
          </div>
        );
      }

      // Otherwise based on loaderType, render the loader
      return (
        <div
          key={index}
          className={`Loader_Component_Item ${type}`}
          style={{ width: width, height: height, ...style }}
        ></div>
      );
    });
  };

  return <div className="Loader_Component">{renderNestedStructure(structureData)}</div>;
};

export default LoaderComponent;
