const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "TABLE NUMBER", uid: "tableNumber", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Pending", uid: "pending" },
  { name: "Denied", uid: "denied" },
];

const users = [
  {
    id: "1",
    name: "Tony Reichert",
    status: "active",
    tableNumber: "29",
  },
  {
    id: "2",
    name: "Zoey Lang",
    status: "pending",
    tableNumber: "25",
  },
  {
    id: "3",
    name: "Jane Fisher",
    status: "active",
    tableNumber: "22",
  },
  {
    id: "4",
    name: "William Howard",
    status: "denied",
    tableNumber: "28",
  },
];

export { columns, users, statusOptions };
