class CreateMovieActors < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_actors do |t|
      t.references :actor, null: false, foreign_key: true
      t.references :movie, null: false, foreign_key: true
      t.string :role

      t.timestamps
    end
  end
end
