import React, {Component} from 'react';
// import ThemeSwitcher from '../ThemeSwitcher';
import Logo from '../../img/Logo.svg';
import Ball from '../../img/ball.svg';
import Vector from '../../img/Vector.svg';
import Avatar from '../../img/avatar.png';
import Bag from '../../img/bag.png';
import Up from '../../img/up.svg'
import Down from '../../img/down.svg'


function App() {
  return (
    <main >
    	<header className="header__shadow">
    		<div className="content-container">
    			<div className="row header__nav d-flex align-items-center ">
	    			<div className=" col-sm-3 head__logo">
	    				<img className="header__logo" src={Logo} alt="Logo"/>
	    			</div>
	    			<div className=" col-sm-6">
		    			<ul >
		    				<li className="header__list">Расписание</li>
		    				<li className="header__list">Игровые отчёты</li>
		    				<li className="header__list">Статистика</li>
		    				<li className="header__list">Ещё
		    					<img className="header__vector" src={Vector} alt="Vector"/>
		    				</li>
		    			</ul>
		    		</div>
		    		<div className="col-sm-3 d-flex justify-content-between">
		    			<div className="header__season">
	    					<img className="header__ball" src={Ball} alt="Ball"/>
	    					<img src={Vector} alt="Vector"/>
		    				
		    			</div>
		    			<div className="header__avatar">
	    					<img src={Avatar} alt="Avatar"/>
		    				
		    			</div>
		    			<div className="header__bag">
	    					<img className="header__bag" src={Bag} alt="Bag"/>
		    				
		    			</div>
		    		</div>
	    		</div>
    		</div>
    	</header>
    	<section>
    		<div className="content-container">
    			<div className="row justify-content-between section-position">
    				<div className="col-sm-3 indentation">
  						<div className="menu-side">
	    					<div className="menu-side__plauer">
	    					</div>
  						
  						</div>
    				</div>
    				<div className="col-sm-9 content indentation">
    					<div className="content-header position-bottom">
    						
    					</div>
    					<div className="box__format position-bottom ">
    						<p className="m-0 box__formatText">Формат</p>
    						<img src={Vector} alt="Vector"/>
    					</div>
    					<table className="table w-100%">
    						<tr className="table__header">
    							<th>
    								Сезон
    							</th>
    							<th className="table-title__position">
    								<button className="arrows-button">
    									<div className="arrows-filter">
    										<img className="arrows-up"src={Up} alt="up"/>
    										<img src={Down} alt="down"/>
    									</div>
    								</button> Кол-во игр
    							</th>
    							<th className="table-title__position">
    								<button className="arrows-button">
    									<div className="arrows-filter">
    										<img className="arrows-up"src={Up} alt="up"/>
    										<img src={Down} alt="down"/>
    									</div>
    								</button>Гол
    							</th>
    							<th className="table-title__position">
    								<button className="arrows-button">
    									<div className="arrows-filter">
    										<img className="arrows-up"src={Up} alt="up"/>
    										<img src={Down} alt="down"/>
    									</div>
    								</button> Пас
    							</th>
    							<th className="table-title__position">
    								<button className="arrows-button">
    									<div className="arrows-filter">
    										<img className="arrows-up"src={Up} alt="up"/>
    										<img src={Down} alt="down"/>
    									</div>
    								</button> Гол + пас
    							</th>
    							<th className="table-title__position">
    							<button className="arrows-button">
    									<div className="arrows-filter">
    										<img className="arrows-up"src={Up} alt="up"/>
    										<img src={Down} alt="down"/>
    									</div>
    								</button> Рейтинг
    							</th>
    						</tr>
    						<tr className="not-even">
    							<td>Сезон 2021/2020</td>
    							<td>5</td>
    							<td>5</td>
    							<td>2</td>
    							<td>1</td>
    							<td>89.40</td>
    						</tr> 
    						<tr className="even">
    							<td>Сезон 2020/2019</td>
    							<td>5</td>
    							<td>5</td>
    							<td>2</td>
    							<td>1</td>
    							<td>89.40</td>
    						</tr> 
    						<tr className="not-even">
    							<td>Сезон 2019/2018</td>
    							<td>5</td>
    							<td>5</td>
    							<td>2</td>
    							<td>1</td>
    							<td>89.40</td>
    						</tr> 	
    						<tr className="even">
    							<td>Сезон 2018/2017</td>
    							<td>5</td>
    							<td>5</td>
    							<td>2</td>
    							<td>1</td>
    							<td>89.40</td>
    						</tr> 	
    						<tr className="not-even">
    							<td>Сезон 2017/2016</td>
    							<td>5</td>
    							<td>5</td>
    							<td>2</td>
    							<td>1</td>
    							<td>89.40</td>
    						</tr>  
    					</table>
    				</div>
    			</div>
    		</div>
    	</section>
    	<footer>
    		<div className="footer-container">
    			
    		</div>
    	</footer>
    </main> 
  );
}

export default App;
