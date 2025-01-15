import React from 'react'

function Pagination({pageNo, setPageNo}) {
    const prevPages = Array.from({ length: 3 }).map((_, index) => pageNo - index).filter((page) => page > 0).reverse();
    const nextPages = Array.from({ length: 3 }).map((_, index) => pageNo + index + 1);

    const pages= [...prevPages, ...nextPages]
    const handleNext = ()=>{
        setPageNo((prev)=>prev+1);
    }
    const handlePrev = ()=>{
        setPageNo((prev)=>prev-1);
    }
    const handleSelection = (page)=>{
        setPageNo(page);
    }
  return (
    <div className='pagination-conatiner'>
        {
            pageNo > 0 && 
            <div className="page-btn" onClick={handlePrev}>{"<"}</div>
            
        }
        {pages.map((page)=>(
            <div className={`page-btn ${page===pageNo ? 'active' : ''}` } key={page} onClick={()=>handleSelection(page)}>{page}</div>
        ))}
        <div className="page-btn" onClick={handleNext}>{">"}</div>
    </div>
  )
}

export default Pagination
