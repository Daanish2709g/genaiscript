system({
    title: "Agent that can asks questions to the user.",
})

const model = env.vars.agentInterpreterModel
defAgent(
    "user_input",
    "Ask user for input to confirm, select or answer the question in the query. The message should be very clear and provide all the context.",
    `Your task is to ask the question in QUERY to the user using the tools.
    - Use the best tool to interact with the user. 
    - do NOT try to interpret the meaning of the question, let the user answer.
    - do NOT try to interpret the meaning of the user answser, return the user answer unmodified.`,
    {
        model,
        tools: ["user_input"],
    }
)
