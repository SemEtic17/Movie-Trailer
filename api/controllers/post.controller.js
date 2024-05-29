import Movie from '../models/post.model.js';

export const getmovies = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;

    const Movies = await Movie.find({
      ...(req.query.id && { id: req.query.id }),
      ...(req.query.name && { name: req.query.name }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.video && { video: req.query.video }),
      ...(req.query.date && { date: { $regex: req.query.date, $options: 'i' } }), 
      ...(req.query.searchTerm && {
        $or: [
          { name: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalMovies = await Movie.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthMovies= await Movie.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      Movies,
      totalMovies,
      lastMonthMovies,
    });
  } catch (error) {
    next(error);
  }
};
