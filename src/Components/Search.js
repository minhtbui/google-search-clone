import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Search({hideBtns = false}) {
  const [input, setInput] = useState('');
  const history = useHistory(); // access to the history instance that may use to navigate

  const search = (e) => {
    e.preventDefault(); // prevent refresh when on clicked
    history.push('/search');
  };
  return (
    <form className='search'>
      <div className='search_input'>
        <SearchIcon className='search_input--searchIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div className={`search_buttons ${hideBtns? 'hidden':''}`}>
        <Button type='submit' variant='outlined' onClick={search}>
          Google Search
        </Button>
        <Button variant='outlined'>I'm Feeling Shit</Button>
      </div>
    </form>
  );
}

export default Search;
