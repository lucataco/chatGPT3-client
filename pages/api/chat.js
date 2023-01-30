const { Configuration, OpenAIApi } = require("openai");

const chatAction = async (req, res) => {
	// Open AI Configuration
    const configuration = new Configuration({
        organization: process.env.OPEN_AI_ORG,
        apiKey: process.env.OPEN_AI_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const { message, currentModel, temperature } = req.body;
	const response = await openai.createCompletion({
		model: `${currentModel}`,// "text-davinci-003",
		prompt: `${message}`,
		max_tokens: 100, 
		temperature,
	  });
	res.json({
		message: response.data.choices[0].text,
	})
}

export default chatAction;
