import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain"
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default useStyles;
