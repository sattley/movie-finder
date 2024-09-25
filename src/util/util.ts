export function getStarArray(rating: number) {
    // First we'll convert the IMDb rating to a 5-star system
    const fiveStarRating = (rating / 10) * 5;
    const fullStars = Math.floor(fiveStarRating);
    // Let's get the remainder so we can render a partial star
    const remainder = fiveStarRating % 1;
    const stars = [];
  
    // Let's add the full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push({ width: 100 });
    }
  
    // Now we'll add a partial star if we have a remainder
    if (remainder > 0) {
      // Let's convert the remainder to percentage
      const partialStarWidth = Math.round(remainder * 100);
      stars.push({ width: partialStarWidth });
    }
  
    // Lastly lets add empty stars to complete the 5 stars
    // width 0 will mask the star anyway
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push({ width: 0 });
    }
  
    return stars;
}
  