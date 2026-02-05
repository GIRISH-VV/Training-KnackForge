import Movie from "../models/Movie.js";

export const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMovies = async (req, res) => {
  const { status, rating } = req.query;
  let filter = {};

  if (status) filter.status = status;
  if (rating) filter.rating = rating;

  const movies = await Movie.find(filter);
  res.json(movies);
};

// export const updateStatus = async (req, res) => {
//   const movie = await Movie.findByIdAndUpdate(
//     req.params.id,
//     { status: req.body.status },
//     { new: true }
//   );
//   res.json(movie);
// };

export const updateStatus = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    movie.status = req.body.status;
    await movie.save();

    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRating = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    { rating: req.body.rating },
    { new: true }
  );
  res.json(movie);
};