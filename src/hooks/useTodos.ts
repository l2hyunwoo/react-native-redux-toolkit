import {useAppSelector} from './index';

export default function useTodos() {
  return useAppSelector(state => state.todos);
}
