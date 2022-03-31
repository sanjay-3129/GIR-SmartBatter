import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  CardActionArea
} from "@mui/material";
import { Clock as ClockIcon } from "../../assets/icons/clock";
import { Download as DownloadIcon } from "../../assets/icons/download";

export const MachineCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }}
    {...rest}
    onClick={() => rest.showDeviceModelList(product)}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3
        }}
      >
        <Avatar alt="Product" src={product.img_url} variant="square" />
      </Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        {product.device_name}
      </Typography>
      <Typography align="center" color="textPrimary" variant="body1">
        {product.description}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    {/* <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex"
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex"
          }}
        >
          <DownloadIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {product.totalDownloads} Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box> */}
  </Card>
  // <Card sx={{ maxWidth: 345 }}>
  //   <CardActionArea>
  //     <CardMedia
  //       component="img"
  //       height="140"
  //       image={product.img_url}
  //       alt={product.device_name}
  //     />
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="div">
  //         {product.device_name}
  //       </Typography>
  //       {/* <Typography variant="body2" color="text.secondary">
  //         Lizards are a widespread group of squamate reptiles, with over 6,000
  //         species, ranging across all continents except Antarctica
  //       </Typography> */}
  //     </CardContent>
  //   </CardActionArea>
  // </Card>
);

MachineCard.propTypes = {
  product: PropTypes.object.isRequired
};
