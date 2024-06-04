import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import Address from "./Address";

const Delivery = () => {

  const handleSubmit = (e) => {
e.preventdefault()
  };

  return (
    <>
      <div>
        <Grid container spacing={4}>
          <Grid xs={12} lg={5} className="border h-[30res] overflow-y-scroll">
            <div className="p-5 py-7 cursor-pointer">
              <Address />
              <Button>Deliver Here</Button>
            </div>
          </Grid>

          <Grid item xs={12} lg={7}>
            <Box className="p-5">
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField required id="Name" name="Name" label="Name" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      id="Address"
                      name="Address"
                      label="Address"
                      multiline
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField required id="city" name="city" label="city" />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField required id="state" name="state" label="state" />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField required id="zip" name="zip" label="Zip-code" />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="Number"
                      name="Number"
                      label="Phone Number"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button onClick={handleSubmit}>Deliver Here</Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Delivery;
