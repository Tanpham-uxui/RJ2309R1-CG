import React from "react";

function jsxGenerator(start, end, jsxComponent){
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(
        jsxComponent(i)
    )
  }
  return result
}
export default jsxGenerator