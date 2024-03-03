import React from 'react'
import styles from "./Shopping_item.module.css"

export default function Shopping_item({shopping_item, onDelete}) {
  return (
    <div className={styles.item}>
        <p htmlfor="shopping_list.item">{shopping_item.item}</p>
        <button className='delete' onClick={() => onDelete(shopping_item.id)}>Slet</button>
    </div>
  )
}
