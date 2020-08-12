import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingPage() {
  return (
    <div className='container'>
      <ContentLoader className='mainBlocks'
        speed={3}
        width={1170}
        height={830}
        viewBox="0 0 585 415"
        backgroundColor="#333333"
        foregroundColor="#555555"
      >
        <rect x="0" y="12" rx="13" ry="13" width="135" height="403" /> 
        <rect x="150" y="12" rx="13" ry="13" width="435" height="403" />
    </ContentLoader>
  </div>
  )
}

export default LoadingPage
