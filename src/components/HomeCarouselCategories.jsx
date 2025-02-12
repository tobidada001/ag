
import CategoryList from "./CategoryList";

const HomeCarouselCategories = () => {
      
  return (
    <aside className="hidden md:block w-2/5 lg:w-2/6 pr-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
      
        <CategoryList onNav={false}/>
      </div>
    </aside>
  )
}

export default HomeCarouselCategories;

