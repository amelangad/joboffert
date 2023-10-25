-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Offert" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,
    "salary" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "Offert_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Offert" ("authorId", "content", "id", "published", "title") SELECT "authorId", "content", "id", "published", "title" FROM "Offert";
DROP TABLE "Offert";
ALTER TABLE "new_Offert" RENAME TO "Offert";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
