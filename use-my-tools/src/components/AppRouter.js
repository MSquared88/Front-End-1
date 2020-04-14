import React from 'react'

//router
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom'

//components
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import Marketplace from './Marketplace';
import PrivateRoute from './PrivateRoute';
import MyTools from './MyTools';
import Footer from './Footer';

//styles
import * as styled from './styled-components/navStyles'

export default function AppRouter() {
    return (
        <Router>
            <styled.TopBar className="top-bar">
                <styled.Title>Use My Tools</styled.Title>
                <styled.ButtonDiv>
                    {!localStorage.getItem('token') 
                    ?
                    <>
                        <styled.Button><NavLink to="/login">Login</NavLink></styled.Button>
                        <styled.Button><NavLink to="/register">Register</NavLink></styled.Button>
                    </>
                    :
                    <>
                        <styled.Button><NavLink to={`/marketplace/${localStorage.getItem('username')}`}>Marketplace</NavLink></styled.Button>
                        <styled.Button><NavLink to={`/my-tools/${localStorage.getItem('username')}`}>My Tools</NavLink></styled.Button>
                        <span>
                            <styled.Button
                            onClick ={() => {
                                localStorage.removeItem("token");
                                localStorage.removeItem('username');
                            }}
                            ><NavLink to="/login">Logout</NavLink></styled.Button>}
                        </span>
                    </>
                    }
            }
                </styled.ButtonDiv>
            </styled.TopBar>
            <Switch>
                {/* Routes to Nav items below */}
                <Route exact path = "/" render={() => localStorage.getItem('token') ? <Redirect to={`/dashboard/${localStorage.getItem('username')}`}/> : <Redirect to={`/login`} />} />
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/dashboard/:id' component={Dashboard}/>
                <Route exact path='/marketplace/:id' component={Marketplace}/>
                <Route path="/my-Tools/:id" component={MyTools} />
                {/* <Footer /> */}
            </Switch>
        </Router>
    )
}
