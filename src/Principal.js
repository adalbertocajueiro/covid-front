import React from 'react'
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {Route,Switch,Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Home from './views/Home'
import TrainingInfo from './views/TrainingInfo'
import Analyse from './views/Analyse'
import About from './views/About'

function Principal() {
  return (
  		<div id='principal' className='animated fadeIn'>
			<div className='row h-100'>
				<div className='col-2 flex-column'>
					<div className='pt-5'/>
					<Link to='/home' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Home</Button></Link>
					<Link to='/info' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Training Info</Button></Link>
					<Link to='/analyse' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Analyse</Button></Link>
					<Link to='/about' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>About</Button></Link>
				</div>
				<div className='col d-flex'>
				    <div className='pt-5 mr-4 px-2 w-100'>
					    <Switch>
				          	<Route path='/' component={Home} exact />
				          	<Route path='/home' component={Home}/>
				          	<Route path='/info' component={TrainingInfo}/>
				          	<Route path='/analyse' component={Analyse}/>
				          	<Route path='/about' component={About}/>
				        </Switch>
			        </div>
				</div>
			</div>
  		</div>
  );
}

export default Principal;