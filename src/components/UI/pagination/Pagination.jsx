import React from 'react'
import { getPagesArray } from '../../../utils/pages';
import cl from './Pagination.module.css'

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={cl.page__wrapper}>
        {pagesArray.map(num => 
          <span 
          onClick={() => changePage(num)}
          key={num}
          className={page !== num ? cl.page : `${cl.page} ${cl.page__current}`}
          >
          {num}
          </span>
        )}
      </div>
  )
}

export default Pagination;