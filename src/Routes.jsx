import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Nav, Footer } from './components'

import NotFound from './pages/NotFound'
import Accueil from './pages/Accueil'
import Simpliquer from './pages/Simpliquer'
import Activites from './pages/Activites'
import References from './pages/References'

const Routes = () => (
  <>
    <Nav />
    <Switch>
      <Route path='/notFound' component={NotFound} />
      <Route path='/accueil' component={Accueil} />
      <Route path='/activites' component={Activites} />
      <Route path='/simpliquer' component={Simpliquer} />
      {/* <Route path='/bibliotheque' component={Bibliotheque} /> */}
      <Route path='/references' component={References} />
      <Redirect exact from='/' to='/accueil' />
      <Redirect to='/notFound' />
    </Switch>
    <Footer />
  </>
)

export default Routes
