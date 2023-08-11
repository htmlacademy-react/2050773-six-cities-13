import { useRef } from 'react';
import { SortType } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index/index.ts';
import cn from 'classnames';
import { changeSortType } from '../../store/action.ts';


function Sort(): JSX.Element {
  const sortingListRef = useRef < HTMLUListElement | null > (null);
  const activeSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  const handleSortClick = (type: SortType) => {
    dispatch(changeSortType({type}));
  };

  return(
    <form className="places__sorting" action="#" method="get" onClick={() => sortingListRef.current?.classList.toggle('places__options--opened')}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4" >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={sortingListRef}>
        {Object.values(SortType).map((type) => (
          <li key={type} onClick={() => handleSortClick(type)} className={cn('places__option', {'places__option--active': type === activeSortType})} tabIndex={0}>
            {type}
          </li>))}
      </ul>
    </form>
  );
}
export default Sort;
