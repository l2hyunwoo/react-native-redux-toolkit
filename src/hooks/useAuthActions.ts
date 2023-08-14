import {useAppDispatch} from './index';
import {authorize, logout} from '../slices/auth/auth';
import {bindActionCreators} from 'redux';
import {useMemo} from 'react';

export default function useAuthActions() {
  const dispatch = useAppDispatch();
  return useMemo(
    () => bindActionCreators({authorize, logout}, dispatch),
    [dispatch],
  );
}
