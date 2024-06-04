import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './ProductCard.css'                          
import { useNavigate } from "react-router-dom";

export default function ProductCard({product}) {
  
  const navigate = useNavigate();

  return (

      <>
    <Card onClick={()=>navigate(`/Product/${2}`)} sx={{ maxWidth: 245, margin: 5, cursor: "pointer"}} className="Card">
    
      <CardMedia
        sx={{ height: 340}}
        style={{objectFit: "cover"}}
        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZyhIbOyqEQJonGenRWcM-fXajK85MpXawHwycAuBCUtLJvV6QQc3CfRKeYUoGHxCCIk81HuEVoX35k1s5bWbU0tGm51nWwIwH9EFgQkE&usqp=CAE"
        title="green iguana"
      />
      <CardContent className="CardContent">
        <Typography gutterBottom variant="h5" component="div">
          Dress
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{margin:5}}>
          Dillu Fashion Women Ethnic Dress White Dress
        </Typography>
        <Typography style={{margin:5}}>
          ₹420.0&nbsp;&nbsp;&nbsp;<del>₹920.00</del>
        </Typography>

        <Typography color={"green"}>30% off</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    <Card sx={{ maxWidth: 245, margin: 5, cursor: "pointer"}} className="Card">
    
    <CardMedia
      sx={{ height: 340}}
      style={{objectFit: "cover"}}
      image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZyhIbOyqEQJonGenRWcM-fXajK85MpXawHwycAuBCUtLJvV6QQc3CfRKeYUoGHxCCIk81HuEVoX35k1s5bWbU0tGm51nWwIwH9EFgQkE&usqp=CAE"
      title="green iguana"
    />
    <CardContent className="CardContent">
      <Typography gutterBottom variant="h5" component="div">
        Dress
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{margin:5}}>
        Dillu Fashion Women Ethnic Dress White Dress
      </Typography>
      <Typography style={{margin:5}}>
        ₹420.0&nbsp;&nbsp;&nbsp;<del>₹920.00</del>
      </Typography>

      <Typography color={"green"}>30% off</Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card sx={{ maxWidth: 245, margin: 5, cursor: "pointer"}} className="Card">
    
    <CardMedia
      sx={{ height: 340}}
      style={{objectFit: "cover"}}
      image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZyhIbOyqEQJonGenRWcM-fXajK85MpXawHwycAuBCUtLJvV6QQc3CfRKeYUoGHxCCIk81HuEVoX35k1s5bWbU0tGm51nWwIwH9EFgQkE&usqp=CAE"
      title="green iguana"
    />
    <CardContent className="CardContent">
      <Typography gutterBottom variant="h5" component="div">
        Dress
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Dillu Fashion Women Ethnic Dress White Dress
      </Typography>
      <Typography>
        ₹420.0&nbsp;&nbsp;&nbsp;<del>₹920.00</del>
      </Typography>

      <Typography color={"green"}>30% off</Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card sx={{ maxWidth: 245, margin: 5, cursor: "pointer"}} className="Card">
    
    <CardMedia
      sx={{ height: 340}}
      style={{objectFit: "cover"}}
      image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZyhIbOyqEQJonGenRWcM-fXajK85MpXawHwycAuBCUtLJvV6QQc3CfRKeYUoGHxCCIk81HuEVoX35k1s5bWbU0tGm51nWwIwH9EFgQkE&usqp=CAE"
      title="green iguana"
    />
    <CardContent className="CardContent">
      <Typography gutterBottom variant="h5" component="div">
        Dress
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{margin:5}}>
        Dillu Fashion Women Ethnic Dress White Dress
      </Typography>
      <Typography style={{margin:5}}>
        ₹420.0&nbsp;&nbsp;&nbsp;<del>₹920.00</del>
      </Typography>

      <Typography color={"green"}>30% off</Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card sx={{ maxWidth: 245, margin: 5, cursor: "pointer"}} className="Card">
    
    <CardMedia
      sx={{ height: 340}}
      style={{objectFit: "cover"}}
      image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZyhIbOyqEQJonGenRWcM-fXajK85MpXawHwycAuBCUtLJvV6QQc3CfRKeYUoGHxCCIk81HuEVoX35k1s5bWbU0tGm51nWwIwH9EFgQkE&usqp=CAE"
      title="green iguana"
    />
    <CardContent className="CardContent">
      <Typography gutterBottom variant="h5" component="div">
        Dress
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{margin:5}}>
        Dillu Fashion Women Ethnic Dress White Dress
      </Typography>
      <Typography style={{margin:5}}>
        ₹420.0&nbsp;&nbsp;&nbsp;<del>₹920.00</del>
      </Typography>

      <Typography color={"green"}>30% off</Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card sx={{ maxWidth: 245, margin: 5, cursor: "pointer"}} className="Card">
    
    <CardMedia
      sx={{ height: 340}}
      style={{objectFit: "cover"}}
      image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZyhIbOyqEQJonGenRWcM-fXajK85MpXawHwycAuBCUtLJvV6QQc3CfRKeYUoGHxCCIk81HuEVoX35k1s5bWbU0tGm51nWwIwH9EFgQkE&usqp=CAE"
      title="green iguana"
    />
    <CardContent className="CardContent">
      <Typography gutterBottom variant="h5" component="div">
        Dress
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{margin:5}}>
        Dillu Fashion Women Ethnic Dress White Dress
      </Typography>
      <Typography style={{margin:5}}>
        ₹420.0&nbsp;&nbsp;&nbsp;<del>₹920.00</del>
      </Typography>

      <Typography color={"green"}>30% off</Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
    </>
    
  );
}
