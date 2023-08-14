import {useAppDispatch} from './index';
import {useMemo} from 'react';
import {bindActionCreators} from 'redux';
import {add, remove, toggle} from '../slices/todos/todos';

export default function useTodoActions() {
  const dispatch = useAppDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        {
          add,
          remove,
          toggle,
        },
        dispatch,
      ),
    [dispatch],
  );
}
