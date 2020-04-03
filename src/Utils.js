import axios from "axios";

export const BACK_END_URL = "http://localhost:5000";
export const ROUTE_MODEL = "model";
export const ROUTE_ANALYSE = "analyse";

export async function getModelInfo(){
	//console.log('Lote recebido',lote)
	var FormData = require("form-data");
	const URL_MODEL_INFO = `${BACK_END_URL}/${ROUTE_ANALYSE}`;
	
	const myFormData = new FormData();

	await axios.get(URL_MODEL_INFO,myFormData).then(({ data }) => console.log(data))
	  .catch(console.log);
}

export async function sendFile(file){

	var FormData = require("form-data");
	const URL_FILE_ANALYSE = `${BACK_END_URL}/${ROUTE_ANALYSE}`;

	const myFormData = new FormData();
	myFormData.append("file", file);
	
	await axios.post(URL_FILE_ANALYSE,myFormData)
		.then((response) => {
    		var dado = { status:response.status,mensagem:response.data}
    		console.log('Dado retornado',dado)
		})
		.catch( (error) => {
		  	var dado = { status:error.status,mensagem:error.data}
		  	console.log('Dado retornado (catch)',dado)
		});

}