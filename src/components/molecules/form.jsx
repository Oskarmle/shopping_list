// import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
import { publish } from '@/eventSystem/eventBus'
import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'

export default function Form() {
  const [item, setItem] = useState("")

  // Supabase forbindelse
  const supabase = createClient(
    "https://uvwzoeraluinvatqglpj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2d3pvZXJhbHVpbnZhdHFnbHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MTYyMzcsImV4cCI6MjAyMDI5MjIzN30.GrYxLJ-halY45SGpXzqTbBciRv3EXr6yXg0qXFNSBZQ"
  )

  const handleItemChange = function(e) {
    e.preventDefault();
    setItem(e.target.value);  
    console.log(e.target.value)
  }

    async function addItem() {
      const { data, error } = await supabase
      .from("shopping-items")
      .insert({item})
      if (error) {
        console.log(error.message)
      }  else {
        console.log(data)
        setItem("");
        publish("FormAddItemFunction")
      }
    }
  
  
  function handleAddItem(e) {
    e.preventDefault();
    addItem()
  } 

  return (
    <div>
      <form className='shopping-list_Form' onSubmit={handleAddItem}>
        <label>Tilføj ting, mad eller Pepsi</label>
        <div className="line"></div>
        <input type="text" id='item' onChange={handleItemChange} name='item' placeholder='Pepsi Max' className='inputfield' value={item}/>
        <input className='add' type="submit" value="Tilføj"/>
      </form>
    </div>
  )
}
