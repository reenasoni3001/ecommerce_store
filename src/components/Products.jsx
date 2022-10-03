import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ShoppingCart } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products({ product }) {
  const [expanded, setExpanded] = React.useState(false);

  const [sold, setSold] = React.useState(false);

  const soldOut = () => {
    if (product.id === 1 || product.id === 3 || product.id === 5) {
      setSold(true);
    }
  };

  React.useEffect(() => {
    setTimeout(() => soldOut(), 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardHeader
        variant="h6"
        title={
          product.title.length > 20
            ? `${product.title.substring(0, 20)}...`
            : product.title
        }
        subheader={product.category}
      />
      <CardMedia
        component="img"
        image={product.image}
        alt="product images"
        height="200"
        width="200"
      />
      <CardContent>
        <Typography color="text.secondary">Price : ${product.price}</Typography>
        <Typography color="text.secondary">
          Rating : {product.rating.rate}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {sold ? (
          "Sold Out "
        ) : (
          <IconButton aria-label="add to favorites">
            <ShoppingCart />
          </IconButton>
        )}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
