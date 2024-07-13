const { default: prisma } = require("@/lib/prisma");

const USERS = [
  {
    name: "Tony Reichert",
    tableNumber: "29",
  },
  {
    name: "Zoey Lang",
    tableNumber: "25",
  },
  {
    name: "Jane Fisher",
    tableNumber: "22",
  },
  {
    name: "William Howard",
    tableNumber: "28",
  },
];

const main = async () => {
  try {
    await prisma.user.deleteMany({});

    await prisma.user.createMany({
      data: USERS,
    });

    console.log(`Database has been seeded.`);
  } catch (error) {
    console.log("Error while seeding database", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
