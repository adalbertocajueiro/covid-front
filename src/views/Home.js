import React from 'react'

function Home(){
	return(
		<div className='animated fadeIn'>
  			<div align='justify'>
  				<p> 
  				The fast spread of COVID-19 and its permanence in any country requires many actions 
  				to minimize its growing curve in order to avoid collapsing the health system. 
  				An effective way to measure the amount of infected people is testing. However, this
  				resource may take days to become available and to provide the result. A interesting
  				alternative is to use auxiliary technologies (desirably cheap and fast) to help 
  				identification of infections. 
  				</p>
  				<p>
  				The use of Artificial Intelligence in image analysis is not novel and is suitable 
  				to be used in this case. We adapted an existing solution to determine, via chest X-Ray, 
  				the existence of COVID-19. A similar idea has been used in 
  				<a href='https://towardsdatascience.com/detecting-covid-19-induced-pneumonia-from-chest-x-rays-with-transfer-learning-an-implementation-311484e6afc1'>China</a> and 
  				the <a href='https://www.pyimagesearch.com/2020/03/16/detecting-covid-19-in-x-ray-images-with-keras-tensorflow-and-deep-learning/'>basic infrastructure</a> to achieve this is already implemented. 
  				This inspired <a href='https://colab.research.google.com/drive/164fuZk7Oe8AUFxoDQL7fEmH2Mmw-HH9z'>our solution</a> (whose underlying theory is 
  				available in <a href='https://youtu.be/7LrZyy66U4I'>part 1</a> and <a href='https://youtu.be/FQ1Jikfnixo'>part 2</a>)
  				to improve some features and make it available as a service. 
  				</p>  
  				<p>
  				We stress out that our detection tool <b>cannot</b> replace the usual detection test. 
  				It just contributes to the medical screening by providing a fast way to identify cases with 
  				high probability of being infection (due to the accuracy of the tool). 
  				</p>
  				<p>
  				The tools contains a Neural Network trained to find patterns in X-Ray images matching 
  				with COVID-19 effects. Some informations are relevant to be mentioned:
  				<ul>
  					<li>
  						Althoug the sensibility of X-Ray to reveal COVID-19 infection takes some days 
  						(an average of 10 days after infection), it is available in several regions. 
  						That is the reason we have choosen to use X-Ray images in our solution. 
  						We are aware that Computed Tomographies are more precise (as well as able to 
  						detect COVID-19 in early phases), but they are not so available as X-Ray.
  					</li>
  					<li>
  						The key point (and challenge) to improve any solution based on image analysis is the amount of 
  						training data. The more data are used to train the system, the higher is its 
  						accuracy. We provided a training phase where professionals can upload imagens to be 
  						used for this purpose.
  					</li>
  					<li>
  						The tool takes less than 1 second to provide an answer. We believe that this is 
  						a resource that can help many countries in the world (mainly the poor ones) in 
  						medical screening during the COVID-19 pandemy. 
  					</li>
  					<li>
  						The large use of the tool requires many players to get involved. However, we believe
  						that a single action of health autorities will be sufficient (the tool can be recommended 
  						to all professionals and hospitals).
  					</li>
  					<li>
  						The tool does not collect information about infected people, but only the numbers of 
  						detected infections for data analysis purposes only.
  					</li>
  				</ul>

  				</p>
  			</div>
  		</div>
	);
}

export default Home;