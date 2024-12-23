export const MOCK_ALARM_CLASS = [
  {
    id: "1",
    name: "A",
    color: "#FF0000",
  },
  {
    id: "2",
    name: "B",
    color: "#FFA500",
  },
  {
    id: "3",
    name: "C",
    color: "#FFFF00",
  },
  {
    id: "4",
    name: "D",
    color: "#008000",
  },
  {
    id: "5",
    name: "E",
    color: "#73c0de",
  },
];

export const MOCK_ALARM_CLASS_DATA = [10, 15, 30, 40, 5];
export const MOCK_ALARM_STATISTICS_DATA = [
  [
    [Date.UTC(2022, 0, 2, 2), 10],
    [Date.UTC(2022, 0, 2, 5), 15],
    [Date.UTC(2022, 0, 2, 10), 30],
    [Date.UTC(2022, 0, 2, 15), 40],
    [Date.UTC(2022, 0, 2, 20), 5],
  ],
  [
    [Date.UTC(2022, 0, 2, 2), 72],
    [Date.UTC(2022, 0, 2, 5), 40],
    [Date.UTC(2022, 0, 2, 10), 45],
    [Date.UTC(2022, 0, 2, 15), 78],
    [Date.UTC(2022, 0, 2, 20), 30],
  ],
  [
    [Date.UTC(2022, 0, 2, 2), 30],
    [Date.UTC(2022, 0, 2, 5), 30],
    [Date.UTC(2022, 0, 2, 10), 42],
    [Date.UTC(2022, 0, 2, 15), 32],
    [Date.UTC(2022, 0, 2, 20), 69],
  ],
  [
    [Date.UTC(2022, 0, 2, 2), 16],
    [Date.UTC(2022, 0, 2, 5), 18],
    [Date.UTC(2022, 0, 2, 10), 48],
    [Date.UTC(2022, 0, 2, 15), 12],
    [Date.UTC(2022, 0, 2, 20), 23],
  ],
  [
    [Date.UTC(2022, 0, 2, 2), 25],
    [Date.UTC(2022, 0, 2, 5), 38],
    [Date.UTC(2022, 0, 2, 10), 41],
    [Date.UTC(2022, 0, 2, 15), 39],
    [Date.UTC(2022, 0, 2, 20), 47],
  ],
];

export const RECURRING_ALARMS = [
  {
    id: "1",
    tagName: "ServerMemoryUsage",
    class: "A",
    count: 10,
  },
  {
    id: "2",
    tagName: "ServerMemoryUsage",
    class: "B",
    count: 15,
  },
  {
    id: "3",
    tagName: "ServerMemoryUsage",
    class: "A",
    count: 30,
  },
  {
    id: "4",
    tagName: "ServerMemoryUsage",
    class: "A",
    count: 40,
  },
  {
    id: "5",
    tagName: "ServerMemoryUsage",
    class: "E",
    count: 5,
  },
];
export const ALARM_CLASSES_COLOR = [
  "#FF1F1F",
  "#FE9739",
  "#FFD84C",
  "#9A6EE3",
  "#EA68DD",
  "#C74848",
  "#CA7F3A",
  "#C2A43A",
];

export const CLASSES_ROW = [
  {
    id: "1",
    name: "A",
    priority: "Level 1",
    description: "Alarm class A",
    color: ALARM_CLASSES_COLOR[0],
    defaultChoice: true,
    __reorder__: "A",
  },
  {
    id: "2",
    name: "B",
    priority: "Level 2",
    description: "Alarm class B",
    color: ALARM_CLASSES_COLOR[1],
    defaultChoice: false,
    __reorder__: "B",
  },
  {
    id: "3",
    name: "C",
    priority: "Level 3",
    description: "Alarm class C",
    color: ALARM_CLASSES_COLOR[2],
    defaultChoice: false,
    __reorder__: "C",
  },
  {
    id: "4",
    name: "D",
    priority: "Level 4",
    description: "Alarm class D",
    color: ALARM_CLASSES_COLOR[3],
    defaultChoice: false,
    __reorder__: "D",
  },
  {
    id: "5",
    name: "E",
    priority: "Level 5",
    description: "Alarm class E",
    color: ALARM_CLASSES_COLOR[4],
    defaultChoice: false,
    __reorder__: "E",
  },
  {
    id: "6",
    name: "F",
    priority: "Level 6",
    description: "Alarm class F",
    color: ALARM_CLASSES_COLOR[5],
    defaultChoice: false,
    __reorder__: "F",
  },
  {
    id: "7",
    name: "G",
    priority: "Level 7",
    description: "Alarm class G",
    color: ALARM_CLASSES_COLOR[6],
    defaultChoice: false,
    __reorder__: "G",
  },
  {
    id: "8",
    name: "H",
    priority: "Level 8",
    description: "Alarm class H",
    color: ALARM_CLASSES_COLOR[7],
    defaultChoice: false,
    __reorder__: "H",
  },
];

export const PUSH_NOTIFICATION_SMS = [
  {
    id: "1",
    active: true,
    alarmClass: "Alarm class A",
    description: "Description sms A",
    mustBeAcknowledge: false,
  },
  {
    id: "2",
    active: false,
    alarmClass: "Alarm class B",
    description: "Description sms B",
    mustBeAcknowledge: true,
  },
  {
    id: "3",
    active: true,
    alarmClass: "Alarm class C",
    description: "Description sms C",
    mustBeAcknowledge: true,
  },
  {
    id: "4",
    active: false,
    alarmClass: "Alarm class D",
    description: "Description sms D",
    mustBeAcknowledge: true,
  },
];

export const PUSH_NOTIFICATION_MAIL = [
  {
    id: "1",
    active: false,
    alarmClass: "Alarm class A",
    description: "Description mail A",
    mustBeAcknowledge: true,
  },
  {
    id: "2",
    active: false,
    alarmClass: "Alarm class B",
    description: "Description mail B",
    mustBeAcknowledge: false,
  },
  {
    id: "3",
    active: true,
    alarmClass: "Alarm class C",
    description: "Description mail C",
    mustBeAcknowledge: false,
  },
  {
    id: "4",
    active: true,
    alarmClass: "Alarm class D",
    description: "Description mail D",
    mustBeAcknowledge: false,
  },
];

export const PUSH_NOTIFICATION_PUSH = [
  {
    id: "1",
    active: false,
    alarmClass: "Alarm class A",
    description: "Description push A",
    mustBeAcknowledge: false,
  },
  {
    id: "2",
    active: false,
    alarmClass: "Alarm class B",
    description: "Description push B",
    mustBeAcknowledge: false,
  },
  {
    id: "3",
    active: true,
    alarmClass: "Alarm class C",
    description: "Description push C",
    mustBeAcknowledge: true,
  },
  {
    id: "4",
    active: false,
    alarmClass: "Alarm class D",
    description: "Description push D",
    mustBeAcknowledge: false,
  },
];

export const NOTIFICATION_PROVIDERS_ROWS = [
  {
    id: 1,
    name: "Email",
    type: "mailatosms",
    enabled: 1,
    username: "--",
    password: "--",
  },
  {
    id: 2,
    name: "New",
    type: "piscadamail",
    enabled: 1,
    username: "--",
    password: "--",
  },
  {
    id: 3,
    name: "New",
    type: "piscadamail",
    enabled: 1,
    username: "--",
    password: "--",
  },
  {
    id: 4,
    name: "New",
    type: "piscadamail",
    enabled: 1,
    username: "admin",
    password: "admin",
  },
];
