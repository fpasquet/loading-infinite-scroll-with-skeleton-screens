import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.background.paper,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default useStyles;
