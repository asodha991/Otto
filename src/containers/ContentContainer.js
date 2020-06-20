import React from "react";
import { Col } from "react-bootstrap";
import RightColumnContainer from "containers/RightColumnContainer";
import MainColumnContainer from "containers/MainColumnContainer";
import SummaryContainer from "containers/SummaryContainer";
import { NNStateProvider } from "state/NNState";
import { ModelStateProvider } from "state/ModelState";

function ContentContainer() {
  return (
    <>
      <Col className="summaryContainer" lg={2}>
        <SummaryContainer />
      </Col>
      <NNStateProvider>
        <ModelStateProvider>
          <Col className="mainColumnContainer">
            <MainColumnContainer />
          </Col>
          <Col className="rightColumnContainer" lg={3}>
            <RightColumnContainer />
          </Col>
        </ModelStateProvider>
      </NNStateProvider>
    </>
  );
}

export default ContentContainer;