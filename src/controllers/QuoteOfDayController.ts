import pool from '../dbconfig/dbconfig';

class QuoteOfDayController {
    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM quote_of_day";
            console.log(sql)
            const { rows } = await client.query(sql);
            const quotes = rows;

            client.release();

            res.send(quotes);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default QuoteOfDayController;