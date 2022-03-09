import { FC } from 'react';

import { Props } from '../types/search-bar-types';
import SearchIconSvg from '../../../assets/img/search.svg';
import '../styles/search-bar-styles.scss';

export const SearchBar: FC<Props> = (props) => {
  const { onChangeHandler } = props;

  return (
    <div className="search__bar">
      <input 
        className="search__bar-input"
        type="text"
        onChange={onChangeHandler}
      />

      <img
        className="search__bar-icon"
        src={SearchIconSvg} 
        alt="search icon" 
      />
    </div>
  );
};
