const setups = [
  {
    uuid: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    schedule: "Occurs every day",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "c9bf9e57-1685-4c89-bafb-ff5af830be8a",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    schedule: "Occurs every 2 weeks on Tuesday",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    schedule: "Occurs on day 11",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "6fa459ea-ee8a-3ca4-894e-db77e160355e",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    schedule: "Occurs on day 11",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "e1b7e9a8-3c5a-4a9b-8f95-f1b1b9d4eb5a",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    schedule: "Occurs every 2 weeks on Tuesday",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "1c0f1e9a-b2c3-4b3e-b54e-0cc6c74ef07b",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    schedule: "Occurs on day 11",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "a7cfcf22-3799-49ff-9f44-c51d1b74b9bd",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    schedule: "Occurs every 2 weeks on Tuesday",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "bb5a5b88-9982-493d-91d6-7911a1c01d1a",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    schedule: "Occurs on day 11",
    dateAdded: "09/02/2021 15:00",
  },
];

const reports = [
  {
    uuid: "a1f9c9d1-36ed-4d9d-a7b2-1a4d2c9f8e2a",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "b2e3a8c2-47bd-4e9c-8b3f-2a3d2c9f8e3b",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "c3d4b9e3-58ce-4f0d-9c4f-3b4e3c9f8e4c",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "d4e5c0f4-69df-4g1e-ad5g-4c5f4d9f8e5d",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "e5f6d1g5-7ahg-4h2f-be6h-5d6g5e9f8e6e",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "f6g7e2h6-8bih-4i3g-cf7i-6e7h6f9f8e7f",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "g7h8f3i7-9cjh-4j4h-dg8j-7f8i7g9f8e8g",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "h8i9g4j8-akih-4k5i-eg9k-8g9j8h9f8e9h",
    name: "Balance Sheet",
    type: "Value",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "i9jag5k9-blih-4l6j-fg0l-9h0k9i9f8f0i",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
  {
    uuid: "j0kb0l0c-cmjh-4m7k-gh1m-0i1l0j9f8f1j",
    name: "Quarterly Report",
    type: "Alarm",
    tagname: "CPU_Usage",
    runTime: "09/02/2021 15:00",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getRandomUUIDs(data: any[], min: number, max: number) {
  const shuffled = data
    .map((item) => item.uuid)
    .sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  return shuffled.slice(0, count);
}

const schedules = [
  {
    uuid: "a1234567-89ab-cdef-0123-456789abcdef",
    name: "Daily HVAC",
    setup: getRandomUUIDs(setups, 1, 4),
    schedule: "Occurs every day",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "b2345678-90bc-def0-1234-567890abcdef",
    name: "Daily HVAC",
    setup: getRandomUUIDs(setups, 1, 4),
    schedule: "Occurs every day",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "c3456789-01cd-ef01-2345-678901abcdef",
    name: "Daily HVAC",
    setup: getRandomUUIDs(setups, 1, 4),
    schedule: "Occurs every day",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "d4567890-12de-ef12-3456-789012abcdef",
    name: "Daily HVAC",
    setup: getRandomUUIDs(setups, 1, 4),
    schedule: "Occurs every day",
    dateAdded: "09/02/2021 15:00",
  },
  {
    uuid: "e5678901-23ef-0123-4567-890123abcdef",
    name: "Daily HVAC",
    setup: getRandomUUIDs(setups, 1, 4),
    schedule: "Occurs every day",
    dateAdded: "09/02/2021 15:00",
  },
];

export const getSetups = () => setups;
export const getReports = () => reports;
export const getSchedules = () => schedules;
