import React from "react";
import { useParams } from "react-router-dom";
import "./singlpage.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglPage = () => {
  const [user, setUser] = useState([]);
  const [a, setA] = useState(1);
  const decreaseCount = () => {
    let b = a + 1;
    setA(b);
  };
  const increaseCount = () => {
    if (a > 1) {
      let b = a - 1;
      setA(b);
    }
  };
  let { id } = useParams();
  let idd = +id;
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=20").then((response) => {
      setUser(response.data);
    });
  }, []);
 

  return (
    <>
      <div>
        {user.map((item, index) => {
          if (item.id === idd) {
            return (
              <div className="container boxx">
                <div className="img_boxx">
                  <img className="imgg" src={item.image} alt="" />
                </div>
                <div className="content_box">
                  <h1 className="titele">{item.title}</h1>
                  <p className="text">{item.description}</p>
                  <h3 className="text3">{item.category}</h3>
                  <div className="btn_box1">
                    <button onClick={increaseCount} className="btn_minus">
                      -
                    </button>
                    <p>{a}</p>
                    <button onClick={decreaseCount} className="btn_minus">
                      +
                    </button>
                  </div>
                  <p className="prise">Prise : {item.price}</p>

                  <div className="btn_box2">
                    <button className="btn1"> Add to Cart</button>
                    <button className="btn2">Buy in 1 click</button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default SinglPage;
