import WishListItem from "../components/WishListItem";

export default () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6 mt-20">
        <h1 className="text-3xl font-bold mb-2">Your Wishlist</h1>
        <p className="text-gray-600 mb-6">
          There are 5 products in your wishlist.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm font-medium uppercase">
                <th className="py-3 px-4 text-left">
                  <input type="checkbox" className="h-4 w-4" />
                </th>
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-right">Amount</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
                <th className="py-3 px-4 text-center">Remove</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <WishListItem />
              <WishListItem />
              <WishListItem />
              <WishListItem />
              <WishListItem />
              <WishListItem />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
