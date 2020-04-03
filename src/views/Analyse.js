import React,{useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import {URL_FILE_ANALYSE} from '../Utils'

function Analyse(){
	const [answer,setAnswer] = React.useState(undefined)
	
	async function sendFile(){
		var arquivo = document.getElementById('file').files[0];

		if(arquivo){
			var FormData = require("form-data");
		
			const myFormData = new FormData();
			myFormData.append("file", arquivo);
			
			await axios.post(URL_FILE_ANALYSE,myFormData)
				.then((response) => {
		    		var dado = { status:response.status,mensagem:response.data}
		    		setAnswer(dado.mensagem.answer)
		    		console.log('Dado retornado',dado.mensagem.answer)
				})
				.catch( (error) => {
				  	var dado = { status:error.status,mensagem:error.data}
				  	console.log('Dado retornado (catch)',dado)
				});			
		}
	}

	return(
		<div className='animated fadeIn'>
  			<div className='py-2'>
  				<span>Select the file to be uploaded and press the Send button.</span>
  			</div>
  			<div className='py-3'>
  			<Form className='h-100'>
  				<Form.File  id="file" name='file'>
  					<Form.File.Input />
  				</Form.File>
  				<Button size='sm mt-2' variant='secondary' onClick={() => sendFile()}>Send and analyse</Button>
			</Form>
			<div>
				<span>Analysis result: {(answer==undefined)?'None':answer.toString()}</span>
			</div>
			</div>
  		</div>
	);
}

export default Analyse;