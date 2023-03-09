const apiKey = process.env.MY_API_KEY;

const handler = async (req, res) => {
  try {
    const final_list = [];
    for (let i = 0; i < 5; i++) {
      const result = await fetch(`https://api.api-ninjas.com/v1/randomuser`, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      const data = await result.json();
      final_list.push(data);
    }
    res.json(final_list);
  } catch (err) {
    throw new Error(err);
  }
};

export default handler;
