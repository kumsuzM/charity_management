import pool from "../db";

export interface Charity {
  id: number;
  name: string;
  description?: string;
  website_url?: string;
}

class CharityModel {
  // Example model methods
  async getAllCharities(): Promise<Charity[]> {
    const { rows } = await pool.query("SELECT * FROM charities");
    return rows;
  }
}

export default new CharityModel();
