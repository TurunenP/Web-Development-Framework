import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';


/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {

 

 
  

  // onclick

  
  constructor(props)
  {
  


    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props)
    this.state = {isToggleOn: true};
   

    this.handleClickone = this.handleClickone.bind(this);
    this.handleClicktwo = this.handleClicktwo.bind(this);
    this.handleClickthree = this.handleClickthree.bind(this);
    this.handleClickfour = this.handleClickfour.bind(this);

    
    

  


    

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: ' ltr ' },
        { id: 2, value: 'Carrot', qty: 6, unit: ' pcs ' },
        { id: 3, value: 'Cabbage', qty: 3, unit: ' x ' },
        { id: 4, value: 'Eggs', qty: 16, unit: ' x ' }
        
      ]
    };

  }

  handleClickone(){
    
    let items = [...this.state.items];
    
    let item = {...items[0]};
    // random number
    const random_number = Math.floor(Math.random() * 20);
    item.qty = item.qty +random_number;
    

    items[0] = item;
    this.setState({items});
 
  }
  handleClicktwo(){
    
    let items = [...this.state.items];
    
    let item = {...items[1]};
    // random number
    const random_number = Math.floor(Math.random() * 20);
    item.qty = item.qty +random_number;
    

    items[1] = item;
    this.setState({items});
 
  }
  handleClickthree(){
    
    let items = [...this.state.items];
    
    let item = {...items[2]};
    // random number
    const random_number = Math.floor(Math.random() * 20);
    item.qty = item.qty +random_number;
    

    items[2] = item;
    this.setState({items});
 
  }
  handleClickfour(){
    
    let items = [...this.state.items];
    
    let item = {...items[3]};
    // random number
    const random_number = Math.floor(Math.random() * 20);
    item.qty = item.qty +random_number;
    

    items[3] = item;
    this.setState({items});
 
  }
  

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />


      <button onClick={this.handleClickone}>
        Add Milk
        </button>
        <button onClick={this.handleClicktwo}>
        Add Carrots
        </button>
        <button onClick={this.handleClickthree}>
        Add Cabbage
        </button>
        <button onClick={this.handleClickfour}>
        Add Eggs
        </button>

    </div>
  }
}

export default App;