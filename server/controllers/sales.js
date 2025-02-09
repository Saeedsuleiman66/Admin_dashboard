import OverallStat from "../models/OverallStat.js";

const getSales = async (req, res) => {
	try {
		const stats = await OverallStat.find();
		res.status(200).json(stats[0]);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export { getSales };
