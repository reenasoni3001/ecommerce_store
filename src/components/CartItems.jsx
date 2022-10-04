import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CartItems({ item }) {
  console.log("itemItms", item);
  return (
    <Card sx={{ display: "flex", margin: "5px" }}>
      <CardMedia
        component="img"
        sx={{ width: 70 }}
        image={item.image}
        alt="items"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {item.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Price : ${item.price}
          </Typography>
          <Typography>quantity: {item.quantity}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

// const CartItems = () => {
//   return <div>CartItems</div>;
// };

// export default CartItems;
