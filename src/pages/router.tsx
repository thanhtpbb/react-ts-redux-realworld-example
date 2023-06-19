import BaseLayout from '@/layouts/BaseLayout'

import { ROUTER } from '@/configs/router'
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Article from './Article'
import Editor from './Editor'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import Settings from './Settings'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTER.HOME} element={<BaseLayout />}>
      <Route path={ROUTER.HOME} element={<Home />} />
      <Route path={ROUTER.LOGIN} element={<Login />} />
      <Route path={ROUTER.REGISTER} element={<Register />} />
      <Route path={ROUTER.SETTINGS} element={<Settings />} />
      <Route path={ROUTER.EDITOR} element={<Editor />} />
      <Route path={ROUTER.EDITOR_EDIT} element={<Editor />} />
      <Route path={ROUTER.ARTICLE} element={<Article />} />
      <Route path={ROUTER.PROFILE} element={<Profile />} />
      <Route path={ROUTER.PROFILE_FAVORITES} element={<Profile />} />
      <Route path="*" element={<Navigate to={ROUTER.HOME} />} />
    </Route>
  )
)

export default router
