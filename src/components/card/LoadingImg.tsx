import "./LoadingImg"
import React from 'react'


export const LoadingImg: React.FC = () => {
  return (
    <div className="loading-indicator-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  )
}
