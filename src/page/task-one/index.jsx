import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { NavLink } from "react-router-dom";


const Index = () => {
  const [user, setUser] = useState([]);
  const [limt ,setLimt] =useState()
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=${limt}`).then((response) => {
      setUser(response.data);
    });
  }, [limt]);

  return (
    <>
      <div className="container">
        <input
          type="number"
          className="inputs"
          placeholder="20"
          onChange={(e) => {
            setLimt(+e.target.value);
          }}
        />
        <div className="box">
          {user.map((item, index) => (
            <div className="list" key={index}>
              <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
                  <NavLink to={`/singlpage/${item.id}`}>
                    <CardMedia
                      className="img_box"
                      component="img"
                      height="340"
                      image={item.image}
                      alt="green iguana"
                    />
                  </NavLink>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <NavLink to={`/singlpage/${item.id}`}>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </NavLink>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
