# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_06_091802) do

  create_table "bars", force: :cascade do |t|
    t.string "name"
    t.string "location"
  end

  create_table "consumptions", force: :cascade do |t|
    t.integer "patron_id", null: false
    t.integer "drink_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["drink_id"], name: "index_consumptions_on_drink_id"
    t.index ["patron_id"], name: "index_consumptions_on_patron_id"
  end

  create_table "drinks", force: :cascade do |t|
    t.string "name"
    t.string "spirit"
    t.integer "units"
    t.float "price"
    t.string "glass_type"
    t.integer "bar_id", null: false
    t.index ["bar_id"], name: "index_drinks_on_bar_id"
  end

  create_table "patrons", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "consumptions", "drinks"
  add_foreign_key "consumptions", "patrons"
  add_foreign_key "drinks", "bars"
end
