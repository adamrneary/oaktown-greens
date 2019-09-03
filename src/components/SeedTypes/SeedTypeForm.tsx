import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { SeedType } from "../../models/SeedType";

type Props = {
  values: Omit<SeedType, "id">;
  handleChange: (
    key: keyof Omit<SeedType, "id">
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRangeChange: (
    key: string
  ) => (_event: React.ChangeEvent<{}>, value: number | number[]) => void;
};

export default function SeedTypeForm({
  values,
  handleChange,
  handleRangeChange
}: Props) {
  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Seed type name"
        fullWidth
        type="text"
        value={values.name}
        onChange={handleChange("name")}
      />
      <TextField
        margin="dense"
        id="url"
        label="Reorder URL"
        fullWidth
        type="url"
        value={values.url}
        onChange={handleChange("url")}
      />
      <TextField
        margin="dense"
        id="targetSeedDensityGrams"
        label="Target seed density (g)"
        fullWidth
        type="number"
        value={values.targetSeedDensityGrams}
        onChange={handleChange("targetSeedDensityGrams")}
      />
      <TextField
        margin="dense"
        id="sproutsInDays"
        label="Sprouts in (days)"
        fullWidth
        type="number"
        value={values.sproutsInDays}
        onChange={handleChange("sproutsInDays")}
      />
      <TextField
        margin="dense"
        id="idealTempMin"
        label="Ideal growing temp (min)"
        fullWidth
        type="number"
        value={values.idealTempMin}
        onChange={handleChange("idealTempMin")}
      />
      <TextField
        margin="dense"
        id="idealTempMax"
        label="Ideal growing temp (max)"
        fullWidth
        type="number"
        value={values.idealTempMax}
        onChange={handleChange("idealTempMax")}
      />
      <TextField
        margin="dense"
        id="seedDepthIn"
        label="Target seed depth"
        fullWidth
        type="number"
        value={values.seedDepthIn}
        onChange={handleChange("seedDepthIn")}
      />
      <TextField
        margin="dense"
        id="plantSpacingInches"
        label="Plant spacing (in)"
        fullWidth
        type="number"
        value={values.plantSpacingInches}
        onChange={handleChange("plantSpacingInches")}
      />
      <Typography id="full-sun-range-slider" gutterBottom>
        {`Min full sun (hours): ${values.fullSunMin} - ${values.fullSunMax}`}
      </Typography>
      <Slider
        value={[values.fullSunMin, values.fullSunMax]}
        onChange={handleRangeChange("fullSun")}
        valueLabelDisplay="auto"
        aria-labelledby="full-sun-range-slider"
        min={2}
        max={12}
      />
      <Typography id="ideal-temp-range-slider" gutterBottom>
        {`Ideal growing temp (°F): ${values.idealTempMin} - ${values.idealTempMax}`}
      </Typography>
      <Slider
        value={[values.idealTempMin, values.idealTempMax]}
        onChange={handleRangeChange("idealTemp")}
        valueLabelDisplay="auto"
        aria-labelledby="ideal-temp-range-slider"
        min={30}
        max={100}
      />
    </>
  );
}
