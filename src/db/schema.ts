import { date,pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const status = pgEnum("status", ["todo", "done"]);

export const todo_tags = pgTable("todo_tags", {
  id: uuid("id").primaryKey().defaultRandom().unique(),
  title: text("title").notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().unique(),
  email: text("email").notNull().unique().primaryKey(),
  created_at: date("created_at").defaultNow(),
});

export const todo = pgTable("todo", {
  id: uuid("id").primaryKey().defaultRandom().unique(),
  title: text("title").notNull(),
  status: status("status").default("todo").notNull(),
  created_at: date("created_at").defaultNow(),
  target_date: date("target_date"),
  tag_id : uuid("tag_id").references(()=>todo_tags.id),
  user_id: text("user_id").references(()=>users.email).notNull(),
});
