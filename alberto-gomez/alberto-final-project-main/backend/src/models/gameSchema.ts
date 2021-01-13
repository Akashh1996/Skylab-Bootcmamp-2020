export {}
const { model, Schema } = require('mongoose')

const imagesSchema = new Schema({
  thumb: { type: String },
  small: { type: String },
  medium: { type: String },
  large: { type: String },
  original: { type: String }
})

const ppublisherSchema = new Schema({
  name: { type: String },
  id: { type: String },
  url: { type: String }
})

const publishersSchema = new Schema({
  id: { type: String },
  num_games: { type: Number },
  score: { type: Number },
  game: {},
  url: { type: String }
})

const mechanicsSchema = new Schema({
  id: { type: String },
  url: { type: String }
})

const categoriesSchema = new Schema({
  id: { type: String },
  url: { type: String }
})

const designersSchema = new Schema({
  id: { type: String },
  num_games: { type: Number },
  score: { type: Number },
  game: {},
  url: { type: String },
  images: {}
})

const pdesignerSchema = new Schema({
  name: { type: String },
  id: { type: String },
  url: { type: String }
})

const gameSchema = new Schema({
  id: { type: String },
  name: { type: String },
  year_published: { type: Number },
  min_players: { type: Number },
  max_players: { type: Number },
  min_playtime: { type: Number },
  max_playtime: { type: Number },
  min_age: { type: Number },
  description: { type: String },
  description_preview: { type: String },
  image_url: { type: String },
  thumb_url: { type: String },
  images: {
    type: imagesSchema,
    default: {}
  },
  url: { type: String },
  price: { type: String },
  msrp: { type: String },
  discount: { type: String },
  primary_publisher: {
    type: ppublisherSchema,
    default: {}
  },
  publishers: [{ type: publishersSchema, default: {} }],
  mechanics: [{ type: mechanicsSchema, default: {} }],
  categories: [{ type: categoriesSchema, default: {} }],
  designers: [{ type: designersSchema, default: {} }],
  developers: [],
  artists: [String],
  names: [String],
  num_user_ratings: { type: Number },
  average_user_rating: { type: Number },
  official_url: { type: String },
  rules_url: { type: String },
  weight_amount: { type: Number },
  weight_units: { type: String },
  size_height: { type: Number },
  size_width: { type: Number },
  size_depth: { type: Number },
  size_units: { type: String },
  /* matches_specs: null, */
  spec: { type: [] },
  reddit_all_time_count: { type: Number },
  reddit_week_count: { type: Number },
  reddit_day_count: { type: Number },
  historical_low_price: { type: Number },
  historical_low_date: { type: String },
  rank: { type: Number },
  trending_rank: { type: Number },
  primary_designer: {
    type: pdesignerSchema,
    default: {}
  },
  status: { type: Boolean }
})

module.exports = model('Games', gameSchema)
