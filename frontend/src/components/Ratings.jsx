import Rating from "@mui/material/Rating";

export const showAverageRating = (product) => {
  if (!product || !product.ratings || product.ratings.length === 0) {
    return <div style={{ textAlign: "center", margin: "5px" }}>No ratings</div>;
  }

  const ratingsArray = product.ratings;

  const totalReduced = ratingsArray.reduce(
    (sum, r) => sum + parseFloat(r.star || 0),
    0
  );

  const length = ratingsArray.length;
  const highest = length * 5;
  const result = (totalReduced * 5) / highest;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
      }}
    >
      <Rating name="read-only" value={result} precision={0.1} readOnly />
      <span style={{ marginLeft: "5px" }}>({length})</span>
    </div>
  );
};
