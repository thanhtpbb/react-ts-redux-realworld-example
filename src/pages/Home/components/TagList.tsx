import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { tagActions } from '@/redux/reducers/tag/tag.action'
import { useEffect } from 'react'

const TagList = () => {
  const dispatch = useAppDispatch()
  const { isFetching: isFetchingTags, tags } = useAppSelector(state => state.tag)

  useEffect(() => {
    dispatch(tagActions.getAllTags())
  }, [])

  return isFetchingTags ? (
    <p>Loading tags...</p>
  ) : (
    <div className="tag-list">
      {tags.map((tag, idx) => (
        <a href="" key={`tag-list-${idx}`} className="tag-pill tag-default">
          {tag}
        </a>
      ))}
    </div>
  )
}

export default TagList
