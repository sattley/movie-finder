interface Star {
  width: number;
}

export function getStarArray(rating: string): Star[] {
    // Convert the IMDb rating to a 5-star system
    const fiveStarRating = (parseFloat(rating) / 10) * 5;
    const fullStars = Math.floor(fiveStarRating);
    // Get the remainder so we can render a partial star
    const remainder = fiveStarRating % 1;
    const stars: Star[] = [];
  
    // Add the full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push({ width: 100 });
    }
  
    // Add a partial star if we have a remainder
    if (remainder > 0) {
      // Convert the remainder to percentage
      const partialStarWidth = Math.round(remainder * 100);
      stars.push({ width: partialStarWidth });
    }
  
    // Add empty stars to complete the 5 stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push({ width: 0 });
    }
  
    return stars;
}
  