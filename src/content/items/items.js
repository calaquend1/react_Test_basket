import React, { Component } from 'react';
import './items.css';
import ProductList from '../basket/basket.js';
import PropTypes from 'prop-types';
class Items extends Component {
    constructor(){
        super();
        this.state= {
          amount : 0
        }
      }
      formChild1(params) {
        this.setState({
          amount : params
        })
        this.props.callback(params);
      }
    
  render() {
	  
    return (
        <div>
            <div>
                <hr className="hr-text" data-content="Ваша корзина"></hr>
            </div>
            <ProductList callback={this.formChild1.bind(this)}></ProductList>
            <div>
                <hr className="hr-text" data-content="Добавьте к вашему заказу"></hr>
            </div>
            <div className="add_to_buy">
                <div>
                    <img src={require('./images/1.png')}></img>
                    <p>Платье - 2000 руб.</p>
                </div>
                <div>
                    <img src={require('./images/2.png')}></img>
                    <p>Сумка - 1000 руб.</p>
                </div>
                <div>
                    <img src={require('./images/3.png')}></img>
                    <p>Шляпа 1500 руб.</p>
                </div>
                <div>
                    <img src={require('./images/4.png')}></img>
                    <p>Носки 1289 руб.</p>
                </div>
            </div>
        </div>
    );
  }
}
Items.protoTypes = {
    callback : PropTypes.func,
    }
export default Items;