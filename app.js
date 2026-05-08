import React from "react";
import ReactDOM from "react-dom/client";



const Header=()=>{
    return(
      <div className="header">
        <div className="logo-container">
      <img className="logo" src="https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839" alt="" />
        </div>
        <div className="nav-items"> 
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </div>
        </div>
    );
};

const styleCard = {
  backgroundColor: "grey"
};
const RestaurantCard=(props)=>{
    return(
      <div className="res-card" style={styleCard}>
        <img className="res-logo"
           src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Biryani image" />
        <h3>{ props.resName}</h3>
        <h3>{ props.cusine}</h3>
        <h3>4.4 Starts</h3>
        <h3>38 minutes</h3>
        </div>
    );
};

const Body=()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard resName="Behen da dhaba" cusine="Biryani" />
          <RestaurantCard resName="Pizza world" cusine="Pizza" />
          <RestaurantCard resName="Kfc" cusine="Fast Food" />
          <RestaurantCard resName="Burger King" cusine="Burgers" />
        </div>
      </div>
    );
}

const AppLayout=()=>{
    return(
      <div className="app">
        <Header />
        <Body />
        </div>
    );
};

const root= ReactDOM.createRoot(document.getElementById("title"));
root.render(<AppLayout/>);