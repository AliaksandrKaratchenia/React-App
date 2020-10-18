import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./components/Routes";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import { useDispatch } from "react-redux";
import { loadOrders } from "./store/actions/orderActions";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    height: "90vh"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Aside open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes />
      </main>
    </div>
  );
};
export default App;
