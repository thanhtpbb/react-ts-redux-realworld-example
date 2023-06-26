import { useAppDispatch } from '@/hooks/redux'
import { articleActions } from '@/redux/reducers/article/article.action'
import { trimStringToArray } from '@/utils/helper'
import React, { FormEvent, useRef } from 'react'

const EditorForm = () => {
  const dispatch = useAppDispatch()

  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLTextAreaElement>(null)
  const tagsRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const title = titleRef.current?.value || ''
    const description = descriptionRef.current?.value || ''
    const body = bodyRef.current?.value || ''
    const tags = tagsRef.current?.value || ''

    const tagList = trimStringToArray(tags)

    dispatch(
      articleActions.createArticle({
        article: {
          body,
          description,
          title,
          tagList,
        },
      })
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input ref={titleRef} type="text" className="form-control form-control-lg" placeholder="Article Title" />
        </fieldset>
        <fieldset className="form-group">
          <input ref={descriptionRef} type="text" className="form-control" placeholder="What's this article about?" />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            ref={bodyRef}
            className="form-control"
            rows={8}
            placeholder="Write your article (in markdown)"
          ></textarea>
        </fieldset>
        <fieldset className="form-group">
          <input ref={tagsRef} type="text" className="form-control" placeholder="Enter tags" />
          <div className="tag-list"></div>
        </fieldset>
        <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
          Publish Article
        </button>
      </fieldset>
    </form>
  )
}

export default EditorForm
