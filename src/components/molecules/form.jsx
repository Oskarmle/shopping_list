// import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
import React from 'react'

export default function form() {

  return (
    <div>
      <form className='shopping-list_Form'>
        <label for="item" >Tilføj ting, mad eller pepsi</label>
        <div className="line"></div>
        <input type="text" id='item' name='item' placeholder='Pepsi Max' className='inputfield'  />
        <input className='add' type="submit" value="Tilføj"/>
      </form>

    </div>
  )
}
