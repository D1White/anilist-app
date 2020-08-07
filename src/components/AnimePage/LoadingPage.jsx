import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingPage() {
  return (
    <ContentLoader className="anime-popup__content"
    speed={3}
    width={1170}
    height={567}
    viewBox="0 0 390 189"
    backgroundColor="#555555"
    foregroundColor="#969696"
  >
    <rect x="0" y="0" rx="13" ry="13" width="132" height="189" /> 
    <rect x="163" y="0" rx="9" ry="9" width="222" height="40" /> 
    <rect x="163" y="53" rx="5" ry="5" width="222" height="17" /> 
    <rect x="163" y="80" rx="5" ry="5" width="222" height="17" /> 
    <rect x="163" y="108" rx="9" ry="9" width="222" height="78" />
  </ContentLoader>
  )
}

export default LoadingPage
