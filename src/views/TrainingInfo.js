import React,{useEffect} from 'react'
import {URL_MODEL_INFO} from '../Utils'
import axios from "axios";
import context from '../Context'
import {Tabs,Tab} from 'react-bootstrap'

function TrainingInfo(){
	
	const { state } = React.useContext(context);

	return(
		<div className='animated fadeIn'>
  			<span> Infos about the model: </span>
  			<ul>
  				<li>Training tests: {state.tests}</li>
  				<li> Loss: {state.loss.toLocaleString('pt-BR',{minimumFractionDigits:'20'})} </li>
  				<li> Accuracy: {state.accuracy.toLocaleString('pt-BR',{minimumFractionDigits:'2'})}</li>
  			</ul>

  			<span>The tabs below show some examples of images of COVID and non-COVID. </span>
  			<div className='mt-3'>
  			<Tabs defaultActiveKey="tab-covid" id="tab-covid">
		  		<Tab eventKey="tab-covid" title="COVID-19">
		    		<div >
		    			We will provide some examples of COVID chest X-Ray imagens
		    		</div>
		  		</Tab>
		  		<Tab eventKey="tab-non-covid" title="Non COVID-19">
		    		<div >
		    			We will provide some examples of normal chest X-Ray imagens
		    		</div>
		  		</Tab>
		  	</Tabs>
		  	</div>

  		</div>
	);
}

export default TrainingInfo;