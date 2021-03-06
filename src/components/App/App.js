import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import './App.scss'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Pokemon from '../Pokemon/Pokemon.js'
import Pokedex from '../Pokedex/Pokedex.js'
import PokeDetail from '../Pokedex/PokeDetail.js'
import MyPokemons from '../MyPokemons/MyPokemons.js'
import AllPokemons from '../AllPokemons/AllPokemons.js'
import Detail from '../AllPokemons/Detail.js'
import DetailEdit from '../AllPokemons/DetailEdit.js'
// import AuthHome from '../AuthHome/AuthHome.js'
import Home from '../Home/Home.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <div className="fragment">
        <Fragment>
          <Header user={user} />
          <div className="alerts-container">
            {alerts.map((alert, index) => (
              <AutoDismissAlert
                key={index}
                heading={alert.heading}
                variant={alert.variant}
                message={alert.message}
              />
            ))}
          </div>
          <main className="container maincontainer">
            <div className="mainpage">
              <Route path='/sign-up' render={() => (
                <SignUp alert={this.alert} setUser={this.setUser} />
              )} />
              <Route path='/sign-in' render={() => (
                <SignIn alert={this.alert} setUser={this.setUser} />
              )} />
              <Route exact path='/' render={() => (
                <Home alert={this.alert} user={user} id='QWGGtKgalDo'/>
              )} />
              <AuthenticatedRoute user={user} path='/sign-out' render={() => (
                <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
              )} />
              <AuthenticatedRoute user={user} path='/change-password' render={() => (
                <ChangePassword alert={this.alert} user={user} />
              )} />
              <AuthenticatedRoute user={user} exact path='/pokemons' render={() => (
                <Pokemon />
              )} />
              <AuthenticatedRoute user={user} exact path='/pokedex' render={() => (
                <Pokedex />
              )} />
              <AuthenticatedRoute user={user} exact path='/pokedex/:name' render={() => (
                <PokeDetail alert={this.alert} />
              )} />
              <AuthenticatedRoute user={user} exact path='/myPokemons' render={() => (
                <MyPokemons alert={this.alert} user={user} />
              )} />
              <AuthenticatedRoute user={user} exact path='/all_DIY_Pokemons' render={() => (
                <AllPokemons user={user} />
              )} />
              <AuthenticatedRoute user={user} exact path='/all_DIY_Pokemons/:id' render={() => (
                <Detail alert={this.alert} user={user} />
              )} />
              <AuthenticatedRoute user={user} exact path='/all_DIY_Pokemons/:id/edit' render={() => (
                <DetailEdit alert={this.alert} user={user} />
              )} />
            </div>
          </main>
        </Fragment>
      </div>
    )
  }
}

export default App
