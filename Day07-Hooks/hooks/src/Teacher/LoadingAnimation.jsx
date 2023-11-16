import React from "react";
import ContentLoader from "react-content-loader";

export const LoadingTable = prop =>{
  return(
      <ContentLoader
          width={100}
          height={60}
          viewBox='0 0 100 160'
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
          {...prop}
      >{prop.children}
      </ContentLoader>
  )
}