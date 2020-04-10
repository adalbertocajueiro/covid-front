import React,{useEffect} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
import axios from 'axios'
import {URL_FILE_ANALYSE} from '../Utils'

function Analyse(){
	const [answer,setAnswer] = React.useState(undefined)
	
	function onChange(){
	  // Assuming only image
	  var input = document.getElementById('file')
	  //document.getElementById('alert').style.backgroundColor = 'LightPink'
	  setAnswer(undefined)
	  if( input.files && input.files[0]){
		  var reader = new FileReader();
		  reader.onload = function(){
		      var dataURL = reader.result;
		      var output = document.getElementById('output-img');
		      output.src = dataURL;
		     document.getElementById('custom-label').innerHTML = input.files[0].name

		    };
		    reader.readAsDataURL(input.files[0]);

		}
	}
	function onChangeFileSet(){
	  alert('Not implemented yet!')
	}

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
		<div className='animated fadeIn w-100'>
  			<div className='row'>
	  			<div className='col'> 
		  			<div>
		  				<span>Choose the file(s) do be analysed and press 'Analyse'.</span>
		  			</div>
		  			
		  			<div className='py-2'>
		  				<div class="custom-file">
					  		<input type="file" class="custom-file-input" id="file" lang="es" onChange = {() => onChange()} />
					  		<label class="custom-file-label" id='custom-label' for="customFileLang">Select an image file</label>
						</div>
		  				
			  				
		  				<Button size='sm mt-2' variant='secondary' onClick={() => sendFile()} >Analyse</Button>
					</div>
					<div>
						<Alert id='alert' className='pl-0' variant={(answer==undefined)?'':answer?'danger':'success'}>
						   <span className='font-weight-bold'>Result: {(answer==undefined)?'':answer?' COVID-19 has been detected!':' COVID-19 has not been detected'}</span> 
						</Alert>
					</div>
					<div>
					<img id='output-img'/>
					</div>
				</div>
				<div className='col'>
					<div>
		  				<span>Choose the set of file(s) (zip format) do be analysed and press 'Analyse'.</span>
		  			</div>

		  			<div className='py-2'>
		  				<div class="custom-file">
					  		<input type="file" class="custom-file-input" id="files" lang="es" onChange = {() => onChangeFileSet()} />
					  		<label class="custom-file-label" id='custom-labels' for="customFileLang">Selected a zip file (containing image files)</label>
						</div>
		  				
			  				
		  				<Button size='sm mt-2' variant='secondary' onClick={() => sendFile()} >Analyse</Button>
					</div>
				</div>
			</div>
  		</div>
	);
}

export default Analyse;