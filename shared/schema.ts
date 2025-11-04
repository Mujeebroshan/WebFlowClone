import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type ElementType = 'container' | 'heading' | 'paragraph' | 'button' | 'image' | 'link' | 'section' | 'div';

export interface CanvasElement {
  id: string;
  type: ElementType;
  content: string;
  styles: {
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    borderRadius?: string;
    border?: string;
  };
  children?: CanvasElement[];
}

export interface Template {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  elements: CanvasElement[];
}
