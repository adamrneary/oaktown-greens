import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";

import {
  SeedType,
  SeedTypeDocumentProps,
  updateSeedType
} from "../../models/SeedType";
import SeedTypeForm from "./SeedTypeForm";

type Props = WithStyles<typeof styles> & {
  data: SeedTypeDocumentProps["data"];
};

function SeedTypeDetail({ data, classes }: Props) {
  const [values, setValues] = React.useState<SeedTypeDocumentProps["data"]>(
    data
  );
  useEffect(() => {
    setValues(data);
  }, [data]);
  const handleChange = (name: keyof Omit<SeedType, "id">) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleRangeChange = (name: string) => (
    _event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    if (Array.isArray(value)) {
      setValues({
        ...values,
        [`${name}Min`]: value[0],
        [`${name}Max`]: value[1]
      });
    }
  };

  function handleCancel() {
    setValues(data);
  }

  function handleSubmit() {
    updateSeedType(data.id, values);
  }

  return (
    <Paper className={classes.paper}>
      <SeedTypeForm
        values={values}
        handleChange={handleChange}
        handleRangeChange={handleRangeChange}
      />
      <div className={classes.ctaContainer}>
        <Button onClick={handleCancel} disabled={values === data}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={values === data}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </div>
    </Paper>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      margin: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      padding: theme.spacing(2)
    },

    ctaContainer: {
      margin: `${theme.spacing(2)}px 0`,
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  });

export default withStyles(styles)(SeedTypeDetail);
