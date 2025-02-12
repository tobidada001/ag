import WishListItem from './../../components/WishListItem'

export default () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-2">Your Wishlist</h1>
        <p className="text-gray-600 mb-6">
          There are 5 products in your wishlist.
        </p>
        <div className=" bg-white rounded-md">
        <WishListItem />
        <WishListItem />
        <WishListItem />
        <WishListItem />


        </div>
      </div>
    </>
  );
};
