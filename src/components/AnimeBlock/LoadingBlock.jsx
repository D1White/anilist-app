import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader className="animeBlock"
    speed={3}
    width={870}
    height={300}
    viewBox="0 0 870 300"
    backgroundColor="#555555"
    foregroundColor="#969696"
  >
    <rect x="0" y="13" rx="13" ry="13" width="188" height="246" /> 
    <rect x="235" y="15" rx="5" ry="5" width="139" height="35" /> 
    <rect x="235" y="64" rx="5" ry="5" width="231" height="35" /> 
    <rect x="235" y="114" rx="5" ry="5" width="360" height="35" /> 
    <rect x="235" y="162" rx="5" ry="5" width="361" height="98" />
  </ContentLoader>
  )
}

export default LoadingBlock
