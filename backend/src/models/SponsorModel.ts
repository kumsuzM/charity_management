import pool from "../db";

export interface Sponsor {
  id: number;
  name: string;
  description?: string;
  website_url?: string;
}

class SponsorModel {
  // Example model methods
  async getAllSponsors(): Promise<Sponsor[]> {
    const { rows } = await pool.query("SELECT * FROM sponsors");
    return rows;
  }

  async getAcceptedConnectionsCount(sponsorId: number): Promise<number> {
    const { rows } = await pool.query(
      `
            SELECT COUNT(*) AS count
            FROM connections
            WHERE sponsor_id = $1 AND status = 'Accepted'
        `,
      [sponsorId],
    );
    return parseInt(rows[0].count);
  }
}

export default new SponsorModel();
