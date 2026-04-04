import { db } from "./db";
import { leads, type InsertLead, type Lead } from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  async createLead(lead: InsertLead): Promise<Lead> {
    const [newLead] = await db.insert(leads).values(lead).returning();
    return newLead;
  }
}

export class MemStorage implements IStorage {
  private leads: Map<number, Lead>;
  private currentId: number;

  constructor() {
    this.leads = new Map();
    this.currentId = 1;
  }

  async createLead(lead: InsertLead): Promise<Lead> {
    const id = this.currentId++;
    const newLead: Lead = {
      ...lead,
      id,
      createdAt: new Date(),
      message: lead.message || null,
      source: "Bags-LandingPage", // Default from schema
    };
    this.leads.set(id, newLead);
    return newLead;
  }
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();

