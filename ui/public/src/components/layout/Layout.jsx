import React from "react";
import { Box , Grid, Container} from "@mui/material";
import Logo from "@components/logo/Logo";
import Side from "@components/side/Side";
import { motion } from "framer-motion";
const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%" }}
    >
      <Grid className="layout" container>
        <Grid
          className="layout__main"
          // flexGrow={6}
          border="1px solid red"
          md={7}
          item
          sx={{ height: '100vh' }}
        >
          <Logo />
          {children}
        </Grid>

        <Side />
      </Grid>
    </motion.div>
  );
};

export default Layout;
