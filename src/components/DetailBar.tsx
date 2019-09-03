import React from "react";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";

import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

type Props = WithStyles<typeof styles> & {
  backUrl: string;
};

function DetailBar({ classes, backUrl }: Props) {
  return (
    <div className={classes.root}>
      <Link to={"/seed_types"}>
        <IconButton aria-label="back">
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>
      </Link>
    </div>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      minHeight: 56,
      paddingLeft: theme.spacing(2),
      display: "flex",
      alignItems: "center"
    }
  });

export default withStyles(styles)(DetailBar);
