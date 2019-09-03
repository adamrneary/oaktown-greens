import React from "react";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";

import SeedTypeTable from "./SeedTypeTable";
import NewSeedTypeDialog from "./NewSeedTypeDialog";
import {
  SeedTypeCollectionProps,
  createSeedType,
  deleteSeedType
} from "../../models/SeedType";

type Props = SeedTypeCollectionProps & WithStyles<typeof styles>;

function SeedTypeList({ classes, data }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      {!!data && (
        <Paper className={classes.paper}>
          <SeedTypeTable data={data} handleDelete={deleteSeedType} />
        </Paper>
      )}
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <NewSeedTypeDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={createSeedType}
      />
    </>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      margin: `${theme.spacing(2)}px ${theme.spacing(3)}px`
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  });

export default withStyles(styles)(SeedTypeList);
