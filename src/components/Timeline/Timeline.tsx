import React, { ReactNode, useState } from 'react';
import "./Timeline.scss";
import { Step, StepButton, StepContent, StepLabel, Stepper } from '@material-ui/core';
import classNames from 'classnames';
import { TimelineDefinition, TimelineVariant } from './timelineDefinition';

const getStepIcon = (icon: ReactNode) => {
  return () => {
    return (
      <div className="step-icon">
        {icon}
      </div>
    );
  }
}

interface TimelineProps {
  timelines: TimelineDefinition[],
  variant: TimelineVariant
}

const Timeline: React.FC<TimelineProps> = ({ timelines, variant }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (index: number) => {
    if (activeStep === index) {
      setActiveStep(0);
    } else {
      setActiveStep(index);
    }
  };

  return (
    <Stepper
      nonLinear
      activeStep={activeStep}
      orientation="vertical"
      className={classNames({
        "main-variant": variant === TimelineVariant.Main,
        "secondary-variant": variant === TimelineVariant.Secondary
      })}>
      <Step className="hidden" />
      {timelines.map((item, index) => (
        <Step
          completed={true}
          key={index}
          className={classNames({
            "active": index + 1 === activeStep
          })}>
          <StepButton onClick={() => handleStep(index + 1)}>
            <StepLabel StepIconComponent={getStepIcon(item.lineDotIcon)}>{item.labelComponent}</StepLabel>
          </StepButton>
          <StepContent>
            {item.content}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}
export default Timeline;