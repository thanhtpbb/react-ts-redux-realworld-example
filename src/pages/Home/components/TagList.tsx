import { tagActions } from '@/actions/tag'
import PageLoader from '@/components/PageLoader'
import { useEffect, useState } from 'react'

const TagList = () => {
  const [tags, setTags] = useState<string[]>([])
  const [isFetchingTags, setIsFetchingTags] = useState<boolean>(false)

  useEffect(() => {
    setIsFetchingTags(true)
    tagActions.getAllTags({
      onSuccess: setTags,
      onFinally: () => setIsFetchingTags(false),
    })
  }, [])

  if (isFetchingTags) {
    return <PageLoader />
  }

  if (tags.length === 0) {
    return <p>No tags found!</p>
  }

  return (
    <div className="tag-list">
      {tags.map((tag, idx) => (
        <div key={`tag-list-${idx}`} className="tag-pill tag-default">
          {tag}
        </div>
      ))}
    </div>
  )
}

export default TagList
