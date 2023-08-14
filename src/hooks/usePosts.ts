import {useAppDispatch, useAppSelector} from './index';
import {useCallback, useEffect} from 'react';
import {fetchPosts} from '../slices/posts/posts';

export default function usePosts({enabled = true}: {enabled: boolean}) {
  const posts = useAppSelector(state => state.posts.posts);
  const dispatch = useAppDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  return {
    ...posts,
    refetch: fetchData,
  };
}
