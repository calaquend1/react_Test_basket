import React, { Component } from 'react';
import './header_second.css';

class HeaderS extends Component {
    constructor(props) {
        super(props);
        this.state = {activeClasses: [true, false, false, false, false, false]};
        this.addActiveClass= this.addActiveClass.bind(this);
      }
      addActiveClass(index) {
        for (var i=0;i<6;i++) {
            this.state.activeClasses[i] = false;
        }
       this.state.activeClasses[index] = true;
    }

  render() {
	const activeClasses = this.state.activeClasses.slice();
    return (
        <div className="wrapper">
            <header className="header_third">
                <div className="header_content third">
                    <div className="topnav">
                        <a className={activeClasses[0]? "active" : "inactive"} onClick={() => this.addActiveClass(0)} href="/">Одежда и аксессуары</a>
                        <a className={activeClasses[1]? "active" : "inactive"} onClick={() => this.addActiveClass(1)} href="#boots">Обувь</a> 
                        <a className={activeClasses[2]? "active" : "inactive"} onClick={() => this.addActiveClass(2)} href="#jewelry">Украшения</a>
                        <a className={activeClasses[3]? "active" : "inactive"} onClick={() => this.addActiveClass(3)} href="#beauty">Красота и здоровье</a>
                        <a className={activeClasses[4]? "active" : "inactive"} onClick={() => this.addActiveClass(4)} href="#home">Товары для дома</a>
                        <a className={activeClasses[5]? "active" : "inactive"} onClick={() => this.addActiveClass(5)} href="#kitchen">Товары для кухни</a>
                    </div>
                </div>
            </header>
            <header className="header_fourth">
                <div className="header_content fourth">
                    <div className={activeClasses[0]? "topnav" : "hidden"}>
                        <a  href="#women">Женская одежда</a>
                        <a  href="#men">Мужская одежда</a> 
                        <a  href="#accessories">Аксессуары</a>
                    </div>
                    <div className={activeClasses[1]? "topnav" : "hidden"}>
                        <a  href="#women_boots">Женская обувь</a>
                        <a  href="#men_boots">Мужская обувь</a> 
                    </div>
                    <div className={activeClasses[2]? "topnav" : "hidden"}>
                        <a  href="#women_jew">Женские украшения</a>
                        <a  href="#men_jew">мужская украшения</a> 
                    </div>
                    <div className={activeClasses[3]? "topnav" : "hidden"}>
                        <a  href="#cosmetics">Косметика</a>
                        <a  href="#health">Лекарства</a> 
                    </div>
                    <div className={activeClasses[4]? "topnav" : "hidden"}>
                        <a  href="#homes">Товары для дома</a>
                    </div>
                    <div className={activeClasses[5]? "topnav" : "hidden"}>
                        <a  href="#spoons">Приборы</a>
                        <a  href="#plates">Посуда</a> 
                        <a  href="#ikea">Мебель</a>
                    </div>
                </div>
            </header>
        </div>
         );
        }
      }
      
      export default HeaderS;