import React from 'react'
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Route,Switch,Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Home from './views/Home'
import ModelInfo from './views/ModelInfo'
import Analyse from './views/Analyse'

function Principal() {
  return (
  		<div id='principal' className='animated fadeIn'>
			<div className='row h-100'>
				<div className='col-2 flex-column'>
					<div className='pt-5'/>
					<Link to='/home' className='text-decoration-none'><Button size="xl" block variant='light'>Home</Button></Link>
					<Link to='/info' className='text-decoration-none'><Button size="xl" block variant='light'>Model Info</Button></Link>
					<Link to='/analyse' className='text-decoration-none'><Button size="xl" block variant='light'>Analyse</Button></Link>
				</div>
				<div className='col d-flex'>
				    <div className='pt-5'>
					    <Switch>
				          	<Route path='/' component={Home} exact />
				          	<Route path='/info' component={ModelInfo}/>
				          	<Route path='/analyse' component={Analyse}/>
				        </Switch>
			        </div>
				</div>
			</div>
  		</div>
  );
}

export default Principal;