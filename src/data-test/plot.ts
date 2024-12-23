import { HistoricalDetail } from "@/components/plot/types";

export const FAKE_DATA: HistoricalDetail[] = [
  // data from 2023-01-01, 10 days each month, month 1, 3, 4. Remove day 3, 4 in month 1
  {
    id: "2569b2d9-382d-4222-a415-7d50068889e5",
    name: "/etc/resolv.conf Disk Usage",
    dataType: "number",
    dataUnit: "%",
    data: [
      [1672531200000, 53],
      [1672617600000, 61],
      // [1672704000000, 70],
      // [1672790400000, 79],
      [1672876800000, 87],
      [1672963200000, 96],
      [1673049600000, 4],
      [1673136000000, 13],
      [1673222400000, 22],
      [1673308800000, 30],
      //
      [1677657600000, 76],
      [1677744000000, 40],
      [1677830400000, 4],
      [1677916800000, 68],
      [1678003200000, 32],
      [1678089600000, 96],
      [1678176000000, 60],
      [1678262400000, 24],
      [1678348800000, 88],
      [1678435200000, 52],
      //
      [1680336000000, 60],
      [1680422400000, 24],
      [1680508800000, 88],
      [1680595200000, 52],
      [1680681600000, 16],
      [1680768000000, 80],
      [1680854400000, 44],
      [1680940800000, 8],
      [1681027200000, 72],
      [1681113600000, 36],
    ],
  },
  // data from 2023-01-01 to 2023-01-31, interval 1 day.
  {
    id: "8035cc34-b949-4b6b-836b-6d5c1b7cf1ba",
    name: "/tmp/balena Disk Usage",
    dataType: "number",
    dataUnit: "%",
    data: [
      [1672531200000, 23],
      [1672617600000, 20],
      [1672704000000, 70],
      [1672790400000, 79],
      [1672876800000, 87],
      [1672963200000, 60],
      [1673049600000, 46],
      [1673136000000, 13],
      [1673222400000, 22],
      [1673308800000, 30],
      [1673395200000, 39],
      [1673481600000, 48],
      [1673568000000, 56],
      [1673654400000, 65],
      [1673740800000, 74],
      [1673827200000, 82],
      [1673913600000, 91],
      [1674000000000, 12],
      [1674086400000, 18],
      [1674172800000, 17],
      [1674259200000, 25],
      [1674345600000, 34],
      [1674432000000, 43],
      [1674518400000, 51],
      [1674604800000, 60],
      [1674691200000, 69],
      [1674777600000, 77],
      [1674864000000, 86],
      [1674950400000, 80],
      [1675036800000, 35],
    ],
    dataRange: [
      [1672531200000, 20, 90],
      [1672617600000, 31, 90],
      [1672704000000, 40, 90],
      [1672790400000, 49, 90],
      [1672876800000, 67, 93],
      [1672963200000, 46, 100],
      [1673049600000, 2, 92],
      [1673136000000, 1, 90],
      [1673222400000, 14, 90],
      [1673308800000, 21, 90],
      [1673395200000, 34, 90],
      [1673481600000, 28, 90],
      [1673568000000, 16, 90],
      [1673654400000, 35, 90],
      [1673740800000, 44, 90],
      [1673827200000, 42, 90],
      [1673913600000, 61, 97],
      [1674000000000, 0, 90],
      [1674086400000, 5, 90],
      [1674172800000, 7, 90],
      [1674259200000, 15, 90],
      [1674345600000, 24, 90],
      [1674432000000, 33, 90],
      [1674518400000, 11, 90],
      [1674604800000, 50, 90],
      [1674691200000, 39, 90],
      [1674777600000, 17, 90],
      [1674864000000, 36, 97],
      [1674950400000, 15, 99],
      [1675036800000, 2, 98],
    ],
  },
  {
    id: "c68af11f-e5af-481b-9704-2da48deb52fd",
    name: "CPU Usage",
    dataType: "number",
    dataUnit: "",
    data: [
      [1672531200000, 230],
      [1672617600000, 200],
      [1672704000000, 700],
      [1672790400000, 790],
      [1672876800000, 870],
      [1672963200000, 600],
      [1673049600000, 460],
      [1673136000000, 130],
      [1673222400000, 220],
      [1673308800000, 300],
      [1673395200000, 390],
      [1673481600000, 480],
      [1673568000000, 560],
      [1673654400000, 650],
      [1673740800000, 740],
      [1673827200000, 820],
      [1673913600000, 910],
      [1674000000000, 120],
      [1674086400000, 180],
      [1674172800000, 170],
      [1674259200000, 250],
      [1674345600000, 340],
      [1674432000000, 430],
      [1674518400000, 510],
      [1674604800000, 600],
      [1674691200000, 690],
      [1674777600000, 770],
      [1674864000000, 860],
      [1674950400000, 800],
      [1675036800000, 350],
    ],
  },
  {
    id: "a42f3afe-bad3-47e3-875d-3af7335f1324",
    name: "Memory Usage",
    dataType: "enum",
    dataUnit: "",
    data: [
      [1672531200000, 2],
      [1672617600000, 2],
      [1672704000000, 1],
      [1672790400000, 1],
      [1672876800000, 5],
      [1672963200000, 2],
      [1673049600000, 4],
      [1673136000000, 1],
      [1673222400000, 2],
      [1673308800000, 3],
      [1673395200000, 3],
      [1673481600000, 4],
      [1673568000000, 5],
      [1673654400000, 2],
      [1673740800000, 1],
      [1673827200000, 5],
      [1673913600000, 2],
      [1674000000000, 1],
      [1674086400000, 1],
      [1674172800000, 1],
      [1674259200000, 2],
      [1674345600000, 3],
      [1674432000000, 4],
      [1674518400000, 5],
      [1674604800000, 2],
      [1674691200000, 2],
      [1674777600000, 1],
      [1674864000000, 5],
      [1674950400000, 5],
      [1675036800000, 3],
    ],
    customUnit: {
      1: "Connected (session NOT present)",
      2: "Connected (session present)",
      3: "Connecting...",
      4: "An error occured",
      5: "Unexpected disconnect",
    },
  },
  {
    id: "e87effaf-e772-44cc-abf2-d000dc7f7155",
    name: "/ Disk Usage",
    dataType: "digital",
    dataUnit: "",
    data: [
      [1672531200000, 0],
      [1672617600000, 0],
      [1672704000000, 1],
      [1672790400000, 1],
      [1672876800000, 1],
      [1672963200000, 0],
      [1673049600000, 1],
      [1673136000000, 1],
      [1673222400000, 0],
      [1673308800000, 1],
      [1673395200000, 1],
      [1673481600000, 1],
      [1673568000000, 1],
      [1673654400000, 0],
      [1673740800000, 1],
      [1673827200000, 1],
      [1673913600000, 0],
      [1674000000000, 1],
      [1674086400000, 1],
      [1674172800000, 1],
      [1674259200000, 0],
      [1674345600000, 1],
      [1674432000000, 1],
      [1674518400000, 1],
      [1674604800000, 0],
      [1674691200000, 0],
      [1674777600000, 1],
      [1674864000000, 1],
      [1674950400000, 0],
      [1675036800000, 1],
    ],
    customUnit: {
      1: "ON",
      0: "OFF",
    },
  },
];

export const getTagValue = (id: string) => {
  const list = id.match(/\d+/g);
  if (!list) {
    return 0;
  }
  const sum = list
    .map(Number) // Convert each string to a number
    .reduce((acc, num) => acc + num, 0);

  return sum;
};