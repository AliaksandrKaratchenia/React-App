import { ReactNode } from "react";

export enum TimelineVariant {
    Main,
    Secondary
}

export interface TimelineDefinition {
    lineDotIcon: ReactNode;
    content: ReactNode;
    labelComponent: ReactNode;
}