import React, { Component } from 'react';
import './header.css';

var userName = 'Анастасия';
class Header extends Component {
  render() {
	  var N = window.bigAmount;
    return (
    <div className="wrapper">
		<header className="header">
			<div className="header_content first">
				<div  className="header1">
					<a href="tel:7-923-149-15-22">+7-923-149-15-22</a><p> Бесплатный звонок по России </p>
				</div>
				<div  className="header1">
					<div className="fa fa-star-o"></div><a href="#"></a><p>Звёздный блог    </p>
					<a href="http://youtube.com"><div className="fa fa-youtube"></div></a><p> Смотри нас на ютуб    </p>
					<a href="http://youtube.com/live"><div className="fa fa-youtube-play"></div></a><p> Смотри наш прямой эфир</p>
				</div>
			</div>
		</header>
		<header className="header_second">
			<div className="header_content second">
				<div className="header1">
					<div className="header2"/>
					<div className="header1 left">
					<form action="/search/" role="search">
							<div>
								<input type="text" name="q" placeholder="Поиск по сайту" autoComplete="off"/>
								<span>
									<button type="submit">
									<i className="fa fa-search"/>
									</button>
								</span>
							</div>
					</form>
				</div>
				</div>
				<div  className="header1">
					<a href="/personal"><div className="fa fa-user"></div></a>
					<p>{userName} </p>
					<a href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a><pre>{this.props.data}</pre>
					<div className="bag">
						<p>	В корзине <br></br>{this.props.data} товаров</p>	
					</div>
				</div>
			</div>
		</header>
		
    </div>
    );
  }
}

export default Header;
