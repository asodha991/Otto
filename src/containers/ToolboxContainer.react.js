import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Grow } from "@material-ui/core";
import { useState } from "state/State";
import {
  StepperState,
  StateType,
  Models,
  DatasetCategory,
} from "state/StateTypes";
import NNFFToolbox from "components/toolbox/NNFFToolbox";
import KNNToolbox from "components/toolbox/KNNToolbox";
import DataPreview from "components/toolbox/DataPreview";
import LinRegToolbox from "components/toolbox/LinRegToolbox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 296,
  },
  dataRoot: {
    width: 350,
  },
  headerText: {
    paddingLeft: theme.spacing(0),
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(1),
    fontWeight: "600",
  },
  card: {
    marginTop: "4px",
    height: "100%",
    border: "none",
  },
  cardContent: {
    padding: 2,
  },
}));

const getToolboxContent = (state: StateType) => {
  if (state.stepper_state === StepperState.VISUALIZE) {
    switch (state.model) {
      case Models.LINEAR_REGRESSION:
        return <LinRegToolbox />;
      case Models.NEURAL_NETWORK_FF:
        return <NNFFToolbox />;
      case Models.KNN:
        return <KNNToolbox />;
      default:
        return null;
    }
  }
  return <DataPreview />;
};

export default function ToolboxContainer() {
  const classes = useStyles();
  const { state } = useState();
  return (
    <Grow
      in={
        state.stepper_state === StepperState.VISUALIZE ||
        (state.dataset_category === DatasetCategory.SAMPLE &&
          state.sample_dataset != null)
      }
    >
      <div
        className={
          state.stepper_state === StepperState.VISUALIZE
            ? classes.root
            : classes.dataRoot
        }
      >
        <Typography className={classes.headerText} variant="h5">
          {state.stepper_state === StepperState.VISUALIZE
            ? "Toolbox"
            : "Dataset Preview"}
        </Typography>
        <Card className={classes.card} variant="outlined">
          <CardContent className={classes.cardContent}>
            {getToolboxContent(state)}
          </CardContent>
        </Card>
      </div>
    </Grow>
  );
}