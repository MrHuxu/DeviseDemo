class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :team
      t.string :position
      t.text :content
      t.text :answer
      t.integer :difficulty
      t.integer :author_id

      t.timestamps
    end
  end
end
