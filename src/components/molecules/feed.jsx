import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Shopping_item from './Shopping_item'
import { subscribe, unsubscribe } from '@/eventSystem/eventBus'

export default function Feed() {
  const [data, setData] = useState([])
  const [item, setItem] = useState("")

  // Supabase forbindelse
  const supabase = createClient(
    "https://uvwzoeraluinvatqglpj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2d3pvZXJhbHVpbnZhdHFnbHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MTYyMzcsImV4cCI6MjAyMDI5MjIzN30.GrYxLJ-halY45SGpXzqTbBciRv3EXr6yXg0qXFNSBZQ"
  )

  useEffect(() => {
    console.log("this shows that useEffect is run")
    function handleEvent(){
      fetchUserData()
      console.log("the handleEvent function is called")
    };
    subscribe("FormAddItemFunction", handleEvent)
    console.log("event called this function")
    
    return () => {
      unsubscribe("FormAddItemFunction", handleEvent)
    };
    
  }, [fetchUserData]);
  
  async function fetchUserData() {
    const {data, error} = await supabase
    .from("shopping-items")
    .select(item)
    console.log(data)
    console.log(error)
    setData(data)
  }

  const handleDelete = async function(id){
    const {data, error} = await supabase
    .from("shopping-items")
    .delete()
    .match({id:id});
    if (error) {
      console.error()
    }
    fetchUserData()
  }
  
  return (
    <div className='feed-container'>
      {data.slice().map(dataItem => {
        return <Shopping_item key={dataItem.id} shopping_item={dataItem} onDelete={handleDelete}/>
      })}
    </div>
  )
}
