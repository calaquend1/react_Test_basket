
import React from 'react';
import './basket.css';
import './images/1.png';
import PropTypes from 'prop-types';

  console.clear();
let productList = [
  { id: 0, description:<img src={require('./images/1.png')}></img>, name: "android", price: 231, info: "product of google" },
  { id: 1, description:<img src={require('./images/2.png')}></img>, name: "iphone", price: 784, info: "product of apple" },
  { id: 2, description:<img src={require('./images/3.png')}></img>, name: "windows", price: 156, info: "product of microsoft" },
  { id: 3, description:<img src={require('./images/4.png')}></img>, name: "mac", price: 999, info: "product of apple" }
];
var bigAmount = 0;
/* Product */
class Product extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      qty: this.props.data[this.props.id]
    };
    
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.delete = this.delete.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  add() {
    this.setState({
      qty: this.state.qty + 1,
    });
    bigAmount = bigAmount + 1;
    this.props.handleTotal(this.props.price);
    this.getContent(this.state.qty+1,this.props.id);

    console.log(this.props.data);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1,
    });
    bigAmount = bigAmount - 1;
    this.props.handleTotal(-this.props.price);
    this.getContent(this.state.qty-1,this.props.id);
  }
  
  getContent(event,event1) {
    this.props.callback(event,event1);
  }

  delete() {
    bigAmount -= this.state.qty;
    this.props.handleTotal(-this.props.price*this.state.qty);
    this.props.handleDelete(this.props.price,this.props.id);
    this.setState({
      qty: 0,
    }, () => {
      this.getContent(0,this.props.id);
    });
    
  }

  showInfo() {
    this.props.handleShow(this.props.info);
  }

  render() {
    return (
    <div className="basket">  
        <div className="propertyImg">
            {this.props.description}
        </div> 
        <div className="property">
            {this.props.name}
            <br></br>
            {this.props.info}
            <br></br>
            ${this.props.price}
        </div>                         
        <div className="property">
            <button onClick={this.subtract} disabled={this.state.qty < 1}>
              -
            </button>
            {this.state.qty}
            <button  onClick={this.add}>
              +
            </button>
        </div>
        <div className="property">${this.props.price*this.state.qty}</div>
        <div className="property">
        <button onClick={this.delete}>
              X
            </button>
        </div>
    </div>
    );
  }
}
Product.protoTypes = {
  callback : PropTypes.func,
  }
/* Total */
class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: "",
        promo: 0
      };
this.handleChange = this.handleChange.bind(this);
this.promo = this.promo.bind(this);
  }
  
  handleChange(e) {
    this.setState({ input: e.target.value });
    console.log(this.state.input);
    if (e.target.value !== '123456') 
    {this.setState({ promo :  0 });}
  }
  promo() {
    if (this.state.input == '123456'){
        this.setState({ promo :  1800 });
    } else {
        this.setState({ promo :  0 });
    }
  }
  render() {
    let total = this.props.total.toFixed(2);
    let tax = (this.props.total * 0.15).toFixed(2);
    let totalIncTax = (+total + +tax).toFixed(2);
    let withPromo = total - this.state.promo;
    let mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px"
    };
    
    
    
    return (
    <div className="basket_big2">
    
        <div className="basket grid1">
            <p className="grid2">Есть промокод?</p>
            <input className="grid3" type="text" onInput={e => this.handleChange(e) }/>
            <input className="grid4" type="button" value="Применить" onClick={this.promo} />
        </div>
        <div className="basket2">
            <div>
                    <h3 style={{ fontWeight: 400 }}>
                    <span >Сумма заказа:</span>
                    <span > ${total}</span>
                    </h3>
                    <h3 className={
        (this.state.promo ? "" : "noActive")}
                    style={{ color:"orange", fontWeight: 400 }}>
                    <span >Промокод</span>
                    <span > -${this.state.promo}</span>
                    </h3>
                    <h3 style={mystyle}>
                    <span>Всего:</span>
                    <span> ${withPromo}</span>
                    </h3>
                    <input className="button button4" type="button" value="Оформить заказ" onClick="" />
            </div>
      </div>
      
    </div>
    );
  }
}

/* ProductForm */
class ProductForm extends React.Component {
  submit(e) {
    e.preventDefault();
    var product = {
      name: this.refs.name.value,
      price: Number(this.refs.price.value),
      info: this.refs.info.value
    };
    console.log(this.refs.name.value, this.refs.price.value);
    this.props.handleProduct(product);
    this.refs.name.value = "";
    this.refs.price.value = 0;
    this.refs.info.value = "";
  }

  render() {
    return (
      <form className="no" onSubmit={this.submit.bind(this)}>
        <h3>add new product</h3>
        <div >
          <label >name:</label>
          <div >
            <input
              type="text"
              ref="name"
              placeholder="e.g.) android"
              required
            />
          </div>
        </div>

        <div >
          <label >price:</label>
          <div >
            <input
              type="number"              
              ref="price"
              placeholder="e.g.) 100"
              required
            />
          </div>
        </div>

        <div >
          <label >info:</label>
          <div>
            <input
              type="text"              
              ref="info"
              placeholder="e.g.) product of google"
            />
          </div>
        </div>

        <div>
          <div>
            <button>create product</button>
          </div>
        </div>

        <hr />
      </form>
    );
  }
}

/* ProductList */
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: bigAmount,
      total: 0,
      productList: "",
      quality: [0,0,0,0],
    };

    this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
    this.delete = this.delete.bind(this);
    this.Q = this.Q.bind(this);
  }
  
  

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList});
    }, 1000);
  
  }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product)
    });
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    this.props.callback(bigAmount);
    console.log(this.state.total);
  }

  showProduct(info) {
    console.log(info);
    alert(info);
  }
  delete(price){

      var productListCopy = this.state.productList;
      var productListCopyNew = [];
      var k = 0;
      if (productListCopy.length === 4){ var n = 4;}
      if (productListCopy.length === 3){ var n = 3;}
      if (productListCopy.length === 2){ var n = 2;}
      if (productListCopy.length === 1){ var n = 1;}

      for (var i=0;i<n;i++){
          if (price == this.state.productList[i].price)
            k = i;
      };
    

      for (var j=0;j<n;j++){
        if (j !== k)
          productListCopyNew.push(this.state.productList[j]);
      };
  
    this.setState({
        productList: productListCopyNew
    });
  
  }

  Q(q,w) {
    
    let array = [...this.state.quality];
    array[w] = q;
     this.setState({
      quality : array, 
    }, () => {
      this.props.callback(bigAmount,q,w);
    });
    this.props.callback(bigAmount,this.state.quality);
  }


  render() {
    
    
    if (!this.state.productList) return <p>loading...!!!!</p>;
    var array = [...this.state.quality];
    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Product
          id={product.id}
          description={product.description}
          name={product.name}
          price={product.price}
          info={product.info}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
          handleDelete={component.delete}
          callback={component.Q}
          data={[...array]}
        />
      );
    });

    return (
      <div className="basket_big">
        <div className="basket">
                <div className="property">Товар</div>            
                <div className="property">Описание</div>
                <div className="property">Количество</div>    
                <div className="property">Цена</div>    
                <div className="property1">Удалить</div>                    
        </div>
        
        <ProductForm  handleProduct={this.createProduct} />
        {products}
        <div>
            <hr className="hr-text"></hr>
        </div>
        <Total total={this.state.total} />
        
      </div>
    );
  }
}
ProductList.protoTypes = {
    callback : PropTypes.func,
}

    

