import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { SeedType, SeedTypeInitialState } from "../../models/SeedType";
import SeedTypeForm from "./SeedTypeForm";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (formState: State) => void;
};
type State = Omit<SeedType, "id">;

export default function NewIngredientDialog({
  open,
  handleClose,
  handleSubmit
}: Props) {
  const [values, setValues] = React.useState<State>(SeedTypeInitialState);

  const handleChange = (name: keyof State) => (
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
    setValues(SeedTypeInitialState);
    handleClose();
  }

  function handleAdd() {
    setValues(SeedTypeInitialState);
    handleClose();
    handleSubmit(values);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-new-seed-type-dialog">New Seed Type</DialogTitle>
      <DialogContent>
        <SeedTypeForm
          values={values}
          handleChange={handleChange}
          handleRangeChange={handleRangeChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
