import { useState } from 'react';

function Todos(props) {
  return (
    <div>
      <fieldset>
        <legend>Add todo</legend>
        <input type='text' placeholder='What to do?' />
        <button>Add</button>
      </fieldset>

      <div className='card'>
        <h3>Todos</h3>
        <ol>
          <li>one</li>
          <li>two</li>
        </ol>
      </div>
    </div>
  );
}
export default Todos;
