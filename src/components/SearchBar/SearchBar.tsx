import React from 'react';
import { toast } from 'react-hot-toast';
import css from '../SearchBar/SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    // const searchInputValue = (event.target as HTMLButtonElement).form?.elements.searchInput.value.trim();
    
    const form = (event.target as HTMLButtonElement).form;
    if (!form) return; 

    const searchInput = Array.from(form.elements).find(
      (el) => el.nodeName.toLowerCase() === 'input' && el.name === 'searchInput'
    ) as HTMLInputElement | undefined;

    const searchInputValue = searchInput?.value.trim();
    if (!searchInputValue) {
      toast.error('Please enter text to search for images.');
      return;
    }

    onSubmit(searchInputValue);
  };

  return (
    <header className={css.searchBox}>
      <form>
        <input
          className={css.inputArea}
          type="text"
          name="searchInput"
          placeholder="Search images and photos"
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

