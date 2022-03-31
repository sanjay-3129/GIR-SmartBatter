import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from "@mui/material";
// import { Download as DownloadIcon } from "../../assets/icons/download";
// import { Upload as UploadIcon } from "../../assets/icons/upload";
import { Search as SearchIcon } from "../../assets/icons/search";

import Modal from "../../Reuseable/Modal";

export const MachineListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1
      }}
    >
      <Typography sx={{ m: 1, color: "#191C24" }} variant="h4">
        Devices
      </Typography>
      <Box sx={{ m: 1 }}>
        {/* <Button
          startIcon={<UploadIcon fontSize="small" />}
          sx={{ mr: 1, color: "#191C24" }}
        >
          Import
        </Button>
        <Button
          startIcon={<DownloadIcon fontSize="small" />}
          sx={{ mr: 1, color: "#191C24" }}
        >
          Export
        </Button> */}
        <Modal saveDevice={props.saveDevice} />
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        {/* <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
        </CardContent> */}
      </Card>
    </Box>
  </Box>
);
