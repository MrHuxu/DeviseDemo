json.array!(@questions) do |question|
  json.extract! question, :id, :team, :position, :content, :answer, :difficulty, :author_id
  json.url question_url(question, format: :json)
end
