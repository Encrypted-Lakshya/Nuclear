import React, { useState } from 'react';
import { Star, Send, User } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const topReviews = reviews
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    setIsSubmitting(true);

    const review: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setReviews(prev => [review, ...prev]);
    setNewReview({ name: '', rating: 5, comment: '' });
    setIsSubmitting(false);
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={`${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-400'
            } ${interactive ? 'cursor-pointer hover:text-yellow-300' : ''} transition-colors`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            What clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Reviews Display */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Top Reviews</h3>
            {topReviews.length > 0 ? (
              topReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] rounded-full flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        <span className="text-sm text-gray-400">{review.date}</span>
                      </div>
                      <div className="mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">No Reviews Yet</h4>
                <p className="text-gray-400">Be the first to leave a review!</p>
              </div>
            )}
          </div>

          {/* Add Review Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-fit">
            <h3 className="text-2xl font-bold text-white mb-6">Leave a Review</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="reviewName" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="reviewName"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#15e37f] focus:ring-2 focus:ring-[#15e37f]/20 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Rating *
                </label>
                {renderStars(newReview.rating, true, (rating) => 
                  setNewReview({ ...newReview, rating })
                )}
              </div>

              <div>
                <label htmlFor="reviewComment" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Review *
                </label>
                <textarea
                  id="reviewComment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#15e37f] focus:ring-2 focus:ring-[#15e37f]/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Share your experience working with me..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#15e37f] to-[#ab1bf3] px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#15e37f]/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Submit Review</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;