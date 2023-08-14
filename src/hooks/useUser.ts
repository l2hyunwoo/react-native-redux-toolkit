import {useAppSelector} from './index';

export default function useUser() {
  return useAppSelector(state => state.auth.user);
}
