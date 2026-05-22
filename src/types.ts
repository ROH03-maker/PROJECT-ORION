export interface Subsystem {
  id: string;
  name: string;
  codeName: string;
  integrity: number;
  status: "ONLINE" | "STANDBY" | "WARNING" | "OFFLINE";
  thermal: number;
  bandwidth: string;
  description: string;
  metrics: string[];
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  sender: "user" | "orion-core" | "system";
  text: string;
}

export interface TimelineMilestone {
  id: string;
  phase: string;
  title: string;
  term: string;
  status: "COMPLETED" | "ACTIVE" | "DEFERRED";
  description: string;
  metrics: string[];
}

export interface LabConcept {
  id: string;
  name: string;
  category: string;
  vulnerabilityIndex: string;
  complexity: string;
  description: string;
  schematicType: "spiral" | "grid" | "sine" | "network";
  neuralCapacity: string;
}

export interface ConnectedSystem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  externalLink?: string;
  metricsRef: string;
}

export interface BootMessage {
  text: string;
  type: "status" | "success" | "warning" | "title" | "telemetry";
  delay: number;
}
