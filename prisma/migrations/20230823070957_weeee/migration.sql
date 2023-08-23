/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Event_Member" (
    "id" TEXT NOT NULL,
    "member_id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Event_Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "event_cat" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "collab_id" TEXT NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events_Cat" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Events_Cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Members" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "end_date" TIMESTAMP(3),
    "github_link" TEXT,
    "image_link" TEXT NOT NULL,
    "linkedin_link" TEXT,
    "member_role" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Members_Role" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Members_Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organisations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "POC_name" TEXT,
    "POC_contact" INTEGER,
    "POC_email" TEXT,

    CONSTRAINT "Organisations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,
    "caption" TEXT,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project_Member" (
    "id" TEXT NOT NULL,
    "member_id" TEXT NOT NULL,
    "proj_id" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Project_Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "project_cat" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "collab_id" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects_Cat" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Projects_Cat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Events_Cat_title_key" ON "Events_Cat"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Members_Role_title_key" ON "Members_Role"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Organisations_POC_email_key" ON "Organisations"("POC_email");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_Cat_title_key" ON "Projects_Cat"("title");

-- AddForeignKey
ALTER TABLE "Event_Member" ADD CONSTRAINT "Event_Member_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event_Member" ADD CONSTRAINT "Event_Member_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_collab_id_fkey" FOREIGN KEY ("collab_id") REFERENCES "Organisations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_event_cat_fkey" FOREIGN KEY ("event_cat") REFERENCES "Events_Cat"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_member_role_fkey" FOREIGN KEY ("member_role") REFERENCES "Members_Role"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Member" ADD CONSTRAINT "Project_Member_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Member" ADD CONSTRAINT "Project_Member_proj_id_fkey" FOREIGN KEY ("proj_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_collab_id_fkey" FOREIGN KEY ("collab_id") REFERENCES "Organisations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_project_cat_fkey" FOREIGN KEY ("project_cat") REFERENCES "Projects_Cat"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
