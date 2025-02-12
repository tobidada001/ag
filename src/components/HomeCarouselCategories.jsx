
import CategoryList from "./CategoryList";

const HomeCarouselCategories = () => {
      
  return (
    <aside className="hidden md:block w-1/4 lg:w-1/5 pr-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
      
        <CategoryList onNav={false}/>
      </div>
    </aside>
  )
}

export default HomeCarouselCategories;

