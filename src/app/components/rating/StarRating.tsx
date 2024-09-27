import { motion } from "framer-motion";
import { getStarArray } from "../../util/util";
import Star from "./Star";

interface StarRatingProps {
  rating: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = getStarArray(rating);

  return (
    <motion.div
      className="flex items-stretch space-x-2 mb-4 mt-2"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {stars.map((star, index) => (
        <motion.div
          key={index}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <Star width={star.width} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StarRating;
