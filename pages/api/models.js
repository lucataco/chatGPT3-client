const { Configuration, OpenAIApi } = require("openai");

const modelsAction = async (req, res) => {
    // Open AI Configuration
    const configuration = new Configuration({
        organization: process.env.OPEN_AI_ORG,
        apiKey: process.env.OPEN_AI_KEY,
    });
    const openai = new OpenAIApi(configuration);
	const response = await openai.listEngines();
	res.json({
		models: response.data
	})
}

export default modelsAction;
