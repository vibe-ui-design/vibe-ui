client<llm> GPT4o{
  provider openai
  options {
    model gpt-4o-mini
    api_key env.OPENAI_API_KEY
  }
}
