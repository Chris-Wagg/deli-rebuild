-- CreateTable
CREATE TABLE "OpenHours" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mondayTuesdayOpen" TEXT NOT NULL,
    "wedesdayFridayOpen" TEXT NOT NULL,
    "saturdayOpen" TEXT NOT NULL,
    "sundayOpen" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "breakfastCatering" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "breakfastCateringItem" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "smallBuffet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "smallBuffetCateringItem" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "smallStudentBuffet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "smallStudentItem" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "largeStudentBuffet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "largeStudentItem" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "breakfastMenu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "breakfastItem" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "brunchMenu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "brunchItem" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "lunchMenu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lunchItem" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "dinnerMenu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dinnerItem" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "whiteWine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "redWine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "roseWine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "tapBeer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "bottleBeer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "alcoholFree" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "coffee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "cocktails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);
