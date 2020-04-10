import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import axios from "axios";
import Principal from './Principal'
import {URL_MODEL_INFO} from './Utils'
import context from './Context'


function App() {
	const { Provider } = context;
	const [reloadState,setReloadState] = React.useState(true);

	const [state, setState] = React.useState({
	    loss:0.0,
	    accuracy:0.0,
	    tests:0
	 });

  	useEffect(() => {
    	const fetchData = async () => {
      		if(reloadState){
      			const resultModelInfo = await axios.post(URL_MODEL_INFO);
      			setState({ ...state,  loss:parseFloat(resultModelInfo.data.loss) ,
                              		  accuracy:parseFloat(resultModelInfo.data.accuracy),
                          	  		  tests:resultModelInfo.data.tests});
      			//console.log('Model Info',resultModelInfo)
    			setReloadState(false)
    		}
    	};

    	fetchData();
    	
    },[reloadState]);

  	return (
  		<Provider
	      value={{
	        state
	      }}
	    >
	      <BrowserRouter>
	        <Principal />
	      </BrowserRouter>
	    </Provider>
  	);
}

export default App;
