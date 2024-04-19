const State = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        {/* <em>Start addin some items to your packing list 🚀</em> */}
        <em>یه چندتا وسیله بزار تو کوله پشتیت 🎒 من حواسم هست 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <>
      <footer className="stats">
        {percentage === 100 ? (
          // <em>You got everything! Ready to go ✈</em>
          <em>همچی واسه رفتن آمادست ✈</em>
        ) : (
          <em>
            {numItems} قلم تو لیست هست {numPacked} قلم جمع شده ({percentage}%)
          </em>
          // <em>
          //   🎒 You have {numItems} item on your list, and you already packed{" "}
          //   {numPacked} ({percentage}%)
          // </em>
        )}
      </footer>
    </>
  );
};

export default State;
