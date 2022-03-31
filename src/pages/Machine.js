import { Box, Container, Grid, Pagination } from "@mui/material";
// import { devices } from "../../_mocks_/devices";
import { MachineListToolbar } from "../components/Machine/MachineListToolbar";
import { MachineCard } from "../components/Machine/MachineCard";
import { useState, useEffect } from "react";
import { addNewDevice } from "../api/adminDB";
import MachineTable from "../components/Machine/MachineTable";

const Machine = () => {
  const [devices, setDevices] = useState([]);
  const [deviceModelList, setDeviceModelList] = useState(null);

  useEffect(() => {
    fetch("https://smart-batter.herokuapp.com/api/devices")
      .then((res) => res.json())
      .then((json) => setDevices(json))
      .catch((e) => console.log(e));
  }, []);

  const saveDevice = (device) => {
    // console.log("devce", device);
    addNewDevice(device, (result) => {
      if (result.status === "success") {
        setDevices((prevState) => {
          let users = [...prevState, result.data];
          return users;
        });
      } else {
        alert("Error: " + result.data);
      }
    });
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 0
      }}
    >
      <Container maxWidth={false}>
        <MachineListToolbar saveDevice={saveDevice} />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {devices.length === 0 ? (
              <p>No Devices!!!</p>
            ) : (
              devices.map((device) => (
                <Grid item key={device.id} lg={4} md={6} xs={12}>
                  <MachineCard
                    product={device}
                    showDeviceModelList={(product) =>
                      setDeviceModelList(product)
                    }
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
        {/* horizontal scroll for above devices */}
        {deviceModelList !== null && <MachineTable product={deviceModelList} />}
      </Container>
    </Box>
  );
};

export default Machine;
