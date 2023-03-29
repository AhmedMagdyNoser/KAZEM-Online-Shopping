import React from 'react'

const SubTitle = ({ title, btntitle, pathText }) => {
    return (
        <div className="d-flex justify-content-between pt-4">
      <div className="sub-tile">{title}</div>
      {btntitle ? (
        <a href={`${pathText}`} style={{ textDecoration: "none" }}>
          <div className="shopping-now">{btntitle}</div>
        </a>
      ) : null}
    </div>
    )
}

export default SubTitle
