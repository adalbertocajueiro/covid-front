import React,{useEffect} from 'react'
import {URL_MODEL_INFO} from '../Utils'
import axios from "axios";

function ModelInfo(){
	
	const [loss,setLoss] = React.useState(0.0)
	const [accuracy,setAccuracy] = React.useState(0.0)

	useEffect(() => {
	  
	const fetchData = async () => {
      const resultModelInfo = await axios.get(URL_MODEL_INFO)
      							.then(({data}) => 
      									{ console.log(data) 
      									  setLoss(parseFloat(data.loss))
      									  setAccuracy(parseFloat(data.accuracy))
      									});
      //setModelInfo(resultModelInfo)
    };
    fetchData();
    }, [loss,accuracy]);

	

	return(
		<div className='animated fadeIn'>
  			<span> Infos about the model: </span>
  			<ul>
  				<li> Loss: {loss.toLocaleString('pt-BR',{minimumFractionDigits:'20'})} </li>
  				<li> Accuracy: {accuracy.toLocaleString('pt-BR',{minimumFractionDigits:'2'})}</li>
  			</ul>
  		</div>
	);
}

export default ModelInfo;