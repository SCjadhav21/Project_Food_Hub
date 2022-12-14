import React from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function RecipesAndDirectoryPagination({ total, current, onchange }) {
  const buttons = new Array(total).fill(0).map((ele, i) => <buttons onClick={() => onchange(current = i + 1)} className={current == i + 1 ? "activepage" : "notactivepage"}>{i + 1}</buttons>)
  const pre = <button disabled={current == 1} onClick={() => onchange(current - 1)}><GrFormPrevious color='#676e7a' /> Prev</button>
  const next = <button disabled={current == total} onClick={() => onchange(current + 1)} >Next <GrFormNext color='#676e7a' /></button>
  return (
    <div className='recipesAndDirectoryPagination' >
      <div><p>Page: </p>
        {buttons}</div>
      <div>{pre}
        {next}</div>
    </div>
  )
}
