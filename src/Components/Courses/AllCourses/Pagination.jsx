import React from "react";
import _ from "lodash";
import './css/paginationStyle.css'
const Pagination = (props) => {
  const { itemsCount, pageSize,currentPage,onPageChange } = props;
console.log(currentPage)
  const pagesCount = Math.ceil(itemsCount / pageSize);
  
if(pagesCount===1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav className="mb-5">
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={page===currentPage?'page-item active ml-2':'page-item ml-2'}>
            <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
